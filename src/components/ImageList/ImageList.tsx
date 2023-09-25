import React from 'react';
import {
  ImageList as MuiImageList,
  ImageListProps as MuiImageListProps,
} from '@mui/material';

export function ImageList(props: MuiImageListProps) {
  return <MuiImageList {...props} />;
}

export default ImageList;
