import React from 'react';
import { render } from '@test-utils/component-testing';
import Alert from './Alert';

test('renders the Alert', () => {
  const { container } = render(
    <Alert severity="error" variant="outlined" color="info">
      Alert test
    </Alert>,
  );
  expect(container).toMatchSnapshot();
});
