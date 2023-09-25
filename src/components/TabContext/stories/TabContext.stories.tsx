import { ComponentMeta, ComponentStory } from '@storybook/react';

import Box from '../../Box/Box';
import TabPanel from '../../TabPanel/TabPanel';
import TabContext from '../TabContext';

export default {
  id: 'tabContext',
  title: 'Component API/TabContext',
  component: TabContext,
} as ComponentMeta<typeof TabContext>;

export const Default = (props: ComponentStory<typeof TabContext>) => {
  return (
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <TabContext {...props} value="1">
        <TabPanel value="1">Item One</TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
      </TabContext>
    </Box>
  );
};
