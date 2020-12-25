import { HeroLayouts } from "@writy/sections";
import React, { FC } from "react";

interface IProps {
  section: any;
}

const HeroSectionView: FC<IProps> = ({ section }) => {
  const renderLayout = () => {
    switch (section.meta.layout) {
      case "one":
        return (
          <HeroLayouts.One
            theme={section.theme}
            data={section.data}
            meta={section.meta}
          />
        );

      default:
        break;
    }
  };

  return renderLayout();
};

export default HeroSectionView;
