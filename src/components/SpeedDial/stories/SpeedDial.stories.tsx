import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Share as ShareIcon } from '@mui/icons-material';
import { SpeedDial, SpeedDialProps } from '../SpeedDial';
import Box from '../../Box/Box';
import SpeedDialAction from '../../SpeedDialAction/SpeedDialAction';
import SpeedDialIcon from '../../SpeedDialIcon/SpeedDialIcon';

export default {
  id: 'speedDial',
  title: 'Navigation/SpeedDial',
  component: SpeedDial,
  argTypes: {
    direction: {
      options: ['up', 'right', 'down', 'left'],
      control: { type: 'radio' },
    },
    hidden: {
      control: 'boolean',
    },
  },
} as ComponentMeta<typeof SpeedDial>;

export const Default: ComponentStory<typeof SpeedDial> = (
  args: SpeedDialProps,
) => {
  return (
    <Box sx={{ position: 'relative', mt: 3, height: 320 }}>
      <SpeedDial
        {...args}
        ariaLabel="SpeedDial example"
        icon={<SpeedDialIcon />}
      >
        <SpeedDialAction icon={<ShareIcon />} tooltipTitle="Compartilhar" />
      </SpeedDial>
    </Box>
  );
};
