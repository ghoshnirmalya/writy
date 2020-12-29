import {
  Button,
  FormControl,
  FormLabel,
  HStack,
  IconButton,
  Input,
  VStack,
} from "@chakra-ui/react";
import React, { ChangeEvent, FC } from "react";
import { MdAdd, MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentPageData, getSectionData } from "selectors/site";
import {
  addTemplateSectionData,
  removeTemplateSectionData,
  updateTemplateSectionData,
  updateTemplateSectionMeta,
} from "slices/site";

interface IProps {
  positionOfSection: number;
}

const NavbarSectionEditorTextPanel: FC<IProps> = ({ positionOfSection }) => {
  const dispatch = useDispatch();
  const currentPageId = useSelector(getCurrentPageData());
  const { data, meta } = useSelector(
    getSectionData(currentPageId, positionOfSection)
  );

  const handleDataChange = (
    itemPosition: number,
    itemType: string,
    value: string
  ) => {
    dispatch(
      updateTemplateSectionData({
        currentPageId,
        positionOfSection,
        itemType: "links",
        itemPosition,
        key: itemType,
        value,
      })
    );
  };

  const handleMetaChange = (itemType: string, value: string) => {
    dispatch(
      updateTemplateSectionMeta({
        currentPageId,
        positionOfSection,
        itemType,
        value,
      })
    );
  };

  const handleDataDeletion = (itemPosition: number) => {
    dispatch(
      removeTemplateSectionData({
        currentPageId,
        positionOfSection,
        itemType: "links",
        itemPosition,
      })
    );
  };

  const handleDataAddition = () => {
    const initialValue = { label: "Link", link: "/link" };

    dispatch(
      addTemplateSectionData({
        currentPageId,
        positionOfSection,
        itemType: "links",
        value: initialValue,
      })
    );
  };

  return (
    <VStack spacing={4} align="stretch">
      <FormControl>
        <FormLabel>Name of the site</FormLabel>
        <Input
          size="sm"
          rounded="lg"
          value={meta.siteName}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            handleMetaChange("siteName", e.currentTarget.value)
          }
        />
      </FormControl>
      {data.links.map((link: any, index: number) => {
        return (
          <HStack spacing={4} key={index} alignItems="flex-end">
            <FormControl>
              <FormLabel>Label</FormLabel>
              <Input
                size="sm"
                rounded="lg"
                value={link.label}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  handleDataChange(index, "label", e.currentTarget.value)
                }
              />
            </FormControl>
            <FormControl>
              <FormLabel>URL</FormLabel>
              <Input
                size="sm"
                rounded="lg"
                value={link.link}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  handleDataChange(index, "link", e.currentTarget.value)
                }
              />
            </FormControl>
            <IconButton
              size="sm"
              aria-label="Delete"
              icon={<MdDelete />}
              colorScheme="red"
              variant="outline"
              onClick={() => handleDataDeletion(index)}
            />
          </HStack>
        );
      })}
      <Button
        size="sm"
        leftIcon={<MdAdd />}
        colorScheme="blue"
        onClick={handleDataAddition}
      >
        Add link
      </Button>
    </VStack>
  );
};

export default NavbarSectionEditorTextPanel;
