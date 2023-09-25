import React from 'react';

export type ChildrenProp<T = React.ReactNode | JSX.Element> = {
  children: T;
};

export type PropsWithChildren<
  P = unknown,
  T = React.ReactNode | JSX.Element,
> = P & {
  children: T;
};

export type Children<T = React.ReactNode | JSX.Element> = T;
