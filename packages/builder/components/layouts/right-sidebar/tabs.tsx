import {
  Box,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useColorModeValue,
} from "@chakra-ui/react";
import NavbarSectionEditor from "components/editor/sections/navbar";
import Accordion from "components/layouts/right-sidebar/accordion";
import React, { FC } from "react";

const RightSidebarTabs: FC = () => {
  const editorControlsBgColor = useColorModeValue("white", "black");

  return (
    <Tabs>
      <TabList bg={editorControlsBgColor}>
        <Tab>Global styles</Tab>
        <Tab>Blog</Tab>
        <Tab>Overrides</Tab>
        <Tab>Templates</Tab>
        <Tab>Settings</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <Box bg={editorControlsBgColor} m={1}>
            <Accordion />
          </Box>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default RightSidebarTabs;
