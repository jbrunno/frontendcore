import {
  OutlinedInput as MuiOutlinedInput,
  OutlinedInputProps as MuiOutlinedInputProps,
} from '@mui/material';

export type OutlinedInputProps = MuiOutlinedInputProps;

export function OutlinedInput(props: OutlinedInputProps) {
  return <MuiOutlinedInput {...props} />;
}

export default OutlinedInput;
