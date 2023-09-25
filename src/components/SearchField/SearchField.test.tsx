import React from 'react';
import { render } from '@test-utils/component-testing';
import { SearchField } from './SearchField';

test('renders the SearchField', () => {
  const { container } = render(<SearchField value="Search" />);
  expect(container).toMatchSnapshot();
});
