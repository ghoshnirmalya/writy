import { FeaturesLayouts } from "@writy/sections";
import React, { FC } from "react";
import { useSelector } from "react-redux";
import { getSectionData } from "selectors/site";

interface IProps {
  positionOfSection: number;
  pageId: number;
}

const FeaturesSectionView: FC<IProps> = ({ positionOfSection, pageId }) => {
  const { meta, data, theme } = useSelector(
    getSectionData(pageId, positionOfSection)
  );

  const renderLayout = () => {
    switch (meta.layout) {
      case "one":
        return <FeaturesLayouts.One theme={theme} data={data} meta={meta} />;

      case "two":
        return <FeaturesLayouts.Two theme={theme} data={data} meta={meta} />;

      case "three":
        return <FeaturesLayouts.Three theme={theme} data={data} meta={meta} />;

      default:
        break;
    }
  };

  return renderLayout();
};

export default FeaturesSectionView;
