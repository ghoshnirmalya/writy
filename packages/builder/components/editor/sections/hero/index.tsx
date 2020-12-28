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
import HeroSectionEditorColorsPanel from "components/editor/sections/hero/panels/colors";
import HeroSectionEditorLayoutsPanel from "components/editor/sections/hero/panels/layouts";
import HeroSectionEditorTextPanel from "components/editor/sections/hero/panels/text";
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

const HeroSectionEditor: FC<IProps> = ({ positionOfSection }) => {
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
          <HeroSectionEditorTextPanel positionOfSection={positionOfSection} />
        </TabPanel>
        <TabPanel>
          <HeroSectionEditorColorsPanel positionOfSection={positionOfSection} />
        </TabPanel>
        <TabPanel>
          <HeroSectionEditorLayoutsPanel
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

export default HeroSectionEditor;
