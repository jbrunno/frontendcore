import { ComponentType } from 'react';
import { useSelector } from '@xstate/react';
import { useGlobalServices } from '@/hooks/useGlobalServices';
import { LOGIN_ROUTE } from '@/constants';
import { Navigate } from 'react-router';

export function checkAuthenticationUserMiddleware(route?: string) {
  return <T extends {}>(WrappedComponent: ComponentType<T>) => {
    function AuthenticatedComponent(props: T) {
      const { authService } = useGlobalServices();
      const loggedIn = useSelector(authService, (state) =>
        state.matches('loggedIn'),
      );
      if (!loggedIn) {
        return <Navigate to={route || LOGIN_ROUTE} replace />;
      }

      return <WrappedComponent {...props} />;
    }

    AuthenticatedComponent.displayName = `CheckAuthenticationUserMiddleware(${WrappedComponent.displayName})`;

    return AuthenticatedComponent;
  };
}
