import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Search as SearchIcon } from '@mui/icons-material';
import { InputAdornment, InputAdornmentProps } from '../InputAdornment';

export default {
  id: 'inputAdornment',
  title: 'Component API/InputAdornment',
  component: InputAdornment,
} as ComponentMeta<typeof InputAdornment>;

export const Default: ComponentStory<typeof InputAdornment> = (
  props: InputAdornmentProps,
) => (
  <InputAdornment {...props}>
    <SearchIcon />
  </InputAdornment>
);

Default.args = {
  position: 'start',
};
