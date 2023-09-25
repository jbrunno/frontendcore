import type { ComponentStory, ComponentMeta } from '@storybook/react';

import StepLabel from '../StepLabel';
import Step from '../../Step/Step';
import Stepper from '../../Stepper/Stepper';

export default {
  title: 'Component API/StepLabel',
  component: StepLabel,
  argTypes: {
    error: {
      control: {
        type: 'boolean',
      },
    },
    icon: {
      defaultValue: '1',
      control: {
        type: 'object',
      },
    },
    optional: {
      defaultValue: 'optional',
      control: {
        type: 'object',
      },
    },
  },
} as ComponentMeta<typeof StepLabel>;

export function Default(props: ComponentStory<typeof StepLabel>) {
  return (
    <Stepper activeStep={0}>
      <Step>
        <StepLabel {...props}>StepLabel</StepLabel>
      </Step>
    </Stepper>
  );
}
