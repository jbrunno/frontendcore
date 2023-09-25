import { css, styled } from '@mui/material/styles';
import { FileCopy } from '@mui/icons-material';
import Tooltip from '../Tooltip/Tooltip';
import IconButton from '../IconButton/IconButton';

export const TooltipStyled = styled(Tooltip)`
  padding: 0;
`;

export const FileCopyStyled = styled(FileCopy)<{
  size?: 'small' | 'medium' | 'large';
}>(({ theme, size = 'small' }) => {
  const sizeMap = {
    small: 16,
    medium: 20,
    large: 24,
  };
  const iconSize = sizeMap[size];

  return css`
    font-size: ${theme.fn.fontSize(iconSize)};
  `;
});

export const IconButtonStyled = styled(IconButton)`
  padding: 0;
`;
