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
import FeaturesSectionEditor from "components/editor/sections/features";
import HeroSectionEditor from "components/editor/sections/hero";
import NavbarSectionEditor from "components/editor/sections/navbar";
import AddNewSection from "components/layouts/right-sidebar/add-new-section";
import React, { FC } from "react";
import { useSelector } from "react-redux";
import { getTemplateData } from "selectors/template";

const RightSidebarSectionsTab: FC = () => {
  const editorControlsBgColor = useColorModeValue("white", "black");
  const template = useSelector(getTemplateData());

  const mapSectionTypeToEditor = (section: any, positionOfSection: number) => {
    switch (section.meta.type) {
      case "navbar":
        return <NavbarSectionEditor positionOfSection={positionOfSection} />;

      case "hero":
        return <HeroSectionEditor positionOfSection={positionOfSection} />;

      case "features":
        return <FeaturesSectionEditor positionOfSection={positionOfSection} />;

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
        return "Features section";

      default:
        break;
    }
  };

  return (
    <Accordion borderWidth={1} allowToggle bg={editorControlsBgColor}>
      <AddNewSection positionOfSection={0} />
      {template.sections.map((section: any, index: number) => {
        return (
          <Box key={index}>
            <AccordionItem borderBottomWidth={1}>
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
            <AddNewSection positionOfSection={0} />
          </Box>
        );
      })}
    </Accordion>
  );
};

export default RightSidebarSectionsTab;
