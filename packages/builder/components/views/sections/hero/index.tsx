import { HeroLayouts } from "@writy/sections";
import React, { FC } from "react";
import { useSelector } from "react-redux";
import { getCurrentPageData, getSectionData } from "selectors/site";

interface IProps {
  positionOfSection: number;
}

const HeroSectionView: FC<IProps> = ({ positionOfSection }) => {
  const currentPageId = useSelector(getCurrentPageData());
  const { theme, meta, data } = useSelector(
    getSectionData(currentPageId, positionOfSection)
  );

  const renderLayout = () => {
    switch (meta.layout) {
      case "one":
        return <HeroLayouts.One theme={theme} data={data} meta={meta} />;

      case "two":
        return <HeroLayouts.Two theme={theme} data={data} meta={meta} />;

      default:
        break;
    }
  };

  return renderLayout();
};

export default HeroSectionView;
