import React from 'react';
import { render } from '@test-utils/component-testing';
import { Slider } from './Slider';

test('renders the Slider', () => {
  const { container } = render(<Slider value={40} />);
  expect(container).toMatchSnapshot();
});
