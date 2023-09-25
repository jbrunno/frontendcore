import React from 'react';
import { render } from '@test-utils/component-testing';
import { AutocompleteRenderInputParams } from '@mui/material';
import { Autocomplete } from './Autocomplete';
import TextField from '../TextField/TextField';

test('renders the Autocomplete', () => {
  const movies = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },
    { label: 'The Dark Knight', year: 2008 },
    { label: '12 Angry Men', year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: 'Pulp Fiction', year: 1994 },
  ];

  const { container } = render(
    <Autocomplete
      disablePortal
      options={movies}
      renderInput={(params: AutocompleteRenderInputParams) => (
        <TextField {...params} label="Movie" />
      )}
    />,
  );
  expect(container).toMatchSnapshot();
});
