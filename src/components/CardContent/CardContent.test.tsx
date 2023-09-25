import React from 'react';
import { render } from '@test-utils/component-testing';
import { CardContent } from './CardContent';
import Button from '../Button/Button';

test('renders the CardContent', () => {
  const { container } = render(
    <CardContent>
      <Button>Share</Button>
    </CardContent>,
  );
  expect(container).toMatchSnapshot();
});
