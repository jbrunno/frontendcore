import React from 'react';
import {
  ListItemAvatar as MuiListItemAvatar,
  ListItemAvatarProps as MuiListItemAvatarProps,
} from '@mui/material';

export type ListItemAvatarProps = MuiListItemAvatarProps;

export function ListItemAvatar(props: ListItemAvatarProps) {
  return <MuiListItemAvatar {...props} />;
}
export default ListItemAvatar;
