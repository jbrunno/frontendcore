import React from 'react';
import { render } from '@test-utils/component-testing';
import { ImageList } from './ImageList';
import ImageListItem from '../ImageListItem/ImageListItem';

test('renders the ImageList', () => {
  const { container } = render(
    <ImageList>
      <ImageListItem>
        <img
          src="$https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=164&h=164&fit=crop&auto=format"
          srcSet="$https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=164&h=164&fit=crop&auto=format&dpr=2 2x"
          alt="Basketball"
          loading="lazy"
        />
      </ImageListItem>
      <ImageListItem>
        <img
          src="$https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=164&h=164&fit=crop&auto=format"
          srcSet="$https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=164&h=164&fit=crop&auto=format&dpr=2 2x"
          alt="Basketball"
          loading="lazy"
        />
      </ImageListItem>
    </ImageList>,
  );
  expect(container).toMatchSnapshot();
});
