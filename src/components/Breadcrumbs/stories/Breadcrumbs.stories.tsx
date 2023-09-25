import type { ComponentMeta, ComponentStory } from '@storybook/react';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Breadcrumbs, { BreadcrumbsProps } from '../Breadcrumbs';
import Link from '../../Link/Link';
import Typography from '../../Typography/Typography';

export default {
  id: 'breadcrumbs',
  component: Breadcrumbs,
  title: 'Navigation/Breadcrumbs',
} as ComponentMeta<typeof Breadcrumbs>;

export const BasicBreadcrumbs: ComponentStory<typeof Breadcrumbs> = (
  props: BreadcrumbsProps,
) => (
  <Breadcrumbs aria-label="breadcrumb" {...props}>
    <Link underline="hover" color="inherit" href="/">
      Dashboard
    </Link>
    <Link underline="hover" color="inherit" href="/">
      Other Screen
    </Link>
    <Typography color="text.primary">Current Screen</Typography>
  </Breadcrumbs>
);

export const ActiveLastBreadcrumb: ComponentStory<typeof Breadcrumbs> = (
  props: BreadcrumbsProps,
) => (
  <Breadcrumbs aria-label="breadcrumb" {...props}>
    <Link underline="hover" color="inherit" href="/">
      Dashboard
    </Link>
    <Link underline="hover" color="inherit" href="/">
      Other Screen
    </Link>
    <Link underline="hover" color="text.primary" href="/" aria-current="page">
      Current Screen
    </Link>
  </Breadcrumbs>
);

export const CustomSeparator: ComponentStory<typeof Breadcrumbs> = (
  props: BreadcrumbsProps,
) => (
  <Breadcrumbs
    separator={<NavigateNextIcon fontSize="small" />}
    aria-label="breadcrumb"
    {...props}
  >
    <Link underline="hover" key="1" color="inherit" href="/">
      Dashboard
    </Link>
    <Link underline="hover" key="2" color="inherit" href="/">
      Other Screen
    </Link>
    <Typography key="3" color="text.primary">
      Current Screen
    </Typography>
  </Breadcrumbs>
);
