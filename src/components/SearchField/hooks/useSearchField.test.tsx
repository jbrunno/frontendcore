import { act, renderHook } from '@test-utils/hook-testing';
import { ChangeEvent, KeyboardEvent } from 'react';
import { useSearchField } from './useSearchField';

describe('Testing UseSearchField', () => {
  it('should onChangeCalled', () => {
    const onChange = jest.fn();
    const onSearch = jest.fn();
    const onClear = jest.fn();

    const { result } = renderHook(() =>
      useSearchField({
        onChange,
        onSearch,
        onClear,
        value: '',
      }),
    );

    expect(result.current.data.internalValue).toBe('');

    act(() => {
      result.current.actions.handleChange({
        target: { value: 'test' },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.data.internalValue).toBe('test');

    expect(onChange).toHaveBeenCalledWith('test');

    expect(onSearch).not.toHaveBeenCalled();

    expect(onClear).not.toHaveBeenCalled();
  });

  it('should onSearchCalled', () => {
    const onChange = jest.fn();
    const onSearch = jest.fn();
    const onClear = jest.fn();

    const { result } = renderHook(() =>
      useSearchField({
        onChange,
        onSearch,
        onClear,
        value: '',
      }),
    );

    expect(result.current.data.internalValue).toBe('');

    act(() => {
      result.current.actions.handleChange({
        target: { value: 'test' },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.data.internalValue).toBe('test');

    act(() => {
      result.current.actions.handleKeyDown({
        key: 'Enter',
      } as KeyboardEvent<HTMLInputElement>);
    });

    expect(onChange).toHaveBeenCalledWith('test');

    expect(onSearch).toHaveBeenCalledWith('test');

    expect(onClear).not.toHaveBeenCalled();
  });

  it('should onClearCalled', () => {
    const onChange = jest.fn();
    const onSearch = jest.fn();
    const onClear = jest.fn();

    const { result } = renderHook(() =>
      useSearchField({
        onChange,
        onSearch,
        onClear,
        value: 'test',
      }),
    );

    expect(result.current.data.internalValue).toBe('test');

    act(() => {
      result.current.actions.handleClear();
    });

    expect(result.current.data.internalValue).toBe('');

    expect(onChange).not.toHaveBeenCalled();

    expect(onSearch).not.toHaveBeenCalled();

    expect(onClear).toHaveBeenCalled();
  });
});
