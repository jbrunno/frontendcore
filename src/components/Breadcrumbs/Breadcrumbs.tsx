import React from 'react';
import {
  Breadcrumbs as MuiBreadcrumbs,
  BreadcrumbsProps as MuiBreadcrumbsProps,
} from '@mui/material';

export type BreadcrumbsProps = MuiBreadcrumbsProps;

export function Breadcrumbs(props: BreadcrumbsProps) {
  return <MuiBreadcrumbs {...props} />;
}
export default Breadcrumbs;
