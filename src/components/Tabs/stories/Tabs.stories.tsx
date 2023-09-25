import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useState } from 'react';
import TabPanel from '../../TabPanel/TabPanel';
import Tabs from '../Tabs';

export default {
  id: 'tabs',
  title: 'Navigation/Tabs',
  component: Tabs,
} as ComponentMeta<typeof Tabs>;

const contatoNomeTab = {
  telefones: 'Telefones',
  emails: 'E-mails',
  enderecos: 'Endereços',
};

export const Default = (props: ComponentStory<typeof Tabs>) => {
  const [value, setValue] = useState('1');

  return (
    <Tabs
      value={value}
      handleChange={(tabValue) => setValue(tabValue)}
      tabNames={contatoNomeTab}
      {...props}
    >
      <TabPanel value="0">
        <div>Telefones</div>
      </TabPanel>
      <TabPanel value="1">
        <div>E-mails</div>
      </TabPanel>
    </Tabs>
  );
};
