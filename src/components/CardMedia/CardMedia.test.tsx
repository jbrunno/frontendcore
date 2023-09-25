import React from 'react';
import { render } from '@test-utils/component-testing';
import { CardMedia } from './CardMedia';

test('renders the CardMedia', () => {
  const { container } = render(<CardMedia />);
  expect(container).toMatchSnapshot();
});
