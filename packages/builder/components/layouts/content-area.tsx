import { Box, useColorModeValue } from "@chakra-ui/react";
import FeaturesSection from "components/views/sections/features";
import HeroSection from "components/views/sections/hero";
import NavbarSection from "components/views/sections/navbar";
import React, { FC } from "react";
import { useSelector } from "react-redux";
import { getTemplateData } from "selectors/template";

const ContentArea: FC = () => {
  const bgColor = useColorModeValue("gray.200", "gray.800");
  const template = useSelector(getTemplateData());

  const mapSectionToSectionType = (section: any) => {
    switch (section.meta.type) {
      case "navbar":
        return <NavbarSection section={section} />;

      case "hero":
        return <HeroSection section={section} />;

      case "features":
        return <FeaturesSection section={section} />;

      default:
        break;
    }
  };

  return (
    <Box
      h="calc(100vh - 80px)"
      w="calc(100vw - 80px - 600px)"
      bg={bgColor}
      p={14}
    >
      <Box borderWidth={1} shadow="xl">
        <Box
          bg={bgColor}
          h="calc(100vh - 80px - 120px)"
          overflowY="auto"
          id="js-page-content"
        >
          {template.sections.map((section: any, index: number) => {
            return (
              <Box as="section" key={index}>
                {mapSectionToSectionType(section)}
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default ContentArea;
