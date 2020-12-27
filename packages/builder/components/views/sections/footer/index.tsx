import { FooterLayouts } from "@writy/sections";
import React, { FC } from "react";
import { useSelector } from "react-redux";
import { getCurrentPageData, getSectionData } from "selectors/site";

interface IProps {
  positionOfSection: number;
}

const FooterSectionView: FC<IProps> = ({ positionOfSection }) => {
  const currentPageId = useSelector(getCurrentPageData());
  const { theme, meta, data } = useSelector(
    getSectionData(currentPageId, positionOfSection)
  );

  const renderLayout = () => {
    switch (meta.layout) {
      case "one":
        return <FooterLayouts.One theme={theme} data={data} />;

      default:
        break;
    }
  };

  return renderLayout();
};

export default FooterSectionView;
