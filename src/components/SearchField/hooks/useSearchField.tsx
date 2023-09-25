import {
  ChangeEvent,
  KeyboardEvent,
  useCallback,
  useEffect,
  useState,
} from 'react';

export type UseSearchFieldProps = {
  onChange?: (value: string) => void;
  onSearch?: (value: string) => void;
  onClear?: () => void;
  value?: string | null;
};

export function useSearchField({
  onChange,
  onClear,
  onSearch,
  value,
}: UseSearchFieldProps) {
  const [internalValue, setInternalValue] = useState<string>(value || '');

  useEffect(() => {
    setInternalValue(value || '');
  }, [value]);

  const handleClear = useCallback(() => {
    setInternalValue('');
    if (onClear) {
      onClear();
    }
  }, [onClear]);

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const inputValue = event.target.value;
      if (!inputValue) {
        handleClear();
      }
      setInternalValue(inputValue);
      if (onChange) {
        onChange(inputValue);
      }
    },
    [onChange],
  );

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLInputElement>) =>
      event.key === 'Enter' && onSearch && onSearch(internalValue),
    [onSearch, internalValue],
  );

  return {
    data: {
      internalValue,
    },
    actions: {
      handleChange,
      handleKeyDown,
      handleClear,
    },
  };
}
