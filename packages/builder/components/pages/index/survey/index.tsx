import {
  Box,
  Grid,
  Heading,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import rainbowTemplateData from "data/templates/rainbow";
import unoTemplateData from "data/templates/uno";
import Image from "next/image";
import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentPageData } from "selectors/site";
import { addPage, setTemplateData } from "slices/site";

const Survey: FC = () => {
  const dispatch = useDispatch();
  const bgColor = useColorModeValue("gray.100", "black");
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

    ["index", "about", "contact"].map((page: string, index: number) => {
      dispatch(
        addPage({
          meta: {
            id: page,
          },
        })
      );

      dispatch(setTemplateData({ currentPageId: index, templateData }));
    });
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
          bg={bgColor}
          _hover={{
            shadow: "lg",
          }}
        >
          <Image
            src={template.image}
            alt={template.label}
            width={459}
            height={440}
          />
          <Text p={4} borderTopWidth={1} fontWeight="bold">
            {template.label}
          </Text>
        </Box>
      );
    });
  };

  return (
    <VStack spacing={4}>
      <Heading fontSize="3xl">Templates</Heading>
      <Text>Click to select your preferred template and continue</Text>
      <Grid templateColumns="repeat(2, 1fr)" gap={8} w="100%" p={8}>
        {templateNode()}
      </Grid>
    </VStack>
  );
};

export default Survey;
