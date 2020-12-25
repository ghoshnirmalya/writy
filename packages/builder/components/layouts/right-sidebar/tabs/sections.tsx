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
import HeroSectionEditor from "components/editor/sections/hero";
import NavbarSectionEditor from "components/editor/sections/navbar";
import pageData from "data/layout.json";
import React, { FC } from "react";

const RightSidebarSectionsTab: FC = () => {
  const editorControlsBgColor = useColorModeValue("white", "black");

  const mapSectionTypeToEditor = (section: any, positionOfSection: number) => {
    switch (section.meta.type) {
      case "navbar":
        return <NavbarSectionEditor positionOfSection={positionOfSection} />;

      case "hero":
        return <HeroSectionEditor positionOfSection={positionOfSection} />;

      // case "features":
      //   return <FeaturesSection  positionOfSection={positionOfSection}/>;

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
              {mapSectionTypeToEditor(section, index)}
            </AccordionPanel>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
};

export default RightSidebarSectionsTab;
