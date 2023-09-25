import React from 'react';
import { render } from '@test-utils/component-testing';
import { Container } from './Container';

test('renders the Container', () => {
  const { container } = render(<Container />);
  expect(container).toMatchSnapshot();
});
