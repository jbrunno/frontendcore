import {
  ArrowBack as ArrowBackIcon,
  ArrowForward as ArrowForwardIcon,
} from '@mui/icons-material';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Pagination } from '../../Pagination/Pagination';
import PaginationItem from '../PaginationItem';

export default {
  id: 'paginationItem',
  title: 'Component API/PaginationItem',
  component: PaginationItem,
  argTypes: {
    color: { control: 'radio', options: ['primary', 'secondary', 'standard'] },
    shape: { control: 'radio', options: ['circular', 'rounded'] },
    size: { control: 'radio', options: ['small', 'medium', 'large'] },
    variant: { control: 'radio', options: ['outlined', 'text'] },
    type: {
      control: 'radio',
      options: [
        'end-ellipsis',
        'first',
        'last',
        'next',
        'page',
        'previous',
        'start-ellipsis',
      ],
    },
    disabled: { control: 'boolean' },
    selected: { control: 'boolean' },
    component: { control: 'object' },
  },
  args: {
    count: 10,
    defaultPage: 5,
    size: 'small',
  },
} as ComponentMeta<typeof Pagination>;

export const Default: ComponentStory<typeof PaginationItem> = (props) => (
  <Pagination
    count={10}
    renderItem={(item) => (
      <PaginationItem
        components={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
        {...item}
        {...props}
      />
    )}
  />
);
