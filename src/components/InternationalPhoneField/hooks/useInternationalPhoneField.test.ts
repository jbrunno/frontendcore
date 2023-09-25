import { act, renderHook } from '@testing-library/react';
import { FocusEvent } from 'react';
import { useInternationalPhoneField } from './useInternationalPhoneField';

type HookType = Record<
  'current',
  ReturnType<typeof useInternationalPhoneField>
>;

describe('useInternationalPhoneField Hook', () => {
  let resultHook: HookType;
  const onFocus = jest.fn();
  const onBlur = jest.fn();

  beforeEach(() => {
    const { result } = renderHook(() =>
      useInternationalPhoneField({
        onFocus,
        onBlur,
        focused: false,
      }),
    );
    resultHook = result;
  });

  it('should be able to get data from useInternationalPhoneField', () => {
    expect(resultHook.current.isFocused).toBe(false);
  });

  it('should be able to get actions from useInternationalPhoneField', () => {
    act(() =>
      resultHook.current.handleFocus({} as FocusEvent<HTMLInputElement>, {}),
    );
    expect(resultHook.current.isFocused).toBe(true);
    expect(onFocus).toHaveBeenCalled();
    act(() =>
      resultHook.current.handleBlur({} as FocusEvent<HTMLInputElement>, {}),
    );
    expect(resultHook.current.isFocused).toBe(false);
    expect(onBlur).toHaveBeenCalled();
  });

  it('should be able to get actions from useInternationalPhoneField with focused', () => {
    const { result } = renderHook(() =>
      useInternationalPhoneField({
        onFocus,
        onBlur,
        focused: true,
      }),
    );
    act(() => {
      result.current.handleFocus({} as FocusEvent<HTMLInputElement>, {});
    });
    expect(result.current.isFocused).toBe(true);
    expect(onFocus).toHaveBeenCalled();
    act(() =>
      result.current.handleBlur({} as FocusEvent<HTMLInputElement>, {}),
    );
    expect(result.current.isFocused).toBe(true);
    expect(onBlur).toHaveBeenCalled();
  });
});
