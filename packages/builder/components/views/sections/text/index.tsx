import { TextLayouts } from "@writy/sections";
import React, { FC } from "react";
import { useSelector } from "react-redux";
import { getSectionData } from "selectors/site";

interface IProps {
  positionOfSection: number;
  pageId: number;
}

const TextSectionView: FC<IProps> = ({ positionOfSection, pageId }) => {
  const { meta, theme } = useSelector(
    getSectionData(pageId, positionOfSection)
  );

  const renderLayout = () => {
    switch (meta.layout) {
      case "one":
        return <TextLayouts.One theme={theme} meta={meta} />;

      default:
        break;
    }
  };

  return renderLayout();
};

export default TextSectionView;
