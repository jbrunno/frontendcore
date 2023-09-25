import { StyledComponent } from '@emotion/styled';
import { Tab as MuiTab } from '@mui/material';
import { styled } from '@mui/material/styles';
import { TabProps } from './Tab';

export type TabStyledProps = {
  textTransform?:
    | 'none'
    | 'capitalize'
    | 'uppercase'
    | 'lowercase'
    | 'initial'
    | 'inherit';
};

export const TabStyled: StyledComponent<TabProps> = styled(
  MuiTab,
)<TabStyledProps>`
  text-transform: ${({ textTransform }) => textTransform || 'none'};
`;
