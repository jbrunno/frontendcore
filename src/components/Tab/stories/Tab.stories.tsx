import { ComponentMeta, ComponentStory } from '@storybook/react';
import Box from '../../Box/Box';
import Tab from '../Tab';

export default {
  id: 'tab',
  title: 'Component API/Tab',
  component: Tab,
} as ComponentMeta<typeof Tab>;

export const Default = (props: ComponentStory<typeof Tab>) => {
  return (
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Tab {...props} label="Item One" />
      <Tab {...props} label="Item Two" />
      <Tab {...props} label="Item Three" />
    </Box>
  );
};
