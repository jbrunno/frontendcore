import type { ComponentMeta } from '@storybook/react';
import TimePicker from '../TimePicker';
import TextField from '../../TextField/TextField';
import { useTimePicker } from '../hooks/useTimePicker';

export default {
  id: 'timePicker',
  title: 'Mui X/TimePicker',
  component: TimePicker,
  argTypes: {
    onChange: {
      type: 'function',
    },
    renderInput: {
      type: 'function',
    },
    ampm: {
      control: {
        type: 'boolean',
      },
    },
    ampmInClock: {
      control: {
        type: 'boolean',
      },
    },
    closeOnSelect: {
      control: {
        type: 'boolean',
      },
    },
    disabled: {
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
      defaultValue: 'Time Picker',
      control: {
        type: 'text',
      },
    },
    minutesStep: {
      control: {
        type: 'number',
      },
    },
    openTo: {
      options: ['hours', 'minutes', 'seconds'],
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
} as ComponentMeta<typeof TimePicker>;

export function Default() {
  const {
    actions: { onChangeDate },
    data: { newDate },
  } = useTimePicker();

  return (
    <TimePicker
      label="Time Picker"
      value={newDate}
      onChange={onChangeDate}
      renderInput={(params) => <TextField {...params} />}
    />
  );
}
