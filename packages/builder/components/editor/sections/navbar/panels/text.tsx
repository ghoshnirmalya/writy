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
import { getSectionData } from "selectors/template";
import {
  addTemplateSectionData,
  removeTemplateSectionData,
  updateTemplateSectionData,
} from "slices/template";

interface IProps {
  positionOfSection: number;
}

const NavbarSectionEditorTextPanel: FC<IProps> = ({ positionOfSection }) => {
  const dispatch = useDispatch();
  const { data } = useSelector(getSectionData(positionOfSection));

  const handleDataChange = (
    itemPosition: number,
    itemType: string,
    value: string
  ) => {
    dispatch(
      updateTemplateSectionData({
        positionOfSection,
        itemType: "links",
        itemPosition,
        key: itemType,
        value,
      })
    );
  };

  const handleDataDeletion = (itemPosition: number) => {
    dispatch(
      removeTemplateSectionData({
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
        positionOfSection,
        itemType: "links",
        value: initialValue,
      })
    );
  };

  return (
    <VStack spacing={4} align="stretch">
      {data.links.map((link: any, index: number) => {
        return (
          <HStack spacing={4} key={index} alignItems="flex-end">
            <FormControl>
              <FormLabel>Label</FormLabel>
              <Input
                value={link.label}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  handleDataChange(index, "label", e.currentTarget.value)
                }
              />
            </FormControl>
            <FormControl>
              <FormLabel>URL</FormLabel>
              <Input
                value={link.link}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  handleDataChange(index, "link", e.currentTarget.value)
                }
              />
            </FormControl>
            <IconButton
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
