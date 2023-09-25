import React from 'react';
import { render } from '@test-utils/component-testing';
import { CardHeader } from './CardHeader';

test('renders the CardHeader', () => {
  const { container } = render(<CardHeader />);
  expect(container).toMatchSnapshot();
});
