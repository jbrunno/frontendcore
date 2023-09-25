import { Share as ShareIcon } from '@mui/icons-material';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import Box from '../../Box/Box';
import SpeedDial from '../../SpeedDial/SpeedDial';
import { SpeedDialAction } from '../SpeedDialAction';
import SpeedDialIcon from '../../SpeedDialIcon/SpeedDialIcon';

const placements = [
  'bottom-end',
  'bottom-start',
  'bottom',
  'left-end',
  'left-start',
  'left',
  'right-end',
  'right-start',
  'right',
  'top-end',
  'top-start',
  'top',
];

export default {
  title: 'Component API/SpeedDialAction',
  component: SpeedDialAction,
  argTypes: {
    tooltipPlacement: {
      options: placements,
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof SpeedDialAction>;

const Template: ComponentStory<typeof SpeedDialAction> = (args) => (
  <Box sx={{ position: 'relative', mt: 3, height: 320 }}>
    <SpeedDial
      ariaLabel="SpeedDial playground example"
      icon={<SpeedDialIcon />}
      direction="down"
    >
      <SpeedDialAction {...args} />
    </SpeedDial>
  </Box>
);

export const Default = Template.bind({});
Default.args = {
  title: 'Default',
  icon: <ShareIcon />,
  tooltipTitle: 'Teste',
};

export const TooltipOpen = Template.bind({});
TooltipOpen.args = {
  title: 'TooltipOpen',
  icon: <ShareIcon />,
  tooltipTitle: 'Teste',
  tooltipOpen: true,
};
