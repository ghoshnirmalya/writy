import {
  HStack,
  Icon,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import NavbarSectionEditorColorsPanel from "components/editor/sections/navbar/panels/colors";
import NavbarSectionEditorTextPanel from "components/editor/sections/navbar/panels/text";
import React, { FC } from "react";
import {
  MdColorLens,
  MdDvr,
  MdFontDownload,
  MdTextFields,
} from "react-icons/md";
interface IProps {
  positionOfSection: number;
}

const NavbarSectionEditor: FC<IProps> = ({ positionOfSection }) => {
  return (
    <Tabs>
      <TabList>
        <Tab>
          <HStack spacing={1}>
            <Icon as={MdTextFields} />
            <Text>Text</Text>
          </HStack>
        </Tab>
        <Tab>
          <HStack spacing={1}>
            <Icon as={MdColorLens} />
            <Text>Colors</Text>
          </HStack>
        </Tab>
        <Tab>
          <HStack spacing={1}>
            <Icon as={MdFontDownload} />
            <Text>Fonts</Text>
          </HStack>
        </Tab>
        <Tab>
          <HStack spacing={1}>
            <Icon as={MdDvr} />
            <Text>Layouts</Text>
          </HStack>
        </Tab>
      </TabList>
      <TabPanels minH="400px">
        <TabPanel>
          <NavbarSectionEditorTextPanel positionOfSection={positionOfSection} />
        </TabPanel>
        <TabPanel>
          <NavbarSectionEditorColorsPanel
            positionOfSection={positionOfSection}
          />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default NavbarSectionEditor;
