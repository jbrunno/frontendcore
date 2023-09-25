import React from 'react';
import {
  Rating as MuiRating,
  RatingProps as MuiRatingProps,
} from '@mui/material';

export type RatingProps = MuiRatingProps;

export function Rating(props: RatingProps) {
  return <MuiRating {...props} />;
}

export default Rating;
