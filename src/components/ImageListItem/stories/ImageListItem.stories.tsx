import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import ImageListItem from '../ImageListItem';

export default {
  title: 'Component API/ImageListItem',
  component: ImageListItem,
} as ComponentMeta<typeof ImageListItem>;

export function Default(props: ComponentStory<typeof ImageListItem>) {
  return (
    <ImageListItem {...props}>
      <img
        src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=164&h=164&fit=crop&auto=format"
        srcSet="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=164&h=164&fit=crop&auto=format&dpr=2 2x"
        alt="Basketball"
        loading="lazy"
      />
    </ImageListItem>
  );
}
