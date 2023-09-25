import {
  MobileStepper as MuiMobileStepper,
  MobileStepperProps as MuiMobileStepperProps,
} from '@mui/material';

export type MobileStepperProps = MuiMobileStepperProps;

export function MobileStepper(props: MobileStepperProps) {
  return <MuiMobileStepper {...props} />;
}

export default MobileStepper;
