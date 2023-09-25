import React from 'react';
import { render } from '@test-utils/component-testing';
import { CardActions } from './CardActions';
import Button from '../Button/Button';

test('renders the CardActions', () => {
  const { container } = render(
    <CardActions>
      <Button>Share</Button>
    </CardActions>,
  );
  expect(container).toMatchSnapshot();
});
