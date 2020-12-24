import {
  Box,
  HStack,
  Icon,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import dynamic from "next/dynamic";
import React, { FC } from "react";
import {
  MdChromeReaderMode,
  MdCode,
  MdDns,
  MdSettings,
  MdStyle,
} from "react-icons/md";

const RightSidebarSectionsTab = dynamic(
  () =>
    import(
      /* webpackChunkName: 'rightSidebarSectionsTab' */ "components/layouts/right-sidebar/tabs/sections"
    ),
  { ssr: false }
);

const RightSidebarHTMLTab = dynamic(
  () =>
    import(
      /* webpackChunkName: 'rightSidebarHTMLTab' */ "components/layouts/right-sidebar/tabs/html"
    ),
  { ssr: false }
);

const RightSidebarCSSOverridesTab = dynamic(
  () =>
    import(
      /* webpackChunkName: 'rightSidebarCSSOverridesTab' */ "components/layouts/right-sidebar/tabs/css-overrides"
    ),
  { ssr: false }
);

const RightSidebarTabs: FC = () => {
  const editorControlsBgColor = useColorModeValue("white", "black");

  return (
    <Tabs isLazy>
      <TabList bg={editorControlsBgColor}>
        <Tab>
          <HStack spacing={1}>
            <Icon as={MdDns} />
            <Text>Sections</Text>
          </HStack>
        </Tab>
        <Tab>
          <HStack spacing={1}>
            <Icon as={MdCode} />
            <Text>HTML</Text>
          </HStack>
        </Tab>
        <Tab>
          <HStack spacing={1}>
            <Icon as={MdStyle} />
            <Text>CSS</Text>
          </HStack>
        </Tab>
        <Tab>
          <HStack spacing={1}>
            <Icon as={MdChromeReaderMode} />
            <Text>Templates</Text>
          </HStack>
        </Tab>
        <Tab>
          <HStack spacing={1}>
            <Icon as={MdSettings} />
            <Text>Settings</Text>
          </HStack>
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <Box bg={editorControlsBgColor}>
            <RightSidebarSectionsTab />
          </Box>
        </TabPanel>
        <TabPanel>
          <Box bg={editorControlsBgColor}>
            <RightSidebarHTMLTab />
          </Box>
        </TabPanel>
        <TabPanel>
          <Box bg={editorControlsBgColor}>
            <RightSidebarCSSOverridesTab />
          </Box>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default RightSidebarTabs;
