import { act, renderHook } from '@test-utils/hook-testing';
import { useSidebar } from './useSidebar';

type HookType = Record<'current', ReturnType<typeof useSidebar>>;

describe('useSidebar Hook', () => {
  let resultHook: HookType;

  beforeEach(() => {
    const { result } = renderHook(() => useSidebar());
    resultHook = result;
  });

  it('should be able to set and get data from useSidebar', () => {
    act(() => resultHook.current.handleExpanded(true));
    expect(resultHook.current.isExpanded).toBe(true);
    act(() => resultHook.current.handleExpanded(false));
    expect(resultHook.current.isExpanded).toBe(false);
  });
});
