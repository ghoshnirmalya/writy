import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useColorModeValue,
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
  const bgColor = useColorModeValue("brand.100", "brand.900");

  return (
    <Box>
      <Menu isLazy>
        <MenuButton size="sm" as={Button} rightIcon={<MdArrowDropDown />}>
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
        <MenuList bgColor={bgColor}>
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
