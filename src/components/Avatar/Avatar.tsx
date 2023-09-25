import React from 'react';
import {
  Avatar as MuiAvatar,
  AvatarProps as MuiAvatarProps,
} from '@mui/material';

export type AvatarProps = MuiAvatarProps;

export function Avatar(props: AvatarProps) {
  return <MuiAvatar {...props} />;
}

export default Avatar;
