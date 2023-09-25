import { StyledComponent } from '@emotion/styled';
import { Button as MuiButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ButtonProps } from './Button';

export type ButtonStyledProps = {
  textTransform?:
    | 'none'
    | 'capitalize'
    | 'uppercase'
    | 'lowercase'
    | 'initial'
    | 'inherit';
};

export const ButtonStyled: StyledComponent<ButtonProps> = styled(
  MuiButton,
)<ButtonStyledProps>`
  text-transform: ${({ textTransform }) => textTransform || 'none'};
`;
