import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { useTheme } from '@mui/material/styles';
import {
  KeyboardArrowLeft as KeyboardArrowLeftIcon,
  KeyboardArrowRight as KeyboardArrowRightIcon,
} from '@mui/icons-material';
import MobileStepper from '../MobileStepper';
import Button from '../../Button/Button';

export default {
  title: 'Component API/MobileStepper',
  component: MobileStepper,
} as ComponentMeta<typeof MobileStepper>;

export function Default(props: ComponentStory<typeof MobileStepper>) {
  const theme = useTheme();
  const maxSteps = 3;
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <MobileStepper
      variant="text"
      steps={maxSteps}
      position="static"
      activeStep={activeStep}
      {...props}
      nextButton={
        <Button
          size="small"
          onClick={handleNext}
          disabled={activeStep === maxSteps - 1}
        >
          Next
          {theme.direction === 'rtl' ? (
            <KeyboardArrowLeftIcon />
          ) : (
            <KeyboardArrowRightIcon />
          )}
        </Button>
      }
      backButton={
        <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
          {theme.direction === 'rtl' ? (
            <KeyboardArrowRightIcon />
          ) : (
            <KeyboardArrowLeftIcon />
          )}
          Back
        </Button>
      }
    />
  );
}
