import { act, renderHook } from '@testing-library/react';
import { useTimePicker } from './useTimePicker';

type HookType = Record<'current', ReturnType<typeof useTimePicker>>;

describe('useTimePicker Hook', () => {
  let resultHook: HookType;
  const MockedDate = new Date();

  beforeEach(() => {
    const { result } = renderHook(() => useTimePicker());
    resultHook = result;
  });

  it('should be able to get data from useTimePicker', () => {
    expect(resultHook.current.data.newDate).toBeNull();
  });

  it('should be able to get actions from useTimePicker', () => {
    act(() => resultHook.current.actions.onChangeDate(MockedDate));
    expect(resultHook.current.data.newDate).toBe(MockedDate);
  });
});
