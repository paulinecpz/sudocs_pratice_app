import * as React from "react";
import Box from "@mui/material/Box";
import { Tab } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';

export default function Tabs() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "80%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange}>
            <Tab label="Choose your repositories" value="1" />
            <Tab label="Your plan" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">
          Select your repositories that you want to documentate
        </TabPanel>
        <TabPanel value="2">20 euros / month</TabPanel>
      </TabContext>
    </Box>
  );
}
