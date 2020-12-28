import { NavbarLayouts } from "@writy/sections";
import React, { FC } from "react";
import { useSelector } from "react-redux";
import { getCurrentPageData, getSectionData } from "selectors/site";

interface IProps {
  positionOfSection: number;
}

const NavbarSectionView: FC<IProps> = ({ positionOfSection }) => {
  const currentPageId = useSelector(getCurrentPageData());
  const sectionData = useSelector(
    getSectionData(currentPageId, positionOfSection)
  );

  if (!sectionData) {
    return null;
  }

  const renderLayout = () => {
    switch (sectionData.meta.layout) {
      case "one":
        return (
          <NavbarLayouts.One
            theme={sectionData.theme}
            data={sectionData.data}
          />
        );

      case "two":
        return (
          <NavbarLayouts.Two
            theme={sectionData.theme}
            data={sectionData.data}
          />
        );

      default:
        break;
    }
  };

  return renderLayout();
};

export default NavbarSectionView;
