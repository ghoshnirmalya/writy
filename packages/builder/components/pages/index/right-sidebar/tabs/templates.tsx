import { Box, Text, VStack, useColorModeValue } from "@chakra-ui/react";
import rainbowTemplateData from "data/templates/rainbow";
import unoTemplateData from "data/templates/uno";
import Image from "next/image";
import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { setTemplateData } from "slices/template";

const RightSidebarTemplatesTab: FC = () => {
  const dispatch = useDispatch();
  const editorControlsBgColor = useColorModeValue("white", "black");

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

    dispatch(setTemplateData(templateData));
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
