import { styled } from '@mui/material/styles';
import PhoneInput from 'react-phone-input-2';
import Typography from '../Typography/Typography';

export const TypographyError = styled(Typography)`
  margin-left: ${({ theme }) => theme.fn.spacing(14)};
`;

export const PhoneInputStyled = styled(PhoneInput)<{
  color: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
  isFocused?: boolean;
  size?: 'small' | 'medium';
}>(({ theme, isValid, color, isFocused, size = 'medium' }) => {
  let colorText = theme.palette.text.secondary;
  let padding = theme.fn.spacing(18.5, 14, 18.5, 58);

  if (!isValid) {
    colorText = theme.palette.error.main;
  } else if (isFocused) {
    colorText = theme.palette[color].main;
  }

  if (size === 'small') {
    padding = theme.fn.spacing(8.5, 14, 8.5, 58);
  }

  return {
    '&.react-tel-input .special-label': {
      top: theme.fn.spacing(-9),
      left: theme.fn.spacing(7),
      color: colorText,
      fontSize: theme.typography.caption.fontSize,
      fontWeight: theme.typography.caption.fontWeight,
      lineHeight: theme.typography.caption.lineHeight,
      letterSpacing: theme.typography.caption.letterSpacing,
    },
    '&.react-tel-input .form-control': {
      width: '100%',
      borderRadius: theme.shape.borderRadius,
      borderColor: colorText,
      height: theme.fn.size(40),
      boxShadow: isFocused
        ? `0 0 0 ${theme.fn.spacing(1)} ${colorText}`
        : 'none',
      padding,
    },
    '&.react-tel-input .form-control:focus': {
      borderColor: colorText,
      boxShadow: `0 0 0 ${theme.fn.spacing(1)} ${colorText}`,
    },
  };
});
