import {
  Button,
  Flex,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Portal,
  useColorModeValue,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import scrollPreviewSectionIntoView from "lib/scroll-preview-section-into-view";
import React, { FC } from "react";
import { MdAdd } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentPageData, getSiteData } from "selectors/site";
import { addTemplateSection } from "slices/site";

interface IProps {
  positionOfSection: number;
}

const AddNewSection: FC<IProps> = ({ positionOfSection }) => {
  const bgColor = useColorModeValue("brand.100", "brand.900");
  const dispatch = useDispatch();
  const { onOpen, onClose, isOpen } = useDisclosure();
  const currentPageId = useSelector(getCurrentPageData());
  const { theme } = useSelector(getSiteData());

  const handleNewSectionAddition = (sectionType: string) => {
    switch (sectionType) {
      case "navbar":
        const navbarSectionData = require("data/sections/navbar").default;

        dispatch(
          addTemplateSection({
            currentPageId,
            positionOfSection,
            sectionContent: navbarSectionData(theme.mode),
          })
        );

        break;

      case "hero":
        const heroSectionData = require("data/sections/hero").default;

        dispatch(
          addTemplateSection({
            currentPageId,
            positionOfSection,
            sectionContent: heroSectionData(theme.mode),
          })
        );

        break;

      case "features":
        const featuresSectionData = require("data/sections/features").default;

        dispatch(
          addTemplateSection({
            currentPageId,
            positionOfSection,
            sectionContent: featuresSectionData(theme.mode),
          })
        );

        break;

      case "text":
        const textSectionData = require("data/sections/text").default;

        dispatch(
          addTemplateSection({
            currentPageId,
            positionOfSection,
            sectionContent: textSectionData(theme.mode),
          })
        );

        break;

      default:
        break;
    }

    scrollPreviewSectionIntoView(currentPageId, positionOfSection);

    onClose();
  };

  const sectionButtonsNode = () => {
    const sections = [
      { key: "navbar", label: "Navbar" },
      { key: "hero", label: "Hero" },
      { key: "features", label: "Features" },
      { key: "text", label: "Text" },
    ];

    return (
      <VStack spacing={4} align="left">
        {sections.map((section: any, index: number) => {
          return (
            <Button
              size="sm"
              key={index}
              onClick={() => handleNewSectionAddition(section.key)}
            >
              Add {section.label} section
            </Button>
          );
        })}
      </VStack>
    );
  };

  return (
    <Flex alignItems="center" justifyContent="center" w="100%">
      <Popover isOpen={isOpen} onOpen={onOpen} onClose={onClose}>
        <PopoverTrigger>
          <Button
            size="xs"
            leftIcon={<MdAdd />}
            w="100%"
            disabled={isOpen}
            colorScheme="blue"
            variant="ghost"
          >
            Add section
          </Button>
        </PopoverTrigger>
        <Portal>
          <PopoverContent bg={bgColor}>
            <PopoverArrow />
            <PopoverBody>{sectionButtonsNode()}</PopoverBody>
          </PopoverContent>
        </Portal>
      </Popover>
    </Flex>
  );
};

export default AddNewSection;
