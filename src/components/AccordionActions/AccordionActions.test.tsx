import React from 'react';
import { render } from '@test-utils/component-testing';
import AccordionActions from './AccordionActions';

test('renders the AccordionActions', () => {
  const { container } = render(<AccordionActions />);
  expect(container).toMatchSnapshot();
});
