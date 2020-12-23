import {
  FormControl,
  FormLabel,
  HStack,
  Input,
  VStack,
} from "@chakra-ui/react";
import React, { FC } from "react";

interface IProps {
  section: any;
}

const NavbarSectionEditor: FC<IProps> = ({ section }) => {
  return (
    <VStack spacing={4} align="stretch">
      {section.data.links.map((link: any, index: number) => {
        return (
          <HStack spacing={4} key={index}>
            <FormControl id={link.link}>
              <FormLabel>Label</FormLabel>
              <Input defaultValue={link.label} />
            </FormControl>
            <FormControl id={link.link}>
              <FormLabel>URL</FormLabel>
              <Input defaultValue={link.link} />
            </FormControl>
          </HStack>
        );
      })}
    </VStack>
  );
};

export default NavbarSectionEditor;
