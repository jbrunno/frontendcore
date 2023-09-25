interface TablePaginationLabelProps {
  pagination: { page: number; count: number; rowsPerPage: number };
}
export const useTablePaginationLabel = ({
  pagination: { page, count, rowsPerPage },
}: TablePaginationLabelProps) => {
  const from = (page + 1) * rowsPerPage - (rowsPerPage - 1);
  const to = Math.min(count, (page + 1) * rowsPerPage);

  const label = `${from} - ${to} de ${count !== -1 ? count : `mais de ${to}`}`;

  return {
    data: { label },
    actions: {
      portugueseLabel: () => label,
    },
  };
};
