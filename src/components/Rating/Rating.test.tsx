import React from 'react';
import { render } from '@test-utils/component-testing';
import { Rating } from './Rating';

test('renders the Rating', () => {
  const { container } = render(<Rating value={3} />);
  expect(container).toMatchSnapshot();
});
