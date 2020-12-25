import { FormControl, FormLabel, HStack, VStack } from "@chakra-ui/react";
import ColorPicker from "components/color-picker";
import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSectionData } from "selectors/template";
import { updateTemplateSectionTheme } from "slices/template";

interface IProps {
  positionOfSection: number;
}

const FooterSectionEditorColorsPanel: FC<IProps> = ({ positionOfSection }) => {
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
    </VStack>
  );
};

export default FooterSectionEditorColorsPanel;
