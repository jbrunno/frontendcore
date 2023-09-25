import React from 'react';
import { render } from '@test-utils/component-testing';
import { NavigateNext as NavigateNextIcon } from '@mui/icons-material';
import { PageHeader } from './PageHeader';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import Link from '../Link/Link';
import Typography from '../Typography/Typography';

test('renders the PageHeader', () => {
  const { container } = render(
    <PageHeader
      className="page-header"
      info="Informações"
      title="Título da Página"
      navigationBack={() => {
        // navigation
      }}
      breadcrumbs={
        <Breadcrumbs separator={<NavigateNextIcon />}>
          <Link variant="body1" color="textSecondary" href="*">
            Dashboard
          </Link>
          <Typography variant="body1" color="textPrimary">
            Perfil do cliente
          </Typography>
        </Breadcrumbs>
      }
    />,
  );
  expect(container).toMatchSnapshot();
});
