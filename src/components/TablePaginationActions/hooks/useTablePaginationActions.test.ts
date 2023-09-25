import { act, renderHook } from '@testing-library/react';
import { useTablePaginationActions } from './useTablePaginationActions';

type HookType = Record<'current', ReturnType<typeof useTablePaginationActions>>;

describe('useTablePaginationActions Hook', () => {
  let resultHook: HookType;
  const onPageChange = jest.fn();
  const mockPagination = {
    page: 1,
    count: 25,
    rowsPerPage: 5,
    onPageChange,
  };
  beforeEach(() => {
    const { result } = renderHook(() =>
      useTablePaginationActions(mockPagination),
    );
    resultHook = result;
  });

  it('should be able to get actions from useTablePaginationActions', () => {
    act(() => resultHook.current.actions.handleFirstPageButtonClick(null));
    expect(onPageChange).toHaveBeenCalled();
    act(() => resultHook.current.actions.handleLastPageButtonClick(null));
    expect(onPageChange).toHaveBeenCalled();
    act(() => resultHook.current.actions.handleNextButtonClick(null));
    expect(onPageChange).toHaveBeenCalled();
    act(() => resultHook.current.actions.handleBackButtonClick(null));
    expect(onPageChange).toHaveBeenCalled();
  });
});
