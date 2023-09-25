import React from 'react';
import { render } from '@test-utils/component-testing';
import TabContext from './TabContext';
import TabPanel from '../TabPanel/TabPanel';

test('renders the TabContext', () => {
  const { container } = render(
    <TabContext value="1">
      <TabPanel value="1">Item One</TabPanel>
    </TabContext>,
  );

  const tabpanel = container.querySelector('[role="tabpanel"]');
  tabpanel?.removeAttribute('id');
  tabpanel?.removeAttribute('aria-labelledby');

  expect(container).toMatchSnapshot();
});
