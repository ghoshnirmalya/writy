import {
  FormControl,
  FormLabel,
  HStack,
  Input,
  VStack,
} from "@chakra-ui/react";
import React, { ChangeEvent, FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSectionData } from "selectors/template";
import { updateTemplateSectionData } from "slices/template";

interface IProps {
  positionOfSection: number;
}

const NavbarSectionEditorTextPanel: FC<IProps> = ({ positionOfSection }) => {
  const dispatch = useDispatch();
  const { data } = useSelector(getSectionData(positionOfSection));

  const handleChange = (
    positionOfItem: number,
    itemType: string,
    value: string
  ) => {
    dispatch(
      updateTemplateSectionData({
        positionOfSection,
        itemType: "links",
        itemPosition: positionOfItem,
        key: itemType,
        value,
      })
    );
  };

  return (
    <VStack spacing={4} align="stretch">
      {data.links.map((link: any, index: number) => {
        return (
          <HStack spacing={4} key={index}>
            <FormControl>
              <FormLabel>Label</FormLabel>
              <Input
                value={link.label}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  handleChange(index, "label", e.currentTarget.value)
                }
              />
            </FormControl>
            <FormControl>
              <FormLabel>URL</FormLabel>
              <Input
                value={link.link}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  handleChange(index, "link", e.currentTarget.value)
                }
              />
            </FormControl>
          </HStack>
        );
      })}
    </VStack>
  );
};

export default NavbarSectionEditorTextPanel;
