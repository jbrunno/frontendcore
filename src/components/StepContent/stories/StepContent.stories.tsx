import { useState } from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { StepContent } from '../StepContent';
import Box from '../../Box/Box';
import Stepper from '../../Stepper/Stepper';
import Step from '../../Step/Step';
import StepLabel from '../../StepLabel/StepLabel';
import Button from '../../Button/Button';

export default {
  title: 'Component API/StepContent',
  component: StepContent,
} as ComponentMeta<typeof StepContent>;

export function Default(props: ComponentStory<typeof StepContent>) {
  const [activeStep, setActiveStep] = useState(0);
  const steps = [
    { title: 'Start', description: 'Initial Description' },
    { title: 'Finish', description: 'Finish Description' },
  ];

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map(({ description, title }) => (
          <Step {...props} key={title}>
            <StepLabel>{title}</StepLabel>
            <StepContent {...props}>{description}</StepContent>
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
