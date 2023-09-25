import type { ComponentMeta, ComponentStory } from '@storybook/react';
import {
  TablePaginationActions,
  TablePaginationActionsProps,
} from '../TablePaginationActions';

export default {
  id: 'tablePaginationActions',
  component: TablePaginationActions,
  title: 'Component API/TablePaginationActions',
} as ComponentMeta<typeof TablePaginationActions>;

export const Default: ComponentStory<typeof TablePaginationActions> = (
  props: TablePaginationActionsProps,
) => <TablePaginationActions {...props} />;
