import { styled } from '@mui/material/styles';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

import Stack from '../Stack';
import Box from '../../Box/Box';
import Paper from '../../Paper/Paper';

export default {
  title: 'Component API/Stack',
  component: Stack,
} as ComponentMeta<typeof Stack>;

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export function Default(props: ComponentStory<typeof Stack>) {
  return (
    <Box sx={{ width: '100%' }}>
      <Stack spacing={2} {...props}>
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
      </Stack>
    </Box>
  );
}
