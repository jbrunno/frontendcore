import type { ComponentStory, ComponentMeta } from '@storybook/react';

import {
  CheckCircleOutline as CheckCircleOutlineIcon,
  Check as CheckIcon,
} from '@mui/icons-material';
import Alert from '../Alert';
import Button from '../../Button/Button';
import AlertTitle from '../../AlertTitle/AlertTitle';

export default {
  title: 'Feedback/Alert',
  component: Alert,
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (props) => <Alert {...props} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Default',
  children: 'Alert default!',
};

export const Error = Template.bind({});
Error.args = {
  title: 'Error',
  children: 'Alert error!',
  severity: 'error',
};

export const Warning = Template.bind({});
Warning.args = {
  title: 'Warning',
  children: 'Alert warning!',
  severity: 'warning',
};

export const Info = Template.bind({});
Info.args = {
  title: 'Info',
  children: 'Alert info!',
  severity: 'info',
};

export const Success = Template.bind({});
Success.args = {
  title: 'Success',
  children: 'Alert success!',
  severity: 'success',
};

export const Color = Template.bind({});
Color.args = {
  title: 'Color',
  children: 'Alert Color!',
  severity: 'error',
  color: 'info',
};

export const Outlined = Template.bind({});
Outlined.args = {
  title: 'Outlined',
  children: 'Alert Outlined!',
  severity: 'info',
  variant: 'outlined',
};

export const Filled = Template.bind({});
Filled.args = {
  title: 'Filled',
  children: 'Alert Filled!',
  variant: 'filled',
};

export const Standard = Template.bind({});
Standard.args = {
  title: 'Standard',
  children: 'Alert Standard!',
  variant: 'standard',
};

export const WithTitle = Template.bind({});
WithTitle.args = {
  title: 'WithTitle',
  children: (
    <>
      <AlertTitle>WithTitle</AlertTitle>
      WithTitle Alert!
    </>
  ),
};

export const WithAction = Template.bind({});
WithAction.args = {
  title: 'WithAction',
  children: 'WithIcon Alert!',
  action: (
    <Button color="inherit" size="small">
      UNDO
    </Button>
  ),
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  title: 'WithIcon',
  icon: <CheckIcon fontSize="inherit" />,
  children: 'WithIcon Alert!',
};

export const WithIconMapping = Template.bind({});
WithIconMapping.args = {
  title: 'WithIconMapping',
  iconMapping: {
    success: <CheckCircleOutlineIcon fontSize="inherit" />,
  },
  children: 'WithIconMapping Alert!',
};

export const WithoutIcon = Template.bind({});
WithoutIcon.args = {
  title: 'WithoutIcon',
  icon: false,
  children: 'WithoutIcon Alert!',
};
