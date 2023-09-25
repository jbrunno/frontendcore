import React from 'react';
import { render } from '@test-utils/component-testing';
import { Card } from './Card';

test('renders the Card', () => {
  const { container } = render(<Card />);
  expect(container).toMatchSnapshot();
});
