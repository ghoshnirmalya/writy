import {
  Text,
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  useColorModeValue,
  TabPanel,
  Tabs,
  TabList,
  Tab,
  TabPanels,
} from "@chakra-ui/react";
import React, { FC } from "react";
import NavbarSectionEditor from "components/editor/sections/navbar";
import pageData from "data/layout.json";

const RightSidebar: FC = () => {
  const bgColor = useColorModeValue("gray.100", "gray.900");
  const editorControlsBgColor = useColorModeValue("white", "black");

  const mapSectionToSectionType = (section: any) => {
    switch (section.meta.type) {
      case "navbar":
        return <NavbarSectionEditor section={section} />;

      // case "hero":
      //   return <HeroSection section={section} />;

      // case "features":
      //   return <FeaturesSection section={section} />;

      default:
        break;
    }
  };

  return (
    <Box
      h="calc(100vh - 80px)"
      w="600px"
      bg={bgColor}
      borderLeftWidth={1}
      overflowY="auto"
    >
      <Box borderBottomWidth={1} p={4} bg={editorControlsBgColor}>
        <Text fontWeight="bold">Editor</Text>
      </Box>
      <Tabs>
        <Box bg={editorControlsBgColor}>
          <TabList>
            <Tab>Text</Tab>
            <Tab>Colors</Tab>
            <Tab>Fonts</Tab>
            <Tab>Layouts</Tab>
          </TabList>
        </Box>
        <TabPanels>
          <TabPanel>
            <Accordion
              defaultIndex={[0]}
              borderWidth={1}
              allowToggle
              bg={editorControlsBgColor}
            >
              {pageData.sections.map((section: any, index: number) => {
                return (
                  <AccordionItem key={index}>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        {section.meta.type}
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                      {mapSectionToSectionType(section)}
                    </AccordionPanel>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default RightSidebar;
