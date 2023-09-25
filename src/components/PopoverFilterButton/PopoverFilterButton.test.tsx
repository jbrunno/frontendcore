import React from 'react';
import { FilterList as FilterListIcon } from '@mui/icons-material';
import { render } from '@test-utils/component-testing';
import { PopoverFilterButton } from './PopoverFilterButton';
import TextField from '../TextField/TextField';
import Button from '../Button/Button';

test('renders the PopoverFilterButton', () => {
  const { container } = render(
    <PopoverFilterButton
      open
      setOpen={() => null}
      text="Filtrar"
      variant="contained"
      size="medium"
      icon={<FilterListIcon />}
      marginTop={1}
      marginBottom={1}
      marginLeft={1}
      marginRight={1}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
    >
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
    </PopoverFilterButton>,
  );
  expect(container).toMatchSnapshot();
});
