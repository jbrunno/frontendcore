import { styled } from '@mui/material/styles';
import { Card as MuiCard } from '@mui/material';

export const CardStyled = styled(MuiCard)`
  background-color: ${({ theme }) => theme.palette.background.paper};
`;
