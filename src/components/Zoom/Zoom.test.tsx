import { render } from '@test-utils/component-testing';
import React, { forwardRef } from 'react';
import { Zoom } from './Zoom';
import Button from '../Button/Button';

test('renders the Zoom', () => {
  const ButtonZoom = forwardRef<HTMLDivElement>((props, ref) => (
    <div {...props} ref={ref}>
      <Button variant="contained">teste</Button>
    </div>
  ));

  const { container } = render(
    <Zoom appear in mountOnEnter unmountOnExit>
      <ButtonZoom />
    </Zoom>,
  );
  expect(container).toMatchSnapshot();
});
