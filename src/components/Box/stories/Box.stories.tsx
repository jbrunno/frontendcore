import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from '@mui/material';
import { Box } from '../Box';

export default {
  id: 'box',
  title: 'Layout/Box',
  component: Box,
} as ComponentMeta<typeof Box>;

export function Default(props: ComponentStory<typeof Box>) {
  return (
    <Box
      sx={{
        width: 300,
        height: 300,
        backgroundColor: 'primary.main',
        '&:hover': {
          backgroundColor: 'primary.dark',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
      {...props}
    >
      Lorem ipsum dolor sit amet
    </Box>
  );
}

export function OverridingComponents() {
  return (
    <Box component="span" sx={{ p: 2, border: '1px dashed grey' }}>
      <Button>Save</Button>
    </Box>
  );
}
