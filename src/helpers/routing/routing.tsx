import React, { ComponentType } from 'react';
import flowRight from 'lodash.flowright';
import { Outlet } from 'react-router-dom';
import { withTransaction } from '@elastic/apm-rum-react';

type RoutingOptions<P> = {
  suspense?: boolean;
  middlewares?: Array<
    (component: ComponentType<P>) => {
      (props: P): JSX.Element | undefined;
      displayName: string;
    }
  >;
};

export function routing<P extends {}>(
  component: ComponentType,
  options?: RoutingOptions<P>,
) {
  const Component = withTransaction(
    `Screen ${component.displayName}`,
    'component',
  )(component);
  Component.displayName = `ElasticApmTransaction(${component.displayName})`;

  function Routing() {
    return (
      <>
        <Component />
        <Outlet />
      </>
    );
  }
  Routing.displayName = `Routing(${component.displayName})`;

  return flowRight(options?.middlewares || [])(Routing);
}
