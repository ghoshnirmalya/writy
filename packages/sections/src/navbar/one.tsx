import { Box, HStack, Link } from "@chakra-ui/react";
import React from "react";

const NavbarLayoutOne = () => {
  return (
    <Box as="section" borderBottomWidth={1} p={4}>
      <HStack spacing={16} justifyContent="space-between">
        <Box>
          <Link>Home</Link>
        </Box>
        <HStack spacing={8}>
          <Link>About</Link>
          <Link>History</Link>
          <Link>Join the team</Link>
          <Link>Press</Link>
        </HStack>
      </HStack>
    </Box>
  );
};

export default NavbarLayoutOne;
