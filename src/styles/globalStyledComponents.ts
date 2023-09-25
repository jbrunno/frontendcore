import { css, styled } from '@mui/material/styles';
import { SIDEBAR_WIDTH } from '../components';

type ContentContainerProps = {
  hasSidebar?: boolean;
  hasTopbar?: boolean;
};

export const Container = styled('main')<ContentContainerProps>(
  ({ theme, hasSidebar, hasTopbar }) => css`
    height: 100vh;
    display: grid;
    grid-template-rows: ${hasTopbar ? 'min-content 1fr' : '1fr'};
    overflow: auto;
    margin-left: ${hasSidebar && theme.fn.size(SIDEBAR_WIDTH)};
    padding: ${theme.fn.spacing(0, 32, 32, 32)};
    box-sizing: border-box;
  `,
);

export const Content = styled('section')`
  display: grid;
  grid-template-rows: auto;
  grid-auto-flow: row;
  grid-auto-rows: 1fr;
  row-gap: ${({ theme }) => theme.fn.spacing(16)};
  margin-bottom: ${({ theme }) => theme.fn.spacing(16)};
  height: 100%;
`;

export const Widgets = styled('div')`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  column-gap: ${({ theme }) => theme.fn.spacing(16)};
  height: 100%;
  min-height: 0;
`;

export const WidgetsColumn = styled('div')`
  display: grid;
  grid-template-rows: auto 1fr;
  height: min-content;
  min-height: 0;
  row-gap: ${(props) => props.theme.fn.spacing(16)};
`;
