import { Share as ShareIcon } from '@mui/icons-material';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import Box from '../../Box/Box';
import SpeedDial from '../../SpeedDial/SpeedDial';
import { SpeedDialAction } from '../../SpeedDialAction/SpeedDialAction';
import SpeedDialIcon from '../SpeedDialIcon';

export default {
  title: 'Component API/SpeedDialIcon',
  component: SpeedDialIcon,
  argTypes: {
    open: {
      control: 'boolean',
    },
  },
} as ComponentMeta<typeof SpeedDialIcon>;

const Template: ComponentStory<typeof SpeedDialIcon> = (args) => (
  <Box sx={{ position: 'relative', mt: 3, height: 320 }}>
    <SpeedDial
      ariaLabel="SpeedDial playground example"
      icon={<SpeedDialIcon {...args} />}
      direction="down"
    >
      <SpeedDialAction icon={<ShareIcon />} tooltipTitle="Teste" />
    </SpeedDial>
  </Box>
);

export const Default = Template.bind({});
Default.args = {
  title: 'Default',
};

export const OpenIcon = Template.bind({});
OpenIcon.args = {
  title: 'OpenIcon',
  openIcon: <ShareIcon />,
};
