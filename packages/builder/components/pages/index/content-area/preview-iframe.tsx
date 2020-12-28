import { Box } from "@chakra-ui/react";
import FeaturesSectionView from "components/views/sections/features";
import FooterSectionView from "components/views/sections/footer";
import HeroSectionView from "components/views/sections/hero";
import NavbarSectionView from "components/views/sections/navbar";
import React, { FC, useState } from "react";
import Frame, { FrameContextConsumer } from "react-frame-component";
import { useSelector } from "react-redux";
import { getCurrentPageData, getSiteData } from "selectors/site";

const PreviewIframe: FC = () => {
  const currentPageId = useSelector(getCurrentPageData());
  const [isInitializing, setInitialization] = useState(true);
  const site = useSelector(getSiteData());

  console.log(site);

  const mapSectionToSectionType = (section: any, positionOfSection: number) => {
    switch (section.meta.type) {
      case "navbar":
        return <NavbarSectionView positionOfSection={positionOfSection} />;

      case "hero":
        return <HeroSectionView positionOfSection={positionOfSection} />;

      case "features":
        return <FeaturesSectionView positionOfSection={positionOfSection} />;

      case "footer":
        return <FooterSectionView positionOfSection={positionOfSection} />;

      default:
        break;
    }
  };

  const viewNode = (template: any) => {
    // Wait for TailwindCSS to be downloaded in the background inside the iFrame
    setTimeout(() => {
      setInitialization(false);
    }, 2000);

    if (isInitializing) {
      return false;
    }

    return template?.sections.map((section: any, index: number) => {
      return (
        <Box as="section" key={index} id={`section-${index}`}>
          {mapSectionToSectionType(section, index)}
        </Box>
      );
    });
  };

  const iframesNode = () => {
    return site.pages.map((page: any, index: number) => {
      return (
        <Box
          key={index}
          display={index === currentPageId ? "block" : "none"}
          h="100%"
        >
          <Frame
            id={`js-preview-iframe-page-${index}`}
            style={{
              width: "100%",
              height: "100%",
            }}
            initialContent='
              <!DOCTYPE html>
                <html>
                  <head>
                    <link
                      href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
                      rel="stylesheet"
                    />
                    <style>
                      a {
                        pointer-events: none;
                        transition: none;
                      }
                    </style>
                  </head>
                  <body>
                    <div></div>
                  </body>
                </html>
              '
          >
            <FrameContextConsumer>
              {() => viewNode(page.template)}
            </FrameContextConsumer>
          </Frame>
        </Box>
      );
    });
  };

  return <>{iframesNode()}</>;
};

export default PreviewIframe;
