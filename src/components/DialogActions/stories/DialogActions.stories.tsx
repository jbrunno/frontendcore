import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { DialogActions } from '../DialogActions';
import { Button } from '../../Button/Button';
import { Dialog } from '../../Dialog/Dialog';
import { DialogActionsStyled } from '../DialogActions.styles';

export default {
  id: 'dialogActions',
  title: 'Component API/DialogActions',
  component: DialogActions,
} as ComponentMeta<typeof DialogActions>;

export function Default(props: ComponentStory<typeof DialogActions>) {
  return (
    <Dialog open onClose={() => null}>
      <DialogActionsStyled {...props}>
        <Button variant="outlined">Cancelar</Button>
        <Button variant="contained" color="primary">
          Ok
        </Button>
      </DialogActionsStyled>
    </Dialog>
  );
}
