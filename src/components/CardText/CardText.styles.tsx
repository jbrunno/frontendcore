import { styled } from '@mui/material/styles';
import Typography from '../Typography/Typography';

export const TypographyLabelStyled = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.secondary};
`;
