import React from 'react';
import {
  TimePicker as MuiTimePicker,
  TimePickerProps as MuiTimePickerProps,
  LocalizationProvider,
} from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { ptBR } from 'date-fns/locale';

export type TimePickerProps = MuiTimePickerProps<Date | null, Date | null>;

export function TimePicker(props: TimePickerProps) {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ptBR}>
      <MuiTimePicker {...props} />
    </LocalizationProvider>
  );
}

export default TimePicker;
