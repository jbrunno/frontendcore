import { MouseEvent } from 'react';

interface UseTablePaginationActionsProps {
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (
    event: MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => void;
}
export const useTablePaginationActions = ({
  count,
  page,
  rowsPerPage,
  onPageChange,
}: UseTablePaginationActionsProps) => {
  const handleFirstPageButtonClick = (
    event: MouseEvent<HTMLButtonElement> | null,
  ) => onPageChange(event, 0);

  const handleBackButtonClick = (event: MouseEvent<HTMLButtonElement> | null) =>
    onPageChange(event, page - 1);

  const handleNextButtonClick = (event: MouseEvent<HTMLButtonElement> | null) =>
    onPageChange(event, page + 1);

  const handleLastPageButtonClick = (
    event: MouseEvent<HTMLButtonElement> | null,
  ) => {
    const lastPage = Math.max(0, Math.ceil(count / rowsPerPage) - 1);
    onPageChange(event, lastPage);
  };

  return {
    actions: {
      handleFirstPageButtonClick,
      handleBackButtonClick,
      handleNextButtonClick,
      handleLastPageButtonClick,
    },
  };
};
