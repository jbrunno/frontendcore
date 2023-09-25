import {
  ArrowBack as ArrowBackIcon,
  ArrowForward as ArrowForwardIcon,
} from '@mui/icons-material';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import PaginationItem from '../../PaginationItem/PaginationItem';
import { Pagination } from '../Pagination';

export default {
  id: 'pagination',
  title: 'Navigation/Pagination',
  component: Pagination,
  argTypes: {
    count: { control: { type: 'number' } },
    defaultPage: { control: { type: 'number' } },
    boundaryCount: { control: { type: 'number' } },
    siblingCount: { control: { type: 'number' } },
    color: { control: 'radio', options: ['primary', 'secondary', 'standard'] },
    size: { control: 'radio', options: ['small', 'medium', 'large'] },
    variant: { control: 'radio', options: ['outlined', 'text'] },
    shape: { control: 'radio', options: ['circular', 'rounded'] },
    disabled: { control: 'boolean' },
    hideNextButton: { control: 'boolean' },
    hidePrevButton: { control: 'boolean' },
    showFirstButton: { control: 'boolean' },
    showLastButton: { control: 'boolean' },
    onChange: { control: 'object' },
    renderItem: { control: 'object' },
  },
  args: {
    count: 10,
    defaultPage: 5,
    size: 'large',
  },
} as ComponentMeta<typeof Pagination>;

export const Default: ComponentStory<typeof Pagination> = (props) => (
  <Pagination {...props} />
);

export const CustomIcons: ComponentStory<typeof Pagination> = (props) => (
  <Pagination
    count={10}
    renderItem={(item) => (
      <PaginationItem
        components={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
        {...item}
      />
    )}
    {...props}
  />
);
