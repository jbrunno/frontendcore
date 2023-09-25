import { useState, KeyboardEvent, MouseEvent, Fragment } from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Drawer, DrawerProps } from '../Drawer';
import Button from '../../Button/Button';
import Box from '../../Box/Box';

export default {
  id: 'drawer',
  title: 'Navigation/Drawer',
  component: Drawer,
} as ComponentMeta<typeof Drawer>;

type Anchor = 'top' | 'left' | 'bottom' | 'right';

export const Default: ComponentStory<typeof Drawer> = (props: DrawerProps) => {
  return (
    <Drawer container={document.body} {...props}>
      <Button>Drawer</Button>
    </Drawer>
  );
};

Default.args = {
  anchor: 'left',
  open: true,
};

export const Positions: ComponentStory<typeof Drawer> = (
  props: DrawerProps,
) => {
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) => (event: KeyboardEvent | MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as KeyboardEvent).key === 'Tab' ||
          (event as KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  return (
    <Box p={2}>
      {(['left', 'right', 'top', 'bottom'] as const).map((anchor) => (
        <Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer
            container={document.body}
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            {...props}
          >
            <Button>Drawer</Button>
          </Drawer>
        </Fragment>
      ))}
    </Box>
  );
};
