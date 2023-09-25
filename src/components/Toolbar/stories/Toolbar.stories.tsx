import { Menu as MenuIcon } from '@mui/icons-material';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import AppBar from '../../AppBar/AppBar';
import Toolbar from '../Toolbar';
import IconButton from '../../IconButton/IconButton';
import Typography from '../../Typography/Typography';
import Button from '../../Button/Button';

export default {
  id: 'toolbar',
  title: 'Component API/Toolbar',
  component: Toolbar,
} as ComponentMeta<typeof Toolbar>;

export const Default = (props: ComponentStory<typeof Toolbar>) => {
  return (
    <AppBar position="sticky">
      <Toolbar {...props}>
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
