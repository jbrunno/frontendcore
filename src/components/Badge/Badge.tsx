import React from 'react';
import { Badge as MuiBadge, BadgeProps as MuiBadgeProps } from '@mui/material';

export type BadgeProps = MuiBadgeProps;

export function Badge(props: BadgeProps) {
  return <MuiBadge {...props} />;
}

export default Badge;
