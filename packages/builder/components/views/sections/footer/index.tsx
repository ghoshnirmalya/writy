import { FooterLayouts } from "@writy/sections";
import React, { FC } from "react";

interface IProps {
  section: any;
}

const FooterSectionView: FC<IProps> = ({ section }) => {
  const renderLayout = () => {
    switch (section.meta.layout) {
      case "one":
        return <FooterLayouts.One theme={section.theme} data={section.data} />;

      default:
        break;
    }
  };

  return renderLayout();
};

export default FooterSectionView;
