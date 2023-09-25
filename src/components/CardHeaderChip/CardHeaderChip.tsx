import { ReactNode } from 'react';
import Typography from '../Typography/Typography';
import {
  CardHeaderStyled,
  CardTitleContainerStyled,
  CardTitleIconContentStyled,
} from './CardHeaderChip.styles';

type CardHeaderChipProps = {
  title?: ReactNode;
  titleIcon?: ReactNode;
  subTitle?: ReactNode;
  chip?: ReactNode;
  action?: ReactNode;
  subheader?: string;
  hasDivider?: boolean;
  chipWithTitle?: boolean;
  className?: string;
};

export function CardHeaderChip({
  title,
  titleIcon,
  subTitle,
  subheader,
  chip,
  action,
  hasDivider = true,
  chipWithTitle = false,
  className,
}: CardHeaderChipProps) {
  const titleNode = title && (
    <CardTitleContainerStyled>
      <CardTitleIconContentStyled>
        {titleIcon}
        {title}
      </CardTitleIconContentStyled>
      {subTitle}
    </CardTitleContainerStyled>
  );

  const subheaderNode = subheader && (
    <Typography variant="subtitle2" color="textSecondary">
      {subheader}
    </Typography>
  );

  return (
    <CardHeaderStyled
      avatar={chip}
      action={action}
      title={titleNode}
      subheader={subheaderNode}
      hasDivider={hasDivider}
      chipWithTitle={chipWithTitle}
      className={className}
    />
  );
}

export default CardHeaderChip;
