import React from 'react';
import {
  AvatarGroup as MuiAvatarGroup,
  AvatarGroupProps as MuiAvatarGroupProps,
} from '@mui/material';

export type AvatarGroupProps = MuiAvatarGroupProps;

export function AvatarGroup(props: AvatarGroupProps) {
  return <MuiAvatarGroup {...props} />;
}

export default AvatarGroup;
