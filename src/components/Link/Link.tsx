import React from 'react';
import { Link as MuiLink, LinkProps as MuiLinkProps } from '@mui/material';

export type LinkProps = MuiLinkProps;

export function Link(props: LinkProps) {
  return <MuiLink {...props} />;
}
export default Link;
