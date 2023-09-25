import React from 'react';
import { render } from '@test-utils/component-testing';
import Box from '../Box/Box';
import Tab from './Tab';

test('renders the Tab', () => {
  const { container } = render(
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Tab label="Item One" />
      <Tab label="Item Two" />
      <Tab label="Item Three" />
    </Box>,
  );
  expect(container).toMatchSnapshot();
});
