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
import { getCurrentPageData } from "selectors/site";
import { addTemplateSection } from "slices/site";

interface IProps {
  positionOfSection: number;
}

const AddNewSection: FC<IProps> = ({ positionOfSection }) => {
  const bgColor = useColorModeValue("brand.100", "brand.900");
  const dispatch = useDispatch();
  const { onOpen, onClose, isOpen } = useDisclosure();
  const currentPageId = useSelector(getCurrentPageData());

  const handleNewSectionAddition = (sectionType: string) => {
    switch (sectionType) {
      case "navbar":
        const navbarSectionData = require("data/sections/navbar").default;

        dispatch(
          addTemplateSection({
            currentPageId,
            positionOfSection,
            sectionContent: navbarSectionData,
          })
        );

        break;

      case "hero":
        const heroSectionData = require("data/sections/hero").default;

        dispatch(
          addTemplateSection({
            currentPageId,
            positionOfSection,
            sectionContent: heroSectionData,
          })
        );

        break;

      case "features":
        const featuresSectionData = require("data/sections/features").default;

        dispatch(
          addTemplateSection({
            currentPageId,
            positionOfSection,
            sectionContent: featuresSectionData,
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
            size="sm"
            leftIcon={<MdAdd />}
            w="100%"
            disabled={isOpen}
            colorScheme="blue"
          >
            Add
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
