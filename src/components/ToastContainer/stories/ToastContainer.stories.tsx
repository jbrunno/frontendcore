import type { ComponentMeta } from '@storybook/react';
import { toast, TypeOptions } from 'react-toastify';
import Button from '../../Button/Button';
import ToastContainer from '../ToastContainer';
import ButtonGroup from '../../ButtonGroup/ButtonGroup';

export default {
  id: 'ToastContainer',
  title: '@crm/ToastContainer',
  component: ToastContainer,
} as ComponentMeta<typeof ToastContainer>;

export const Default = () => {
  const handleClick = (type: TypeOptions) => {
    toast(
      <span>
        Essa é a toast <b>{type}</b>
      </span>,
      { type },
    );
  };

  return (
    <>
      <ButtonGroup>
        <Button
          onClick={() => handleClick('default')}
          variant="outlined"
          color="inherit"
        >
          Default
        </Button>
        <Button
          onClick={() => handleClick('info')}
          variant="outlined"
          color="info"
        >
          Info
        </Button>
        <Button
          onClick={() => handleClick('success')}
          variant="outlined"
          color="success"
        >
          Success
        </Button>
        <Button
          onClick={() => handleClick('warning')}
          variant="outlined"
          color="warning"
        >
          Warning
        </Button>
        <Button
          onClick={() => handleClick('error')}
          variant="outlined"
          color="error"
        >
          Error
        </Button>
      </ButtonGroup>
      <ToastContainer />
    </>
  );
};
