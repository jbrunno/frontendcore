import React from 'react';
import { render } from '@test-utils/component-testing';
import AlertTitle from './AlertTitle';
import Alert from '../Alert/Alert';

test('renders the AlertTitle', () => {
  const { container } = render(
    <Alert severity="error" variant="outlined" color="info">
      <AlertTitle>WithTitle</AlertTitle>
      Alert test
    </Alert>,
  );
  expect(container).toMatchSnapshot();
});
