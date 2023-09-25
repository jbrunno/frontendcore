import { styled } from '@mui/material/styles';
import { Check as CheckIcon } from '@mui/icons-material';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import Step from '../../Step/Step';
import StepLabel from '../../StepLabel/StepLabel';
import Stepper from '../../Stepper/Stepper';
import { StepIcon, StepIconProps } from '../StepIcon';

export default {
  title: 'Component API/StepIcon',
  component: StepIcon,
} as ComponentMeta<typeof StepIcon>;

const QontoStepIconRoot = styled('div')<{ ownerState: { active?: boolean } }>(
  ({ theme, ownerState }) => ({
    color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#eaeaf0',
    display: 'flex',
    height: 22,
    alignItems: 'center',
    ...(ownerState.active && {
      color: '#784af4',
    }),
    '& .QontoStepIcon-completedIcon': {
      color: '#784af4',
      zIndex: 1,
      fontSize: 18,
    },
    '& .QontoStepIcon-circle': {
      width: 8,
      height: 8,
      borderRadius: '50%',
      backgroundColor: 'currentColor',
    },
  }),
);

function QontoStepIcon(props: StepIconProps) {
  const { active, completed, className } = props;

  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      {completed ? (
        <CheckIcon className="QontoStepIcon-completedIcon" />
      ) : (
        <div className="QontoStepIcon-circle" />
      )}
    </QontoStepIconRoot>
  );
}

const steps = [
  'Select campaign settings',
  'Create an ad group',
  'Create an ad',
];

export const Default: ComponentStory<typeof StepIcon> = () => (
  <Stepper activeStep={1}>
    {steps.map((label) => (
      <Step key={label}>
        <StepLabel StepIconComponent={QontoStepIcon}>{label}</StepLabel>
      </Step>
    ))}
  </Stepper>
);
