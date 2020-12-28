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
import FeaturesSectionEditorColorsPanel from "components/editor/sections/features/panels/colors";
import FeaturesSectionEditorLayoutsPanel from "components/editor/sections/features/panels/layouts";
import FeaturesSectionEditorTextPanel from "components/editor/sections/features/panels/text";
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

const FeaturesSectionEditor: FC<IProps> = ({ positionOfSection }) => {
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
          <FeaturesSectionEditorTextPanel
            positionOfSection={positionOfSection}
          />
        </TabPanel>
        <TabPanel>
          <FeaturesSectionEditorColorsPanel
            positionOfSection={positionOfSection}
          />
        </TabPanel>
        <TabPanel>
          <FeaturesSectionEditorLayoutsPanel
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

export default FeaturesSectionEditor;
