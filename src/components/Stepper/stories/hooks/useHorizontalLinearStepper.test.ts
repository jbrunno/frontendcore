import { act, renderHook } from '@testing-library/react';
import { useHorizontalLinearStepper } from './useHorizontalLinearStepper';

type HookType = Record<
  'current',
  ReturnType<typeof useHorizontalLinearStepper>
>;

describe('useHorizontalLinearStepper Hook', () => {
  let resultHook: HookType;

  beforeEach(() => {
    const { result } = renderHook(() => useHorizontalLinearStepper());
    resultHook = result;
  });

  it('should be able to get data from useHorizontalLinearStepper', () => {
    expect(resultHook.current.data.activeStep).toEqual(0);
    expect(resultHook.current.data.steps).toEqual(
      expect.arrayContaining([
        'Select campaign settings',
        'Create an ad group',
        'Create an ad',
      ]),
    );
    expect(resultHook.current.data.stepProps.completed).toBeUndefined();
    expect(resultHook.current.data.labelProps.optional).toBeUndefined();
  });

  it('should be able to get actions from useHorizontalLinearStepper', () => {
    act(() => resultHook.current.actions.handleNext());
    expect(resultHook.current.data.activeStep).toEqual(1);

    act(() => resultHook.current.actions.handleBack());
    expect(resultHook.current.data.activeStep).toEqual(0);

    act(() => resultHook.current.actions.handleNext());
    act(() => resultHook.current.actions.handleReset());
    expect(resultHook.current.data.activeStep).toEqual(0);

    act(() => resultHook.current.actions.handleNext());
    act(() => resultHook.current.actions.handleSkip());
    expect(resultHook.current.data.activeStep).toEqual(2);

    expect(() => resultHook.current.actions.isStepOptional(1)).toBeTruthy();
    expect(() => resultHook.current.actions.isStepSkipped(1)).toBeTruthy();
  });
});
