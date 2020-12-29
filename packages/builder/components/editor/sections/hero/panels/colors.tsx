import { FormControl, FormLabel, HStack, VStack } from "@chakra-ui/react";
import ColorPicker from "components/color-picker";
import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentPageData, getSectionData } from "selectors/site";
import { updateTemplateSectionTheme } from "slices/site";

interface IProps {
  positionOfSection: number;
}

const HeroSectionEditorColorsPanel: FC<IProps> = ({ positionOfSection }) => {
  const dispatch = useDispatch();
  const currentPageId = useSelector(getCurrentPageData());
  const { theme } = useSelector(
    getSectionData(currentPageId, positionOfSection)
  );

  const handleChange = (itemType: string, value: string) => {
    dispatch(
      updateTemplateSectionTheme({
        currentPageId,
        positionOfSection,
        key: itemType,
        value,
      })
    );
  };

  return (
    <VStack spacing={4} align="stretch">
      <FormControl>
        <FormLabel>Background</FormLabel>
        <ColorPicker
          color={theme.backgroundColor}
          onChange={(color: string) => handleChange("backgroundColor", color)}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Text</FormLabel>
        <ColorPicker
          color={theme.textColor}
          onChange={(color: string) => handleChange("textColor", color)}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Button background</FormLabel>
        <ColorPicker
          color={theme.buttonBackgroundColor}
          onChange={(color: string) =>
            handleChange("buttonBackgroundColor", color)
          }
        />
      </FormControl>
      <FormControl>
        <FormLabel>Button text</FormLabel>
        <ColorPicker
          color={theme.buttonTextColor}
          onChange={(color: string) => handleChange("buttonTextColor", color)}
        />
      </FormControl>
    </VStack>
  );
};

export default HeroSectionEditorColorsPanel;
