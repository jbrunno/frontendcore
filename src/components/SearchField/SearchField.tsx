import { Close as CloseIcon, Search as SearchIcon } from '@mui/icons-material';
import { TextField, TextFieldProps } from '../TextField/TextField';
import InputAdornment from '../InputAdornment/InputAdornment';
import IconButton from '../IconButton/IconButton';
import { useSearchField } from './hooks/useSearchField';

export type SearchFieldProps = TextFieldProps & {
  value?: string | null;
  onSearch?: (value: string) => void;
  onChange?: (value: string) => void;
  onClear?: () => void;
};

export function SearchField({
  value,
  onSearch,
  onChange,
  onClear,
  size = 'small',
  ...props
}: SearchFieldProps) {
  const {
    data: { internalValue },
    actions: { handleChange, handleKeyDown, handleClear },
  } = useSearchField({
    onChange,
    onClear,
    onSearch,
    value,
  });

  return (
    <TextField
      {...props}
      value={internalValue}
      size={size}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">
            {internalValue && (
              <IconButton onClick={handleClear} edge="end">
                <CloseIcon />
              </IconButton>
            )}
          </InputAdornment>
        ),
      }}
    />
  );
}

export default SearchField;
