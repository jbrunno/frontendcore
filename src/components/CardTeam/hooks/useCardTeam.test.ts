import { act, renderHook } from '@test-utils/hook-testing';
import { MouseEvent } from 'react';
import { useCardTeam } from './useCardTeam';

type HookType = Record<'current', ReturnType<typeof useCardTeam>>;

describe('useCardTeam Hook', () => {
  let resultHook: HookType;

  beforeEach(() => {
    const { result } = renderHook(() => useCardTeam());
    resultHook = result;
  });

  it('should be able to get data from useCardTeam', () => {
    expect(resultHook.current.data.menuOpen).toBeFalsy();
    expect(resultHook.current.data.anchorEl).toBeNull();
  });

  it('should be able to use handleMenuOpen from useCardTeam', () => {
    act(() =>
      resultHook.current.actions.handleMenuOpen({
        currentTarget: {},
      } as MouseEvent<HTMLElement>),
    );
    expect(resultHook.current.data.menuOpen).toBeTruthy();
    expect(resultHook.current.data.anchorEl).not.toBeNull();
  });

  it('should be able to use handleClose from useCardTeam', () => {
    act(() => resultHook.current.actions.handleClose());
    expect(resultHook.current.data.menuOpen).toBeFalsy();
    expect(resultHook.current.data.anchorEl).toBeNull();
  });
});
