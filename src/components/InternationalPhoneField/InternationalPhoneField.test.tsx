import React from 'react';
import { render } from '@test-utils/component-testing';
import { InternationalPhoneField } from './InternationalPhoneField';

test('renders the InternationalPhoneField', () => {
  const { container } = render(<InternationalPhoneField />);
  expect(container).toMatchSnapshot();
});
