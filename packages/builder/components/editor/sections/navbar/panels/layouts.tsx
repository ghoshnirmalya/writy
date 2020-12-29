import { Flex, Img, VStack } from "@chakra-ui/react";
import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentPageData } from "selectors/site";
import { updateTemplateSectionMeta } from "slices/site";

interface IProps {
  positionOfSection: number;
}

const NavbarSectionEditorLayoutsPanel: FC<IProps> = ({ positionOfSection }) => {
  const dispatch = useDispatch();
  const currentPageId = useSelector(getCurrentPageData());

  const handleChange = (layoutId: string) => {
    dispatch(
      updateTemplateSectionMeta({
        currentPageId,
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
          rounded="lg"
          _hover={{
            shadow: "lg",
          }}
        >
          <Img
            src={`/images/section-layouts/navbar/${index + 1}.png`}
            alt={`Layout ${layout.key}`}
            rounded="lg"
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
