import React from 'react';
import { render } from '@test-utils/component-testing';
import { DialogContent } from './DialogContent';

test('renders the DialogContent', () => {
  const { container } = render(<DialogContent />);
  expect(container).toMatchSnapshot();
});
