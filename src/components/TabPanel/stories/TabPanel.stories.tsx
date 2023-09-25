import { ComponentMeta, ComponentStory } from '@storybook/react';

import TabContext from '../../TabContext/TabContext';
import Box from '../../Box/Box';
import TabPanel from '../TabPanel';

export default {
  id: 'tabPanel',
  title: 'Component API/TabPanel',
  component: TabPanel,
} as ComponentMeta<typeof TabPanel>;

export const Default = (props: ComponentStory<typeof TabPanel>) => {
  return (
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <TabContext value="1">
        <TabPanel {...props} value="1">
          Item One
        </TabPanel>
        <TabPanel {...props} value="2">
          Item Two
        </TabPanel>
        <TabPanel {...props} value="3">
          Item Three
        </TabPanel>
      </TabContext>
    </Box>
  );
};
