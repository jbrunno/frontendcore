import { act, renderHook } from '@test-utils/hook-testing';
import { MouseEvent } from 'react';
import { useCardUsers } from './useCardUsers';

type HookType = Record<'current', ReturnType<typeof useCardUsers>>;

describe('useCardUsers Hook', () => {
  let resultHook: HookType;

  beforeEach(() => {
    const { result } = renderHook(() => useCardUsers());
    resultHook = result;
  });

  it('should be able to get data from useCardUsers', () => {
    expect(resultHook.current.data.menuOpen).toBeFalsy();
    expect(resultHook.current.data.anchorEl).toBeNull();
  });

  it('should be able to use handleMenuOpen from useCardUsers', () => {
    act(() =>
      resultHook.current.actions.handleMenuOpen({
        currentTarget: {},
      } as MouseEvent<HTMLElement>),
    );
    expect(resultHook.current.data.menuOpen).toBeTruthy();
    expect(resultHook.current.data.anchorEl).not.toBeNull();
  });

  it('should be able to use handleClose from useCardUsers', () => {
    act(() => resultHook.current.actions.handleClose());
    expect(resultHook.current.data.menuOpen).toBeFalsy();
    expect(resultHook.current.data.anchorEl).toBeNull();
  });
});
