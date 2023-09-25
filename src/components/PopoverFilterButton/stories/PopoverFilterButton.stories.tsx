import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { FilterList as FilterListIcon } from '@mui/icons-material';
import { useState } from 'react';
import { PopoverFilterButton } from '../PopoverFilterButton';
import TextField from '../../TextField/TextField';
import Button from '../../Button/Button';

export default {
  title: '@crm/PopoverFilterButton',
  component: PopoverFilterButton,
  argTypes: {
    open: { control: 'boolean' },
  },
  args: {
    text: 'Filtrar',
    icon: <FilterListIcon />,
    marginTop: 16,
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'right',
    },
    transformOrigin: {
      vertical: 'top',
      horizontal: 'right',
    },
    children: (
      <>
        <TextField id="titulo" label="Título" variant="outlined" size="small" />
        <TextField
          id="parcelas"
          label="Parcelas"
          variant="outlined"
          size="small"
        />
        <TextField
          id="situacao"
          label="Situação"
          variant="outlined"
          size="small"
        />
        <Button
          aria-controls="simple-menu"
          variant="contained"
          aria-haspopup="true"
          onClick={() => null}
          size="large"
          color="primary"
          startIcon={<FilterListIcon />}
        >
          Filtrar
        </Button>
      </>
    ),
  },
} as ComponentMeta<typeof PopoverFilterButton>;

export const Default: ComponentStory<typeof PopoverFilterButton> = (props) => {
  const [openFilter, setOpenFilter] = useState(false);

  return (
    <PopoverFilterButton {...props} open={openFilter} setOpen={setOpenFilter} />
  );
};
