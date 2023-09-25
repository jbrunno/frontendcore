import AddIcon from '@mui/icons-material/Add';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { Checkbox } from '../Checkbox';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (props) => (
  <Checkbox {...props}>
    <AddIcon />{' '}
  </Checkbox>
);

export const Default = Template.bind({});

export const DefaultChecked = Template.bind({});
DefaultChecked.args = {
  defaultChecked: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const DisabledChecked = Template.bind({});
DisabledChecked.args = {
  disabled: true,
  defaultChecked: true,
};
