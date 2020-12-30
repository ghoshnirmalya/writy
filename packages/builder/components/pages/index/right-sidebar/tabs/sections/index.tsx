import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import FeaturesSectionEditor from "components/editor/sections/features";
import FooterSectionEditor from "components/editor/sections/footer";
import HeroSectionEditor from "components/editor/sections/hero";
import NavbarSectionEditor from "components/editor/sections/navbar";
import TextSectionEditor from "components/editor/sections/text";
import AddNewSection from "components/pages/index/right-sidebar/tabs/sections/add-new-section";
import React, { FC } from "react";
import { useSelector } from "react-redux";
import { getCurrentPageData, getTemplateData } from "selectors/site";

const RightSidebarSectionsTab: FC = () => {
  const currentPageId = useSelector(getCurrentPageData());
  const editorControlsBgColor = useColorModeValue("brand.100", "brand.900");
  const template = useSelector(getTemplateData(currentPageId));

  const mapSectionTypeToEditor = (section: any, positionOfSection: number) => {
    switch (section.meta.type) {
      case "navbar":
        return <NavbarSectionEditor positionOfSection={positionOfSection} />;

      case "hero":
        return <HeroSectionEditor positionOfSection={positionOfSection} />;

      case "features":
        return <FeaturesSectionEditor positionOfSection={positionOfSection} />;

      case "text":
        return <TextSectionEditor positionOfSection={positionOfSection} />;

      case "footer":
        return <FooterSectionEditor positionOfSection={positionOfSection} />;

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

      case "footer":
        return "Footer section";

      default:
        break;
    }
  };

  return (
    <Accordion allowToggle>
      <VStack spacing={4}>
        <AddNewSection positionOfSection={0} />
        {template?.sections.map((section: any, index: number) => {
          return (
            <VStack key={index} spacing={4} w="100%">
              <AccordionItem
                borderWidth={1}
                rounded="lg"
                w="100%"
                bg={editorControlsBgColor}
              >
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    <Text fontWeight="bold" fontSize="sm">
                      {mapSectionTypeToName(section.meta.type)}
                    </Text>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel p={0} borderTopWidth={1}>
                  {mapSectionTypeToEditor(section, index)}
                </AccordionPanel>
              </AccordionItem>
              <AddNewSection positionOfSection={index + 1} />
            </VStack>
          );
        })}
      </VStack>
    </Accordion>
  );
};

export default RightSidebarSectionsTab;
