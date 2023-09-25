import {
  NativeSelect as MuiNativeSelect,
  NativeSelectProps as MuiNativeSelectProps,
} from '@mui/material';

export type NativeSelectProps = MuiNativeSelectProps;

export function NativeSelect(props: NativeSelectProps) {
  return <MuiNativeSelect {...props} />;
}

export default NativeSelect;
