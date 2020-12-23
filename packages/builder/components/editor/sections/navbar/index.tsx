import {
  FormControl,
  FormLabel,
  HStack,
  Input,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  VStack,
} from "@chakra-ui/react";
import React, { FC } from "react";

interface IProps {
  section: any;
}

const NavbarSectionEditor: FC<IProps> = ({ section }) => {
  return (
    <Tabs>
      <TabList>
        <Tab>Text</Tab>
        <Tab>Colors</Tab>
        <Tab>Fonts</Tab>
        <Tab>Layouts</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
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
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default NavbarSectionEditor;
