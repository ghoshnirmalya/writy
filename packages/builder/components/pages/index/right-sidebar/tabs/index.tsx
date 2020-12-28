import {
  Box,
  Flex,
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
import { MdChromeReaderMode, MdCollections, MdDns } from "react-icons/md";

const LazyRightSidebarSectionsTab = dynamic(
  () =>
    import(
      /* webpackChunkName: 'lazyRightSidebarSectionsTab' */ "components/pages/index/right-sidebar/tabs/sections"
    ),
  {
    ssr: false,
    loading: () => {
      return (
        <Flex h={100} alignItems="center" justifyContent="center">
          <Text fontSize="20" fontWeight="bold">
            Loading...
          </Text>
        </Flex>
      );
    },
  }
);

const LazyRightSidebarTemplatesTab = dynamic(
  () =>
    import(
      /* webpackChunkName: 'lazyRightSidebarTemplatesTab' */ "components/pages/index/right-sidebar/tabs/templates"
    ),
  {
    ssr: false,
    loading: () => {
      return (
        <Flex h={100} alignItems="center" justifyContent="center">
          <Text fontSize="20" fontWeight="bold">
            Loading...
          </Text>
        </Flex>
      );
    },
  }
);

const LazyRightSidebarPagesTab = dynamic(
  () =>
    import(
      /* webpackChunkName: 'lazyRightSidebarPagesTab' */ "components/pages/index/right-sidebar/tabs/pages"
    ),
  {
    ssr: false,
    loading: () => {
      return (
        <Flex h={100} alignItems="center" justifyContent="center">
          <Text fontSize="20" fontWeight="bold">
            Loading...
          </Text>
        </Flex>
      );
    },
  }
);

const RightSidebarTabs: FC = () => {
  const editorControlsBgColor = useColorModeValue("brand.100", "brand.900");

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
            <Icon as={MdChromeReaderMode} />
            <Text>Templates</Text>
          </HStack>
        </Tab>
        <Tab>
          <HStack spacing={1}>
            <Icon as={MdCollections} />
            <Text>Pages</Text>
          </HStack>
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <Box>
            <LazyRightSidebarSectionsTab />
          </Box>
        </TabPanel>
        <TabPanel>
          <Box>
            <LazyRightSidebarTemplatesTab />
          </Box>
        </TabPanel>
        <TabPanel>
          <Box>
            <LazyRightSidebarPagesTab />
          </Box>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default RightSidebarTabs;
