import React, { ReactNode } from 'react';
import {
  ArrowBack as ArrowBackIcon,
  InfoOutlined as InfoOutlinedIcon,
} from '@mui/icons-material';
import { Grid } from '../Grid/Grid';
import { Icon } from '../Icon/Icon';
import { IconButton } from '../IconButton/IconButton';
import { Tooltip } from '../Tooltip/Tooltip';
import {
  HeaderStyled,
  IconBoxStyled,
  InfoBoxStyled,
  TypographyStyled,
} from './PageHeader.styles';

export type PageHeaderProps = {
  className?: string;
  breadcrumbs?: ReactNode;
  navigationBack?: () => void;
  children?: ReactNode;
  info?: string;
  infoClick?: () => void;
  title: ReactNode;
};

export function PageHeader({
  className,
  breadcrumbs,
  navigationBack,
  children,
  info,
  infoClick,
  title = '',
}: PageHeaderProps) {
  return (
    <HeaderStyled className={className}>
      <Grid container direction="row" alignItems="center">
        {navigationBack && (
          <Grid item>
            <IconBoxStyled>
              <IconButton
                onClick={() => navigationBack()}
                edge="start"
                color="default"
              >
                <Icon>
                  <ArrowBackIcon />
                </Icon>
              </IconButton>
            </IconBoxStyled>
          </Grid>
        )}
        {typeof title === 'string' ? (
          <Grid item>
            <TypographyStyled color="textPrimary" variant="h3">
              {title}
              {(info || infoClick) && (
                <InfoBoxStyled>
                  <Tooltip title={info || ''} arrow>
                    <IconButton onClick={infoClick}>
                      <InfoOutlinedIcon />
                    </IconButton>
                  </Tooltip>
                </InfoBoxStyled>
              )}
            </TypographyStyled>
          </Grid>
        ) : (
          title
        )}
        {children}
      </Grid>
      {breadcrumbs}
    </HeaderStyled>
  );
}

export default PageHeader;
