import { render } from '@test-utils/component-testing';
import React, { forwardRef } from 'react';
import { Slide } from './Slide';
import Button from '../Button/Button';

test('renders the Slide', () => {
  const ButtonSlide = forwardRef<HTMLDivElement>((props, ref) => (
    <div {...props} ref={ref}>
      <Button variant="contained">teste</Button>
    </div>
  ));

  const { container } = render(
    <Slide direction="up" in mountOnEnter unmountOnExit>
      <ButtonSlide />
    </Slide>,
  );
  expect(container).toMatchSnapshot();
});
