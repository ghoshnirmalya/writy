import { HeroLayouts } from "@writy/sections";
import React, { FC } from "react";
import { useSelector } from "react-redux";
import { getSectionData } from "selectors/site";

interface IProps {
  positionOfSection: number;
  pageId: number;
}

const HeroSectionView: FC<IProps> = ({ positionOfSection, pageId }) => {
  const { meta, data, theme } = useSelector(
    getSectionData(pageId, positionOfSection)
  );

  const renderLayout = () => {
    switch (meta.layout) {
      case "one":
        return <HeroLayouts.One theme={theme} data={data} meta={meta} />;

      case "two":
        return <HeroLayouts.Two theme={theme} data={data} meta={meta} />;

      case "three":
        return <HeroLayouts.Three theme={theme} data={data} meta={meta} />;

      case "four":
        return <HeroLayouts.Four theme={theme} data={data} meta={meta} />;

      default:
        break;
    }
  };

  return renderLayout();
};

export default HeroSectionView;
