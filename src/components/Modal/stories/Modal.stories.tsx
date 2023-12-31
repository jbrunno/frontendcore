import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { useState } from 'react';
import Box from '../../Box/Box';
import Button from '../../Button/Button';
import Typography from '../../Typography/Typography';
import Modal from '../Modal';

export default {
  title: 'Utils/Modal',
  component: Modal,
} as ComponentMeta<typeof Modal>;

export function Default(props: ComponentStory<typeof Modal>) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        {...props}
      >
        <Box>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
