import { ComponentMeta, ComponentStory } from '@storybook/react';
import { SyntheticEvent, useState } from 'react';
import TabContext from '../../TabContext/TabContext';
import Box from '../../Box/Box';
import Tab from '../../Tab/Tab';
import TabList from '../TabList';

export default {
  id: 'tabList',
  title: 'Component API/TabList',
  component: TabList,
} as ComponentMeta<typeof TabList>;

export const Default = (props: ComponentStory<typeof TabList>) => {
  const [value, setValue] = useState('1');

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <TabContext value={value}>
        <TabList
          {...props}
          onChange={handleChange}
          aria-label="lab API tabs example"
        >
          <Tab label="Item One" value="1" />
          <Tab label="Item Two" value="2" />
          <Tab label="Item Three" value="3" />
        </TabList>
      </TabContext>
    </Box>
  );
};
