import type { ComponentMeta } from '@storybook/react';
import DatePicker from '../DatePicker';
import TextField from '../../TextField/TextField';
import { useDatePicker } from '../hooks/useDatePicker';

export default {
  id: 'datepicker',
  title: 'Mui X/DatePicker',
  component: DatePicker,
  argTypes: {
    onChange: {
      type: 'function',
    },
    renderInput: {
      type: 'function',
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    disableFuture: {
      control: {
        type: 'boolean',
      },
    },
    disablePast: {
      control: {
        type: 'boolean',
      },
    },
    disableHighlightToday: {
      control: {
        type: 'boolean',
      },
    },
    disableOpenPicker: {
      control: {
        type: 'boolean',
      },
    },
    loading: {
      control: {
        type: 'boolean',
      },
    },
    inputFormat: {
      defaultValue: 'dd/MM/yyyy',
      control: {
        type: 'text',
      },
    },
    label: {
      defaultValue: 'Date Picker',
      control: {
        type: 'text',
      },
    },
    open: {
      control: {
        type: 'boolean',
      },
    },
    openTo: {
      options: ['day', 'month', 'year'],
      control: {
        type: 'select',
      },
    },
    showToolbar: {
      control: {
        type: 'boolean',
      },
    },
  },
} as ComponentMeta<typeof DatePicker>;

export function Default() {
  const {
    actions: { onChangeDate },
    data: { newDate },
  } = useDatePicker();

  return (
    <DatePicker
      label="Date Picker"
      value={newDate}
      onChange={onChangeDate}
      renderInput={(params) => <TextField {...params} />}
    />
  );
}
