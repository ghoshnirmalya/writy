import { NavbarLayouts } from "@writy/sections";
import React, { FC } from "react";
import { useSelector } from "react-redux";
import { getSectionData } from "selectors/site";

interface IProps {
  positionOfSection: number;
  pageId: number;
}

const NavbarSectionView: FC<IProps> = ({ positionOfSection, pageId }) => {
  const { meta, data, theme } = useSelector(
    getSectionData(pageId, positionOfSection)
  );

  const renderLayout = () => {
    switch (meta.layout) {
      case "one":
        return <NavbarLayouts.One theme={theme} data={data} meta={meta} />;

      case "two":
        return <NavbarLayouts.Two theme={theme} data={data} meta={meta} />;

      default:
        break;
    }
  };

  return renderLayout();
};

export default NavbarSectionView;
