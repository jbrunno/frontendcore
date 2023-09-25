import React from 'react';
import { render } from '@test-utils/component-testing';
import { Link } from './Link';

test('renders the Link', () => {
  const { container } = render(<Link href="/" />);
  expect(container).toMatchSnapshot();
});
