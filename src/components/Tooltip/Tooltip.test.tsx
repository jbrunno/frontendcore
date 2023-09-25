import React from 'react';
import { render } from '@test-utils/component-testing';
import { Tooltip } from './Tooltip';
import { Button } from '../Button/Button';

test('renders the Tooltip', () => {
  const { container } = render(
    <Tooltip title="Delete">
      <Button>Delete</Button>
    </Tooltip>,
  );
  expect(container).toMatchSnapshot();
});
