import { useState, SyntheticEvent } from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Slide } from '../Slide';
import Button from '../../Button/Button';
import Snackbar from '../../Snackbar/Snackbar';

export default {
  id: 'slide',
  title: 'Component API/Slide',
  component: Slide,
  argTypes: {
    in: { control: 'boolean' },
    appear: { control: 'boolean' },
    direction: {
      control: 'inline-radio',
      options: ['down', 'left', 'right', 'up'],
    },
  },
} as ComponentMeta<typeof Slide>;

export const Default: ComponentStory<typeof Slide> = (args) => {
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
        autoHideDuration={1000}
        onClose={handleClose}
        TransitionComponent={(props) => Slide({ ...props, ...args })}
      />
    </>
  );
};
