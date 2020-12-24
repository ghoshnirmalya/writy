import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import NavbarSectionEditor from "components/editor/sections/navbar";
import pageData from "data/layout.json";
import React, { FC } from "react";

const RightSidebarAccordion: FC = () => {
  const editorControlsBgColor = useColorModeValue("white", "black");

  const mapSectionTypeToEditor = (section: any) => {
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

  const mapSectionTypeToName = (type: string) => {
    switch (type) {
      case "navbar":
        return "Navbar section";

      case "hero":
        return "Hero section";

      case "features":
        return "Feature section";

      default:
        break;
    }
  };

  return (
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
                <Text fontWeight="bold">
                  {mapSectionTypeToName(section.meta.type)}
                </Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel p={0} borderTopWidth={1}>
              {mapSectionTypeToEditor(section)}
            </AccordionPanel>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
};

export default RightSidebarAccordion;
