import React from 'react';
import { render } from '@test-utils/component-testing';
import { ImageListItemBar } from './ImageListItemBar';

test('renders the ImageListItemBar', () => {
  const { container } = render(<ImageListItemBar />);
  expect(container).toMatchSnapshot();
});
