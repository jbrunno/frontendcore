import { act, renderHook } from '@testing-library/react';
import { useDatePicker } from './useDatePicker';

type HookType = Record<'current', ReturnType<typeof useDatePicker>>;

describe('useDatePicker Hook', () => {
  let resultHook: HookType;
  const MockedDate = new Date();

  beforeEach(() => {
    const { result } = renderHook(() => useDatePicker());
    resultHook = result;
  });

  it('should be able to get data from useDatePicker', () => {
    expect(resultHook.current.data.newDate).toBeNull();
  });

  it('should be able to get actions from useDatePicker', () => {
    act(() => resultHook.current.actions.onChangeDate(MockedDate));
    expect(resultHook.current.data.newDate).toBe(MockedDate);
  });
});
