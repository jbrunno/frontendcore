import { TabList } from '@mui/lab';
import { Children } from '@/types';
import TabContext from '../TabContext/TabContext';
import Tab from '../Tab/Tab';
import TabPanel from '../TabPanel/TabPanel';
import Box from '../Box/Box';

type TabsProps = {
  children: Children;
  value: string;
  handleChange: (tabValue: string) => void;
  tabNames: Record<string, string>;
  noTabPanel?: boolean;
};

export function Tabs({
  children,
  value,
  handleChange,
  tabNames,
  noTabPanel,
}: TabsProps) {
  return (
    <Box sx={{ width: '100%', typography: 'subtitle2' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={(_, tabValue) => handleChange(tabValue)}>
            {Object.keys(tabNames).map((keyName) => (
              <Tab key={keyName} label={tabNames[keyName]} value={keyName} />
            ))}
          </TabList>
        </Box>
        {noTabPanel
          ? children
          : (children as Array<JSX.Element>).map((component, inx) => (
              <TabPanel value={Object.keys(tabNames)[inx]}>
                {component}
              </TabPanel>
            ))}
      </TabContext>
    </Box>
  );
}

export default Tabs;
