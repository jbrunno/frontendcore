import { styled } from '@mui/material';
import List from '../List/List';

export const SidebarList = styled(List)`
  display: grid;
  row-gap: ${({ theme }) => theme.fn.spacing(8)};
  grid-auto-rows: min-content;
  overflow-y: auto;
  overflow-x: hidden;
`;
