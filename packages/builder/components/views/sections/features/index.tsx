import { FeaturesLayouts } from "@writy/sections";
import React, { FC } from "react";
import { useSelector } from "react-redux";
import { getCurrentPageData, getSectionData } from "selectors/site";

interface IProps {
  positionOfSection: number;
}

const FeaturesSectionView: FC<IProps> = ({ positionOfSection }) => {
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
          <FeaturesLayouts.One
            theme={sectionData.theme}
            data={sectionData.data}
            meta={sectionData.meta}
          />
        );

      case "two":
        return (
          <FeaturesLayouts.Two
            theme={sectionData.theme}
            data={sectionData.data}
            meta={sectionData.meta}
          />
        );

      default:
        break;
    }
  };

  return renderLayout();
};

export default FeaturesSectionView;
