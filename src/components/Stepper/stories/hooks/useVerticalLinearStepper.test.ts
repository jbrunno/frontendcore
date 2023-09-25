import { act, renderHook } from '@testing-library/react';
import { useVerticalLinearStepper } from './useVerticalLinearStepper';

type HookType = Record<'current', ReturnType<typeof useVerticalLinearStepper>>;

describe('useVerticalLinearStepper Hook', () => {
  let resultHook: HookType;

  beforeEach(() => {
    const { result } = renderHook(() => useVerticalLinearStepper());
    resultHook = result;
  });

  it('should be able to get data from useVerticalLinearStepper', () => {
    expect(resultHook.current.data.activeStep).toBe(0);
    expect(resultHook.current.data.steps.length).toEqual(3);
  });

  it('should be able to get actions from useVerticalLinearStepper', () => {
    act(() => resultHook.current.actions.handleNext());
    expect(resultHook.current.data.activeStep).toEqual(1);

    act(() => resultHook.current.actions.handleBack());
    expect(resultHook.current.data.activeStep).toEqual(0);

    act(() => resultHook.current.actions.handleNext());
    act(() => resultHook.current.actions.handleReset());
    expect(resultHook.current.data.activeStep).toEqual(0);
  });
});
