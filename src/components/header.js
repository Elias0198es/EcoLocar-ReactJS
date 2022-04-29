import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import { TabContext, TabList, TabPanel } from '@material-ui/lab';

export default function LabTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Home" value="1" />
            <Tab label="Quem somos" value="2" />
            <Tab label="Porque alugar" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">Home</TabPanel>
        <TabPanel value="2">Quem somos</TabPanel>
        <TabPanel value="3">Porque alugar</TabPanel>
      </TabContext>
    </Box>
  );
}
