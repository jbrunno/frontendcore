import { Modal as MuiModal, ModalProps as MuiModalProps } from '@mui/material';

export type ModalProps = MuiModalProps;

export function Modal(props: ModalProps) {
  return <MuiModal {...props} />;
}

export default Modal;
