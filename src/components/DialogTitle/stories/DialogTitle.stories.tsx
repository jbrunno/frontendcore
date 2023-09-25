import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { DialogTitle } from '../DialogTitle';
import { Dialog } from '../../Dialog/Dialog';

export default {
  id: 'dialogTitle',
  title: 'Component API/DialogTitle',
  component: DialogTitle,
} as ComponentMeta<typeof DialogTitle>;

export function Default(props: ComponentStory<typeof DialogTitle>) {
  return (
    <Dialog open onClose={() => null}>
      <DialogTitle {...props}>Use Google location service?</DialogTitle>
    </Dialog>
  );
}
