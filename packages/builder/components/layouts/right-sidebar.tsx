import {
  Text,
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useColorModeValue,
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
        <TabList bg={editorControlsBgColor}>
          <Tab>Global styles</Tab>
          <Tab>Overrides</Tab>
          <Tab>Templates</Tab>
          <Tab>Settings</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Box bg={editorControlsBgColor} m={1}>
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
                          <Text fontWeight="bold">{section.meta.type}</Text>
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                      <AccordionPanel p={0} borderTopWidth={1}>
                        {mapSectionToSectionType(section)}
                      </AccordionPanel>
                    </AccordionItem>
                  );
                })}
              </Accordion>
            </Box>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default RightSidebar;
