import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import NavbarSectionEditorColorsPanel from "components/editor/sections/navbar/panels/colors";
import NavbarSectionEditorTextPanel from "components/editor/sections/navbar/panels/text";
import React, { FC } from "react";
interface IProps {
  positionOfSection: number;
}

const NavbarSectionEditor: FC<IProps> = ({ positionOfSection }) => {
  return (
    <Tabs>
      <TabList>
        <Tab>Text</Tab>
        <Tab>Colors</Tab>
        <Tab>Fonts</Tab>
        <Tab>Layouts</Tab>
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
