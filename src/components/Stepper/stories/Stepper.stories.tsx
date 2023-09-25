import type { ComponentStory, ComponentMeta } from '@storybook/react';
import Box from '../../Box/Box';
import Button from '../../Button/Button';
import Paper from '../../Paper/Paper';
import { Typography } from '../../Typography/Typography';
import { useHorizontalLinearStepper } from './hooks/useHorizontalLinearStepper';
import { useVerticalLinearStepper } from './hooks/useVerticalLinearStepper';

import Stepper from '../Stepper';
import Step from '../../Step/Step';
import StepLabel from '../../StepLabel/StepLabel';
import StepContent from '../../StepContent/StepContent';

export default {
  title: 'Navigation/Stepper',
  component: Stepper,
  argTypes: {
    orientation: {
      options: ['horizontal', 'vertical'],
      control: {
        type: 'radio',
      },
    },
    alternativeLabel: {
      control: {
        type: 'boolean',
      },
    },
  },
} as ComponentMeta<typeof Stepper>;

export function HorizontalLinearStepper(props: ComponentStory<typeof Stepper>) {
  const {
    data: { steps, activeStep, labelProps, stepProps },
    actions: {
      isStepOptional,
      isStepSkipped,
      handleReset,
      handleBack,
      handleNext,
      handleSkip,
    },
  } = useHorizontalLinearStepper();

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep} {...props}>
        {steps.map((label, index) => {
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </>
      ) : (
        <>
          <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )}
            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
}

export function VerticalLinearStepper(props: ComponentStory<typeof Stepper>) {
  const {
    data: { activeStep, steps },
    actions: { handleNext, handleBack, handleReset },
  } = useVerticalLinearStepper();

  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper activeStep={activeStep} orientation="vertical" {...props}>
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              optional={
                index === 2 ? (
                  <Typography variant="caption">Last step</Typography>
                ) : null
              }
            >
              {step.label}
            </StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? 'Finish' : 'Continue'}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )}
    </Box>
  );
}
