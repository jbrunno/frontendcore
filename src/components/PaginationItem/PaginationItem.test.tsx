import React from 'react';
import { render } from '@test-utils/component-testing';
import {
  ArrowBack as ArrowBackIcon,
  ArrowForward as ArrowForwardIcon,
} from '@mui/icons-material';
import { PaginationItem } from './PaginationItem';
import Pagination from '../Pagination/Pagination';

test('renders the PaginationItem', () => {
  const { container } = render(
    <Pagination
      count={10}
      renderItem={(item) => (
        <PaginationItem
          components={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
          {...item}
        />
      )}
    />,
  );
  expect(container).toMatchSnapshot();
});
