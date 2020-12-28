import { Box } from "@chakra-ui/react";
import Frame from "components/pages/index/content-area/preview-iframe/iframe";
import React, { FC } from "react";
import { useSelector } from "react-redux";
import { getCurrentPageData, getSiteData } from "selectors/site";

const PreviewIframe: FC = () => {
  const site = useSelector(getSiteData());
  const currentPageId = useSelector(getCurrentPageData());

  return (
    <>
      {site.pages.map((page: any, index: number) => {
        return (
          <Box
            key={index}
            display={index === currentPageId ? "block" : "none"}
            h="100%"
          >
            <Frame page={page} pageId={index} />
          </Box>
        );
      })}
    </>
  );
};

export default PreviewIframe;
