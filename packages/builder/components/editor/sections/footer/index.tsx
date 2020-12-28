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
import FooterSectionEditorColorsPanel from "components/editor/sections/footer/panels/colors";
import FooterSectionEditorTextPanel from "components/editor/sections/footer/panels/text";
import DeleteSectionButton from "components/pages/index/right-sidebar/delete-section-button";
import React, { FC } from "react";
import { MdColorLens, MdSettings, MdTextFields } from "react-icons/md";

interface IProps {
  positionOfSection: number;
}

const FooterSectionEditor: FC<IProps> = ({ positionOfSection }) => {
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
            <Icon as={MdSettings} />
            <Text>Settings</Text>
          </HStack>
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <FooterSectionEditorTextPanel positionOfSection={positionOfSection} />
        </TabPanel>
        <TabPanel>
          <FooterSectionEditorColorsPanel
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

export default FooterSectionEditor;
