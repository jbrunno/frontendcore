import React, { ReactNode } from 'react';
import {
  Autocomplete as MuiAutocomplete,
  AutocompleteProps as MuiAutocompleteProps,
  AutocompleteRenderInputParams,
  AutocompleteValue as MuiAutocompleteValue,
} from '@mui/material';
import Chip from '../Chip/Chip';
import TextField from '../TextField/TextField';

export { createFilterOptions, useAutocomplete } from '@mui/material';

export type AutocompleteValue<T, Multiple, DisableClearable, FreeSolo> =
  MuiAutocompleteValue<T, Multiple, DisableClearable, FreeSolo>;

export type AutocompleteProps<T> = Omit<
  MuiAutocompleteProps<T, boolean, boolean, boolean>,
  'renderInput'
> & {
  label?: string;
  error?: string;
  renderInput?: (params: AutocompleteRenderInputParams) => React.ReactNode;
};

export function Autocomplete<T>({
  id,
  placeholder,
  label,
  error,
  renderTags,
  renderInput,
  disabled,
  multiple,
  ...props
}: AutocompleteProps<T>) {
  return (
    <MuiAutocomplete
      {...props}
      id={id || `autocomplete-${label?.toLowerCase() || 'outlined'}`}
      multiple={multiple}
      disabled={disabled}
      {...(multiple
        ? renderTags || {
            renderTags: (tagValue, getTagProps) =>
              tagValue.map((option, index) => (
                <Chip
                  label={option as unknown as ReactNode}
                  {...getTagProps({ index })}
                  disabled={disabled}
                />
              )),
          }
        : {})}
      renderInput={
        renderInput ||
        ((params) => (
          <TextField
            {...params}
            variant="outlined"
            error={!!error}
            helperText={error}
            label={label || 'Autocomplete'}
            placeholder={placeholder}
          />
        ))
      }
    />
  );
}

export default Autocomplete;
