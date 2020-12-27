import { Flex, VStack } from "@chakra-ui/react";
import Image from "next/image";
import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { updateTemplateSectionMeta } from "slices/site";

interface IProps {
  positionOfSection: number;
}

const HeroSectionEditorLayoutsPanel: FC<IProps> = ({ positionOfSection }) => {
  const dispatch = useDispatch();

  const handleChange = (layoutId: string) => {
    dispatch(
      updateTemplateSectionMeta({
        positionOfSection,
        itemType: "layout",
        value: layoutId,
      })
    );
  };

  const imagesNode = () => {
    const layouts = [
      {
        key: "one",
        label: "First layout",
      },
      {
        key: "two",
        label: "Second layout",
      },
    ];

    return layouts.map((layout: any, index: number) => {
      return (
        <Flex
          key={index}
          as="button"
          onClick={() => handleChange(layout.key)}
          borderWidth={1}
          alignItems="center"
          _hover={{
            shadow: "lg",
          }}
        >
          <Image
            src={`/images/section-layouts/hero/${index + 1}.png`}
            alt={`Layout ${layout.key}`}
            width={533}
            height={160}
          />
        </Flex>
      );
    });
  };

  return (
    <VStack spacing={4} align="stretch">
      {imagesNode()}
    </VStack>
  );
};

export default HeroSectionEditorLayoutsPanel;
