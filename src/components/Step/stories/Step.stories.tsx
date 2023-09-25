import { useState } from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

import Step from '../Step';
import Stepper from '../../Stepper/Stepper';
import Box from '../../Box/Box';
import Button from '../../Button/Button';
import StepLabel from '../../StepLabel/StepLabel';

export default {
  title: 'Component API/Step',
  component: Step,
  argTypes: {
    active: {
      control: {
        type: 'boolean',
      },
    },
    completed: {
      control: {
        type: 'boolean',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    expanded: {
      control: {
        type: 'boolean',
      },
    },
    last: {
      control: {
        type: 'boolean',
      },
    },
    index: {
      control: {
        type: 'number',
      },
    },
  },
} as ComponentMeta<typeof Step>;

export function Default(props: ComponentStory<typeof Step>) {
  const [activeStep, setActiveStep] = useState(0);
  const steps = ['Start', 'Finish'];

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label) => (
          <Step {...props} key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
        <Button
          color="inherit"
          disabled={activeStep === 0}
          onClick={() => setActiveStep((prevActiveStep) => prevActiveStep - 1)}
          sx={{ mr: 1 }}
        >
          Start
        </Button>
        <Button
          onClick={() => setActiveStep((prevActiveStep) => prevActiveStep + 1)}
          disabled={activeStep === steps.length - 1}
        >
          {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
        </Button>
      </Box>
    </Box>
  );
}
