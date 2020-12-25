import { Button, VStack, Box, layout, Flex } from "@chakra-ui/react";
import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { updateTemplateSectionMeta } from "slices/template";
import Image from "next/image";

interface IProps {
  positionOfSection: number;
}

const NavbarSectionEditorLayoutsPanel: FC<IProps> = ({ positionOfSection }) => {
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
            shadow: "md",
          }}
        >
          <Image
            src={`/images/section-layouts/navbar/${index + 1}.png`}
            alt={`Layout ${layout.key}`}
            width={533}
            height={30}
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

export default NavbarSectionEditorLayoutsPanel;
