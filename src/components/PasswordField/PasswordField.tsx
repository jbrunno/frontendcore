import {
  Visibility as VisibilityIcon,
  VisibilityOff as VisibilityOffIcon,
} from '@mui/icons-material';
import { useState } from 'react';
import IconButton from '../IconButton/IconButton';
import InputAdornment from '../InputAdornment/InputAdornment';
import { TextField, TextFieldProps } from '../TextField/TextField';

type PasswordFieldProps = TextFieldProps & {
  errorText?: string;
  isTouched?: boolean;
  value?: string;
};

export function PasswordField({
  children,
  value,
  ...props
}: PasswordFieldProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <TextField
      {...props}
      value={value}
      type={showPassword ? 'text' : 'password'}
      InputProps={{
        endAdornment: value && (
          <InputAdornment position="end">
            <IconButton
              onClick={() => setShowPassword(!showPassword)}
              edge="end"
            >
              {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    >
      {children}
    </TextField>
  );
}

export default PasswordField;
