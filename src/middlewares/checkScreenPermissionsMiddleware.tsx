import { ComponentType, useEffect, useState } from 'react';
import { useSelector } from '@xstate/react';
import { useGlobalServices } from '@/hooks/useGlobalServices';
import { Navigate } from 'react-router-dom';
import { gql } from '@apollo/client';
import { useApiClient } from '@/hooks';
import { LOGIN_ROUTE } from '@/constants';

export function checkScreenPermissionsMiddleware(
  screen: string,
  route?: string,
) {
  return <T extends {}>(WrappedComponent: ComponentType<T>) => {
    function CheckedComponent(props: T) {
      const { screensService, stateService } = useGlobalServices();
      const screensContext = useSelector(screensService, (state) =>
        state.matches('screensDataDefined') ? state.context : null,
      );
      const loginURL = useSelector(
        stateService,
        ({ context }) => context.data?.loginURL as string,
      );
      const client = useApiClient({ bffURL: loginURL });

      const [isPermissionsUpdated, setPermissionsUpdated] = useState(false);
      const toRoute = route || LOGIN_ROUTE;

      useEffect(() => {
        if (
          screensContext &&
          screensContext[screen]?.permissions?.length === 0
        ) {
          client
            .query({
              query: SCREEN_PERMISSIONS,
              variables: { resource: screen },
            })
            .then(({ data }) => {
              const permissions = data && data.resourcePermissions.permissions;

              if (permissions) {
                screensService.send({
                  type: 'UPDATE_SCREENS_DATA',
                  screens: {
                    [screen]: {
                      permissions,
                    },
                  },
                });
                setPermissionsUpdated(true);
              }
            });
        }
      }, [client, screensContext]);

      if (screensContext) {
        if (!screensContext[screen]) {
          return <Navigate to={toRoute} replace />;
        }
        if (screensContext[screen].permissions?.length > 0) {
          return <WrappedComponent {...props} />;
        }
      }

      if (isPermissionsUpdated) {
        setPermissionsUpdated(false);
        return <WrappedComponent {...props} />;
      }
    }

    CheckedComponent.displayName = `CheckScreenPermissionsMiddleware(${WrappedComponent.displayName})`;

    return CheckedComponent;
  };
}

const SCREEN_PERMISSIONS = gql`
  query ResourcePermissions($resource: String!) {
    resourcePermissions(resource: $resource) {
      permissions
    }
  }
`;
