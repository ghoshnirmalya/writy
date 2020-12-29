import {
  FormControl,
  FormLabel,
  HStack,
  Input,
  VStack,
} from "@chakra-ui/react";
import React, { ChangeEvent, FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentPageData, getSectionData } from "selectors/site";
import {
  updateTemplateSectionData,
  updateTemplateSectionMeta,
} from "slices/site";

interface IProps {
  positionOfSection: number;
}

const HeroSectionEditorTextPanel: FC<IProps> = ({ positionOfSection }) => {
  const dispatch = useDispatch();
  const currentPageId = useSelector(getCurrentPageData());
  const { data, meta } = useSelector(
    getSectionData(currentPageId, positionOfSection)
  );

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

  const handleDataChange = (
    itemPosition: number,
    itemType: string,
    value: string
  ) => {
    dispatch(
      updateTemplateSectionData({
        currentPageId,
        positionOfSection,
        itemType: "buttons",
        itemPosition,
        key: itemType,
        value,
      })
    );
  };

  return (
    <VStack spacing={4} align="stretch">
      <FormControl>
        <FormLabel>Heading</FormLabel>
        <Input
          size="sm"
          rounded="lg"
          value={meta.heading}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            handleMetaChange("heading", e.currentTarget.value)
          }
        />
      </FormControl>
      <FormControl>
        <FormLabel>Sub heading</FormLabel>
        <Input
          size="sm"
          rounded="lg"
          value={meta.subHeading}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            handleMetaChange("subHeading", e.currentTarget.value)
          }
        />
      </FormControl>
      {data.buttons.map((button: any, index: number) => {
        return (
          <HStack spacing={4} key={index} alignItems="flex-end">
            <FormControl>
              <FormLabel>Button {index + 1} label</FormLabel>
              <Input
                size="sm"
                rounded="lg"
                value={button.label}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  handleDataChange(index, "label", e.currentTarget.value)
                }
              />
            </FormControl>
            <FormControl>
              <FormLabel>Button {index + 1} URL</FormLabel>
              <Input
                size="sm"
                rounded="lg"
                value={button.link}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  handleDataChange(index, "link", e.currentTarget.value)
                }
              />
            </FormControl>
          </HStack>
        );
      })}
    </VStack>
  );
};

export default HeroSectionEditorTextPanel;
