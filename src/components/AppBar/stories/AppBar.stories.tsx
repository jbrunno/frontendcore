import { Menu as MenuIcon } from '@mui/icons-material';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import AppBar from '../AppBar';
import Toolbar from '../../Toolbar/Toolbar';
import IconButton from '../../IconButton/IconButton';
import Typography from '../../Typography/Typography';
import Button from '../../Button/Button';

export default {
  id: 'appbar',
  title: 'Surfaces/AppBar',
  component: AppBar,
  argTypes: {
    variant: {
      options: ['elevation', 'outlined'],
      control: {
        type: 'select',
      },
    },
    position: {
      options: ['fixed', 'static', 'absolute', 'sticky', 'relative', undefined],
      control: {
        type: 'select',
      },
    },
    color: {
      options: [
        'inherit',
        'primary',
        'secondary',
        'default',
        'transparent',
        undefined,
      ],
      control: {
        type: 'select',
      },
    },
  },
} as ComponentMeta<typeof AppBar>;

export const Default = (props: ComponentStory<typeof AppBar>) => {
  return (
    <AppBar position="sticky" {...props}>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          News
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
};
