import { Box } from "@chakra-ui/react";
import FeaturesSectionView from "components/views/sections/features";
import FooterSectionView from "components/views/sections/footer";
import HeroSectionView from "components/views/sections/hero";
import NavbarSectionView from "components/views/sections/navbar";
import React, { FC, useState } from "react";
import Frame, { FrameContextConsumer } from "react-frame-component";

interface IProps {
  pageId: number;
  page: any;
}

const Iframe: FC<IProps> = ({ pageId, page }) => {
  const [isInitializing, setInitialization] = useState(true);

  const mapSectionToSectionType = (section: any, positionOfSection: number) => {
    switch (section.meta.type) {
      case "navbar":
        return (
          <NavbarSectionView
            positionOfSection={positionOfSection}
            pageId={pageId}
          />
        );

      case "hero":
        return (
          <HeroSectionView
            positionOfSection={positionOfSection}
            pageId={pageId}
          />
        );

      case "features":
        return (
          <FeaturesSectionView
            positionOfSection={positionOfSection}
            pageId={pageId}
          />
        );

      case "footer":
        return (
          <FooterSectionView
            positionOfSection={positionOfSection}
            pageId={pageId}
          />
        );

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

  return (
    <Frame
      id={`js-preview-iframe-page-${pageId}`}
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
  );
};

export default Iframe;
