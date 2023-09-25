import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import {
  Call as CallIcon,
  CallEnd as CallEndIcon,
  ChevronRight as ChevronRightIcon,
} from '@mui/icons-material';
import { PageHeader } from '../PageHeader';
import { Link } from '../../Link/Link';
import { Typography } from '../../Typography/Typography';
import { Grid } from '../../Grid/Grid';
import { Button } from '../../Button/Button';
import Breadcrumbs from '../../Breadcrumbs/Breadcrumbs';

export default {
  id: 'pageHeader',
  title: '@crm/PageHeader',
  component: PageHeader,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} as ComponentMeta<typeof PageHeader>;

export const Default: ComponentStory<typeof PageHeader> = () => (
  <PageHeader title="Título da Página" />
);

export const HasBack: ComponentStory<typeof PageHeader> = () => (
  <PageHeader title="Título da Página" navigationBack={() => {}} />
);

export const WithInfo: ComponentStory<typeof PageHeader> = () => (
  <PageHeader
    title="Título da Página"
    navigationBack={() => {}}
    info="Informações da Página"
  />
);

export const WithBreadcrumbs: ComponentStory<typeof PageHeader> = () => (
  <PageHeader
    title="Título da Página"
    navigationBack={() => {}}
    breadcrumbs={
      <Breadcrumbs
        aria-label="breadcrumb"
        separator={<ChevronRightIcon fontSize="small" />}
      >
        <Link underline="hover" color="inherit" href="/">
          Link
        </Link>
        <Link underline="hover" color="inherit" href="/">
          Link
        </Link>
        <Typography color="text.primary">Current Link</Typography>
      </Breadcrumbs>
    }
  />
);

export const WithChildren: ComponentStory<typeof PageHeader> = () => (
  <PageHeader
    title="Título da Página"
    navigationBack={() => {}}
    info="Informações da Página"
  >
    <Grid
      container
      direction="row"
      alignItems="center"
      justifyContent="flex-end"
      flex={1}
      gap={2}
    >
      <Grid item>
        <Typography color="textSecundary" variant="body1">
          26 Jan 2021, Quarta-feira
        </Typography>
      </Grid>
      <Grid item>
        <Typography color="textPrimary" variant="subtitle1">
          2:33s
        </Typography>
      </Grid>
      <Grid item>
        <Button variant="outlined" startIcon={<CallIcon />}>
          Iniciar atendimento
        </Button>
      </Grid>
    </Grid>
  </PageHeader>
);

export const WithChildrenAndBreadcrumbs: ComponentStory<
  typeof PageHeader
> = () => (
  <PageHeader
    title="Título da Página"
    navigationBack={() => {}}
    info="Informações da Página"
    breadcrumbs={
      <Breadcrumbs
        aria-label="breadcrumb"
        separator={<ChevronRightIcon fontSize="small" />}
      >
        <Link underline="hover" color="inherit" href="/">
          Link
        </Link>
        <Link underline="hover" color="inherit" href="/">
          Link
        </Link>
        <Typography color="text.primary">Current Link</Typography>
      </Breadcrumbs>
    }
  >
    <Grid
      container
      direction="row"
      alignItems="center"
      justifyContent="flex-end"
      flex={1}
      gap={2}
    >
      <Grid item>
        <Typography color="textSecundary" variant="body1">
          26 Jan 2021, Quarta-feira
        </Typography>
      </Grid>
      <Grid item>
        <Typography color="textPrimary" variant="subtitle1">
          2:33s
        </Typography>
      </Grid>
      <Grid item>
        <Button variant="outlined" color="error" startIcon={<CallEndIcon />}>
          Encerrar atendimento
        </Button>
      </Grid>
    </Grid>
  </PageHeader>
);
