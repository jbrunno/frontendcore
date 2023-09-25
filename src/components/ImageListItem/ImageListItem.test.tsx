import React from 'react';
import { render } from '@test-utils/component-testing';
import { ImageListItem } from './ImageListItem';

test('renders the ImageListItem', () => {
  const { container } = render(<ImageListItem />);
  expect(container).toMatchSnapshot();
});
