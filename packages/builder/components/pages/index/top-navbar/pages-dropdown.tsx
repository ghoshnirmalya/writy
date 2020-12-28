import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
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
    <Menu isLazy>
      <MenuButton as={Button} rightIcon={<MdArrowDropDown />}>
        {pages[currentPageId].meta.id}.html
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
  );
};

export default PagesDropdown;
