import { FormControl, FormLabel, VStack } from "@chakra-ui/react";
import ColorPicker from "components/color-picker";
import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentPageData, getSectionData } from "selectors/site";
import { updateTemplateSectionTheme } from "slices/site";

interface IProps {
  positionOfSection: number;
}

const FooterSectionEditorColorsPanel: FC<IProps> = ({ positionOfSection }) => {
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
        <FormLabel>Link</FormLabel>
        <ColorPicker
          color={theme.linkColor}
          onChange={(color: string) => handleChange("linkColor", color)}
        />
      </FormControl>
    </VStack>
  );
};

export default FooterSectionEditorColorsPanel;
