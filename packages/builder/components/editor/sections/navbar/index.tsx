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
import NavbarSectionEditorLayoutsPanel from "components/editor/sections/navbar/panels/layouts";
import NavbarSectionEditorTextPanel from "components/editor/sections/navbar/panels/text";
import DeleteSectionButton from "components/pages/index/right-sidebar/delete-section-button";
import React, { FC } from "react";
import {
  MdColorLens,
  MdLandscape,
  MdSettings,
  MdTextFields,
} from "react-icons/md";

interface IProps {
  positionOfSection: number;
}

const NavbarSectionEditor: FC<IProps> = ({ positionOfSection }) => {
  return (
    <Tabs isLazy>
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
            <Icon as={MdLandscape} />
            <Text>Layouts</Text>
          </HStack>
        </Tab>
        <Tab>
          <HStack spacing={1}>
            <Icon as={MdSettings} />
            <Text>Settings</Text>
          </HStack>
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <NavbarSectionEditorTextPanel positionOfSection={positionOfSection} />
        </TabPanel>
        <TabPanel>
          <NavbarSectionEditorColorsPanel
            positionOfSection={positionOfSection}
          />
        </TabPanel>
        <TabPanel>
          <NavbarSectionEditorLayoutsPanel
            positionOfSection={positionOfSection}
          />
        </TabPanel>
        <TabPanel>
          <DeleteSectionButton positionOfSection={positionOfSection} />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default NavbarSectionEditor;
