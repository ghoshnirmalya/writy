import {
  Box,
  FormControl,
  FormLabel,
  HStack,
  Input,
  VStack,
} from "@chakra-ui/react";
import React, { ChangeEvent, FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSectionData } from "selectors/template";
import { updateTemplateSectionTheme } from "slices/template";
import { SketchPicker } from "react-color";
import ColorPicker from "components/color-picker";

interface IProps {
  positionOfSection: number;
}

const NavbarSectionEditorColorsPanel: FC<IProps> = ({ positionOfSection }) => {
  const dispatch = useDispatch();
  const { theme } = useSelector(getSectionData(positionOfSection));

  const handleChange = (itemType: string, value: string) => {
    dispatch(
      updateTemplateSectionTheme({
        positionOfSection,
        key: itemType,
        value,
      })
    );
  };

  return (
    <VStack spacing={4} align="stretch">
      return (
      <HStack spacing={4}>
        <FormControl>
          <FormLabel>Background</FormLabel>
          <ColorPicker
            color={theme.backgroundColor}
            onChange={(color: string) => handleChange("backgroundColor", color)}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Link</FormLabel>
          <ColorPicker
            color={theme.linkColor}
            onChange={(color: string) => handleChange("linkColor", color)}
          />
        </FormControl>
      </HStack>
      );
    </VStack>
  );
};

export default NavbarSectionEditorColorsPanel;
