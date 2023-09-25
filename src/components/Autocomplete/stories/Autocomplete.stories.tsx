import { AutocompleteRenderInputParams } from '@mui/material';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import TextField from '../../TextField/TextField';

import { Autocomplete } from '../Autocomplete';

const movies = [
  { label: 'The Shawshank Redemption', year: 1994 },
  { label: 'The Godfather', year: 1972 },
  { label: 'The Godfather: Part II', year: 1974 },
  { label: 'The Dark Knight', year: 2008 },
  { label: '12 Angry Men', year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: 'Pulp Fiction', year: 1994 },
];

export default {
  id: 'autocomplete',
  title: 'Inputs/Autocomplete',
  component: Autocomplete,
  args: {
    renderInput: (params: AutocompleteRenderInputParams) => (
      <TextField {...params} label="Movie" />
    ),
    options: movies,
  },
  argTypes: {
    multiple: { control: 'boolean' },
    size: { control: 'radio', options: ['small', 'medium'] },
  },
} as ComponentMeta<typeof Autocomplete>;

const Template: ComponentStory<typeof Autocomplete> = (args) => (
  <Autocomplete {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: 'Default',
};

export const OptionsDisabled = Template.bind({});
OptionsDisabled.args = {
  title: 'OptionsDisabled',
  getOptionDisabled: (option) =>
    (option as { label: string }).label === movies[0].label ||
    (option as { label: string }).label === movies[2].label,
};
