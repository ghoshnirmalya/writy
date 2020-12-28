import { FooterLayouts } from "@writy/sections";
import React, { FC } from "react";
import { useSelector } from "react-redux";
import { getSectionData } from "selectors/site";

interface IProps {
  positionOfSection: number;
  pageId: number;
}

const FooterSectionView: FC<IProps> = ({ positionOfSection, pageId }) => {
  const { meta, data, theme } = useSelector(
    getSectionData(pageId, positionOfSection)
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
