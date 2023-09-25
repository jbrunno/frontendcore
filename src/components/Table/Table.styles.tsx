import { styled } from '@mui/material/styles';
import TablePagination from '../TablePagination/TablePagination';
import TableRow from '../TableRow/TableRow';

export const TableRowStyled = styled(TableRow)`
  &:hover {
    background-color: ${({ theme }) => theme.palette.action.hover};
  }
`;

export const TablePaginationStyled = styled(TablePagination)`
  border-bottom: ${({ theme }) => theme.fn.spacing(0)};
`;
