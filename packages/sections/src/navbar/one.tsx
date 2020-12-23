import { Box, HStack, Link } from "@chakra-ui/react";
import React, { FC } from "react";

interface IProps {
  theme: any;
  data: any;
}

const NavbarLayoutOne: FC<IProps> = ({ theme, data }) => {
  return (
    <Box
      borderBottomWidth={1}
      p={4}
      bg={theme.backgroundColor}
      color={theme.linkColor}
    >
      <HStack spacing={16} justifyContent="space-between">
        <Box>
          <Link>Writy</Link>
        </Box>
        <HStack spacing={8}>
          {data.links.map((link: any, index: number) => {
            return (
              <Link key={index} href={link.link}>
                {link.label}
              </Link>
            );
          })}
        </HStack>
      </HStack>
    </Box>
  );
};

export default NavbarLayoutOne;
