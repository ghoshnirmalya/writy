import { NavbarLayouts } from "@writy/sections";
import React, { FC } from "react";

interface IProps {
  section: any;
}

const NavbarSectionView: FC<IProps> = ({ section }) => {
  const renderLayout = () => {
    switch (section.meta.layout) {
      case "one":
        return <NavbarLayouts.One theme={section.theme} data={section.data} />;

      case "two":
        return <NavbarLayouts.Two theme={section.theme} data={section.data} />;

      default:
        break;
    }
  };

  return renderLayout();
};

export default NavbarSectionView;
