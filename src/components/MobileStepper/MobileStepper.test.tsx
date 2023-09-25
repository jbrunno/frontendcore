import React from 'react';
import { render } from '@test-utils/component-testing';
import MobileStepper from './MobileStepper';

test('renders the MobileStepper', () => {
  const { container } = render(
    <MobileStepper
      variant="text"
      steps={3}
      position="static"
      activeStep={1}
      nextButton={<div>next</div>}
      backButton={<div>back</div>}
    />,
  );
  expect(container).toMatchSnapshot();
});
