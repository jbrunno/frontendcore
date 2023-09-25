import { act, renderHook } from '@test-utils/hook-testing';
import { MouseEvent } from 'react';
import { usePopoverFilterButton } from './usePopoverFilterButton';

type HookType = Record<'current', ReturnType<typeof usePopoverFilterButton>>;

describe('usePopoverFilterButton Hook', () => {
  const setOpen = jest.fn();

  let resultHook: HookType;

  beforeEach(() => {
    const { result } = renderHook(() => usePopoverFilterButton({ setOpen }));
    resultHook = result;
  });

  it('should be able to get data from usePopoverFilterButton', () => {
    expect(resultHook.current.data.anchorEl).toBeNull();
  });

  it('should be able to use handleClick from usePopoverFilterButton', () => {
    act(() =>
      resultHook.current.actions.handleClick({
        currentTarget: {},
      } as MouseEvent<HTMLButtonElement>),
    );
    expect(resultHook.current.data.anchorEl).not.toBeNull();
    expect(setOpen).toBeCalledWith(true);
  });

  it('should be able to use handleClose from usePopoverFilterButton', () => {
    act(() => resultHook.current.actions.handleClose());
    expect(setOpen).toBeCalledWith(false);
    expect(resultHook.current.data.anchorEl).toBeNull();
  });
});
