import { renderHook } from '@testing-library/react';
import { useTablePaginationLabel } from './useTablePaginationLabel';

type HookType = Record<'current', ReturnType<typeof useTablePaginationLabel>>;

describe('useTablePaginationLabel Hook', () => {
  let resultHook: HookType;
  const mockPagination = {
    pagination: {
      page: 0,
      count: 25,
      rowsPerPage: 5,
    },
  };

  beforeEach(() => {
    const { result } = renderHook(() =>
      useTablePaginationLabel(mockPagination),
    );
    resultHook = result;
  });

  it('should be able to get data from useTablePaginationLabel', () => {
    expect(resultHook.current.data.label).toBe('1 - 5 de 25');
  });
  it('should be able to get actions from useTablePaginationLabel', () => {
    expect(resultHook.current.actions.portugueseLabel()).toMatch('1 - 5 de 25');
  });
});
