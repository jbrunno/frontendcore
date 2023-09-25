import AddIcon from '@mui/icons-material/Add';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { Fab } from '../Fab';

export default {
  title: 'Components/Fab',
  component: Fab,
} as ComponentMeta<typeof Fab>;

const Template: ComponentStory<typeof Fab> = (props) => (
  <Fab {...props}>
    <AddIcon />{' '}
  </Fab>
);

export const Default = Template.bind({});

export const Color = Template.bind({});
Color.args = {
  color: 'secondary',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
};

export const Extended = Template.bind({});
Extended.args = {
  variant: 'extended',
};
