import React from 'react';
import { render } from '@test-utils/component-testing';
import TabPanel from './TabPanel';
import Box from '../Box/Box';
import TabContext from '../TabContext/TabContext';

test('renders the TabPanel', () => {
  const { container } = render(
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <TabContext value="1">
        <TabPanel value="1">Item One</TabPanel>
      </TabContext>
    </Box>,
  );

  const tabpanel = container.querySelector('[role="tabpanel"]');
  tabpanel?.removeAttribute('id');
  tabpanel?.removeAttribute('aria-labelledby');

  expect(container).toMatchSnapshot();
});
