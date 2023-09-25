import React from 'react';
import {
  ImageListItem as MuiImageListItem,
  ImageListItemProps as MuiImageListItemProps,
} from '@mui/material';

export function ImageListItem(props: MuiImageListItemProps) {
  return <MuiImageListItem {...props} />;
}

export default ImageListItem;
