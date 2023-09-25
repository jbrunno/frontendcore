import { render } from '@test-utils/component-testing';
import React, { forwardRef } from 'react';
import { Fade } from './Fade';
import Button from '../Button/Button';

test('renders the Fade', () => {
  const ButtonFade = forwardRef<HTMLDivElement>((props, ref) => (
    <div {...props} ref={ref}>
      <Button variant="contained">teste</Button>
    </div>
  ));

  const { container } = render(
    <Fade appear in mountOnEnter unmountOnExit>
      <ButtonFade />
    </Fade>,
  );
  expect(container).toMatchSnapshot();
});
