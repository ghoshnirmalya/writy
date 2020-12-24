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
import React, { ChangeEvent, FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSectionData } from "selectors/template";
import { updateTemplateSectionData } from "slices/template";

interface IProps {
  positionOfSection: number;
}

const NavbarSectionEditor: FC<IProps> = ({ positionOfSection }) => {
  const { data } = useSelector(getSectionData(positionOfSection));
  const dispatch = useDispatch();

  const handleChange = (
    positionOfItem: number,
    itemType: string,
    value: string
  ) => {
    dispatch(
      updateTemplateSectionData({
        positionOfSection,
        itemType: "links",
        itemPosition: positionOfItem,
        key: itemType,
        value,
      })
    );
  };

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
            {data.links.map((link: any, index: number) => {
              return (
                <HStack spacing={4} key={index}>
                  <FormControl>
                    <FormLabel>Label</FormLabel>
                    <Input
                      value={link.label}
                      onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        handleChange(index, "label", e.currentTarget.value)
                      }
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>URL</FormLabel>
                    <Input
                      value={link.link}
                      onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        handleChange(index, "link", e.currentTarget.value)
                      }
                    />
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
