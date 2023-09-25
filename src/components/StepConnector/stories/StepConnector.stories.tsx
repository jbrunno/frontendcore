import { styled } from '@mui/material/styles';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import Step from '../../Step/Step';
import StepLabel from '../../StepLabel/StepLabel';
import Stepper from '../../Stepper/Stepper';
import { StepConnector, stepConnectorClasses } from '../StepConnector';

export default {
  title: 'Component API/StepConnector',
  component: StepConnector,
} as ComponentMeta<typeof StepConnector>;

export const Default: ComponentStory<typeof StepConnector> = (props) => {
  const QontoConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
      top: 10,
      left: 'calc(-50% + 16px)',
      right: 'calc(50% + 16px)',
    },
    [`&.${stepConnectorClasses.active}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        borderColor: '#784af4',
      },
    },
    [`&.${stepConnectorClasses.completed}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        borderColor: '#784af4',
      },
    },
    [`& .${stepConnectorClasses.line}`]: {
      borderColor:
        theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
      borderTopWidth: 3,
      borderRadius: 1,
    },
  }));

  const steps = [
    'Select campaign settings',
    'Create an ad group',
    'Create an ad',
  ];

  return (
    <Stepper
      alternativeLabel
      activeStep={1}
      connector={<QontoConnector {...props} />}
    >
      {steps.map((label) => (
        <Step key={label}>
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </Stepper>
  );
};
