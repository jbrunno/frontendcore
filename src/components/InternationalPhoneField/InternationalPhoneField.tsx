import { PhoneInputProps } from 'react-phone-input-2';
import pt from 'react-phone-input-2/lang/pt.json';
import 'react-phone-input-2/lib/material.css';
import Box from '../Box/Box';
import { useInternationalPhoneField } from './hooks/useInternationalPhoneField';
import {
  PhoneInputStyled,
  TypographyError,
} from './InternationalPhoneField.styles';

export type InternationalPhoneFieldProps = Omit<PhoneInputProps, 'isValid'> & {
  color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
  size?: 'small' | 'medium';
  focused?: boolean;
  error?: string;
  className?: string;
};

export function InternationalPhoneField({
  onFocus,
  onBlur,
  focused,
  color = 'primary',
  error,
  size = 'medium',
  className,
  ...props
}: InternationalPhoneFieldProps) {
  const { isFocused, handleFocus, handleBlur } = useInternationalPhoneField({
    onFocus,
    onBlur,
    focused,
  });

  return (
    <Box className={className}>
      <PhoneInputStyled
        {...props}
        onFocus={handleFocus}
        onBlur={handleBlur}
        color={color}
        localization={pt}
        isFocused={isFocused}
        isValid={!error}
        size={size}
      />
      {error && (
        <TypographyError variant="helperText" color="error">
          {error}
        </TypographyError>
      )}
    </Box>
  );
}

export default InternationalPhoneField;
