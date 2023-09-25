import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { DialogContent } from '../../DialogContent/DialogContent';
import { Dialog } from '../../Dialog/Dialog';
import DialogContentText from '../DialogContentText';

export default {
  id: 'dialogContent',
  title: 'Component API/DialogContent',
  component: DialogContent,
} as ComponentMeta<typeof DialogContent>;

export function Default(props: ComponentStory<typeof DialogContent>) {
  return (
    <Dialog open onClose={() => null}>
      <DialogContent {...props}>
        <DialogContentText>
          Let Google help apps determine location. This means sending anonymous
          location data to Google, even when no apps are running.
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
}
