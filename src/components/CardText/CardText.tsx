import { ReactNode } from 'react';
import Box from '../Box/Box';
import Typography from '../Typography/Typography';
import { TypographyLabelStyled } from './CardText.styles';

type CardTextProps = {
  label: string;
  text: string | ReactNode;
};

export function CardText({ label, text }: CardTextProps) {
  return (
    <Box>
      <TypographyLabelStyled variant="caption">{label}</TypographyLabelStyled>
      {typeof text === 'string' ? (
        <Typography variant="body1">{text}</Typography>
      ) : (
        text
      )}
    </Box>
  );
}

export default CardText;
