import React from 'react';
import { render } from '@test-utils/component-testing';
import { ButtonLoading } from './ButtonLoading';

test('renders the ButtonLoading', () => {
  const { container } = render(<ButtonLoading isLoading={false} />);
  expect(container).toMatchSnapshot();
});
