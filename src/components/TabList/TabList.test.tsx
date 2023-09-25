import React from 'react';
import { render } from '@test-utils/component-testing';
import TabList from './TabList';
import Tab from '../Tab/Tab';
import TabContext from '../TabContext/TabContext';
import Box from '../Box/Box';

test('renders the TabList', () => {
  const { container } = render(
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <TabContext value="1">
        <TabList>
          <Tab label="Item One" value="1" />
        </TabList>
      </TabContext>
    </Box>,
  );

  container.querySelectorAll('button').forEach((button) => {
    button.removeAttribute('id');
    button.removeAttribute('aria-controls');
  });

  expect(container).toMatchSnapshot();
});
