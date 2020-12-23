import { Box, useColorModeValue } from "@chakra-ui/react";
import { FeaturesLayouts, HeroLayouts, NavbarLayouts } from "@writy/sections";
import React, { FC } from "react";

const ContentArea: FC = () => {
  const bgColor = useColorModeValue("gray.100", "gray.900");

  return (
    <Box
      h="calc(100vh - 80px)"
      w="calc(100vw - 100px - 200px)"
      bg={bgColor}
      p={14}
      overflowY="auto"
    >
      <Box borderWidth={1}>
        <Box bg="white">
          <NavbarLayouts.One />
          <HeroLayouts.One />
          <FeaturesLayouts.One />
        </Box>
      </Box>
    </Box>
  );
};

export default ContentArea;
