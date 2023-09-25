import React, { ComponentType, lazy, Suspense } from 'react';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';

function ErrorFallback({ error }: FallbackProps) {
  return (
    <div>
      <p>Something went wrong:</p>
      <p>{error.message}</p>
    </div>
  );
}

// eslint-disable-next-line @typescript-eslint/ban-types
export type SuspensableComponent<C = ComponentType<{}>> =
  | C
  | Promise<{ default: C }>;

type SuspensableProps = {
  component: SuspensableComponent;
  suspense?: boolean;
  children: JSX.Element;
};

export function Suspensable({
  children,
  suspense = true,
  component,
}: SuspensableProps) {
  const Component =
    component instanceof Promise ? lazy(() => component) : component;

  if (suspense) {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Component />
          {children}
        </ErrorBoundary>
      </Suspense>
    );
  }

  return (
    <>
      <Component />
      {children}
    </>
  );
}
