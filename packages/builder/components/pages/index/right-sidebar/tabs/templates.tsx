import { Box, Text, useColorModeValue, VStack } from "@chakra-ui/react";
import rainbowTemplateData from "data/templates/rainbow";
import unoTemplateData from "data/templates/uno";
import Image from "next/image";
import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentPageData } from "selectors/site";
import { setTemplateData } from "slices/site";

const RightSidebarTemplatesTab: FC = () => {
  const dispatch = useDispatch();
  const editorControlsBgColor = useColorModeValue("white", "black");
  const currentPageId = useSelector(getCurrentPageData());

  const mapTemplateIdToData = (templateId: string) => {
    switch (templateId) {
      case "uno":
        return unoTemplateData;

      case "rainbow":
        return rainbowTemplateData;

      default:
        return unoTemplateData;
    }
  };

  const handleTemplateSelection = (templateId: string) => {
    const templateData = mapTemplateIdToData(templateId);

    dispatch(setTemplateData({ currentPageId, templateData }));
  };

  const templateNode = () => {
    const templates = [
      {
        id: "uno",
        label: "Uno",
        image: "/images/templates/uno.png",
      },
      {
        id: "rainbow",
        label: "Rainbow",
        image: "/images/templates/rainbow.png",
      },
    ];

    return templates.map((template) => {
      return (
        <Box
          key={template.id}
          as="button"
          onClick={() => handleTemplateSelection(template.id)}
          borderWidth={1}
          alignItems="center"
          bg={editorControlsBgColor}
          _hover={{
            shadow: "lg",
          }}
        >
          <Image
            src={template.image}
            alt={template.label}
            width={466.76}
            height={450}
          />
          <Text p={4} borderTopWidth={1} fontWeight="bold">
            {template.label}
          </Text>
        </Box>
      );
    });
  };

  return <VStack spacing={4}>{templateNode()}</VStack>;
};

export default RightSidebarTemplatesTab;
