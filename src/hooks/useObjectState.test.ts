import { act, renderHook } from '@test-utils/hook-testing';
import { useObjectState } from './useObjectState';

type HookType = Record<'current', ReturnType<typeof useObjectState>>;

describe('useObjectState Hook', () => {
  let resultHook: HookType;

  beforeEach(() => {
    const { result } = renderHook(() => useObjectState({}));
    resultHook = result;
  });

  it('should be able to set and get data from useObjectState', () => {
    act(() => resultHook.current[1]({ test: 'test' }));
    expect(resultHook.current[0]).toEqual({ test: 'test' });
  });

  it('should be able to set and get data from useObjectState with function', () => {
    act(() => resultHook.current[1]((prev) => ({ ...prev, test: 'test' })));
    expect(resultHook.current[0]).toEqual({ test: 'test' });
  });

  it('should be able to set and get data from useObjectState with function and initial state', () => {
    const { result } = renderHook(() => useObjectState({ test: 'test' }));
    act(() => result.current[1]((prev) => ({ ...prev, test: 'test2' })));
    expect(result.current[0]).toEqual({ test: 'test2' });
  });
});
