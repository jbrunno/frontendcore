import { useState } from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import Step from '../../Step/Step';
import { StepButton } from '../StepButton';
import Stepper from '../../Stepper/Stepper';

export default {
  title: 'Component API/StepButton',
  component: StepButton,
} as ComponentMeta<typeof StepButton>;

const steps = [
  'Select campaign settings',
  'Create an ad group',
  'Create an ad',
];

export const Default: ComponentStory<typeof StepButton> = () => {
  const [activeStep, setActiveStep] = useState(0);
  const handleStep = (step: number) => () => {
    setActiveStep(step);
  };
  return (
    <Stepper nonLinear activeStep={activeStep}>
      {steps.map((label, index) => (
        <Step key={label}>
          <StepButton color="inherit" onClick={handleStep(index)}>
            {label}
          </StepButton>
        </Step>
      ))}
    </Stepper>
  );
};
