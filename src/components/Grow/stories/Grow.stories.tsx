import { useState, SyntheticEvent } from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Grow } from '../Grow';
import Button from '../../Button/Button';
import Snackbar from '../../Snackbar/Snackbar';

export default {
  id: 'grow',
  title: 'Component API/Grow',
  component: Grow,
  argTypes: {
    in: { control: 'boolean' },
    appear: { control: 'boolean' },
  },
} as ComponentMeta<typeof Grow>;

export const Default: ComponentStory<typeof Grow> = (args) => {
  const [open, setOpen] = useState(false);

  const handleClose = (_event: SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      <Button onClick={() => setOpen(true)} variant="contained">
        Abrir
      </Button>
      <Snackbar
        open={open}
        message="Teste teste"
        autoHideDuration={2000}
        onClose={handleClose}
        TransitionComponent={(props) => Grow({ ...props, ...args })}
      />
    </>
  );
};
