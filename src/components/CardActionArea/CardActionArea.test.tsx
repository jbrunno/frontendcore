import React from 'react';
import { render } from '@test-utils/component-testing';
import { CardActionArea } from './CardActionArea';

test('renders the CardActionArea', () => {
  const { container } = render(<CardActionArea />);
  expect(container).toMatchSnapshot();
});
