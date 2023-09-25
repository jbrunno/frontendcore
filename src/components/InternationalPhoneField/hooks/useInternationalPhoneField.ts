import { FocusEvent, useState } from 'react';
import { CountryData, PhoneInputProps } from 'react-phone-input-2';

export type UseInternationalPhoneFieldProps = {
  focused?: boolean;
} & Pick<PhoneInputProps, 'onFocus' | 'onBlur'>;

export function useInternationalPhoneField({
  focused = false,
  onFocus,
  onBlur,
}: UseInternationalPhoneFieldProps) {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = (
    event: FocusEvent<HTMLInputElement>,
    data: {} | CountryData,
  ) => {
    if (onFocus) {
      onFocus(event, data);
    }
    setIsFocused(true);
  };

  const handleBlur = (
    event: FocusEvent<HTMLInputElement>,
    data: {} | CountryData,
  ) => {
    if (onBlur) {
      onBlur(event, data);
    }
    if (!focused) {
      setIsFocused(false);
    }
  };

  return {
    isFocused,
    handleFocus,
    handleBlur,
  };
}
