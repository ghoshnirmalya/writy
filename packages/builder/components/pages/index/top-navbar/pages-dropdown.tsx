import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import React, { FC } from "react";
import { MdArrowDropDown } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentPageData, getSiteData } from "selectors/site";
import { setCurrentPageId } from "slices/site";

const PagesDropdown: FC = () => {
  const dispatch = useDispatch();
  const { pages } = useSelector(getSiteData());
  const currentPageId = useSelector(getCurrentPageData());

  return (
    <Box>
      <Menu isLazy>
        <MenuButton as={Button} rightIcon={<MdArrowDropDown />}>
          <Text
            w={24}
            overflow="hidden"
            textOverflow="ellipsis"
            whiteSpace="nowrap"
            textAlign="left"
          >
            {pages[currentPageId].meta.id}.html
          </Text>
        </MenuButton>
        <MenuList>
          {pages.map((page, index: number) => {
            return (
              <MenuItem
                key={index}
                onClick={() => dispatch(setCurrentPageId(index))}
              >
                {page.meta.id}.html
              </MenuItem>
            );
          })}
        </MenuList>
      </Menu>
    </Box>
  );
};

export default PagesDropdown;
