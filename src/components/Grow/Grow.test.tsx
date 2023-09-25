import { render } from '@test-utils/component-testing';
import React, { forwardRef } from 'react';
import { Grow } from './Grow';
import Button from '../Button/Button';

test('renders the Grow', () => {
  const ButtonGrow = forwardRef<HTMLDivElement>((props, ref) => (
    <div {...props} ref={ref}>
      <Button variant="contained">teste</Button>
    </div>
  ));

  const { container } = render(
    <Grow appear in mountOnEnter unmountOnExit>
      <ButtonGrow />
    </Grow>,
  );
  expect(container).toMatchSnapshot();
});
