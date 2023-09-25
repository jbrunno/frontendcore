import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { useState } from 'react';
import { PasswordField } from '../PasswordField';

export default {
  title: 'Components/PasswordField',
  component: PasswordField,
} as ComponentMeta<typeof PasswordField>;

export const Default = (props: ComponentStory<typeof PasswordField>) => {
  const [value, setValue] = useState('');
  return (
    <PasswordField
      value={value}
      onChange={(event) => {
        setValue(event.target.value);
      }}
      {...props}
    />
  );
};

Default.args = {
  label: 'Password Field',
  variant: 'outlined',
  size: 'small',
};
