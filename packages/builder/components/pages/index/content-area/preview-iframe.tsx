import { Box } from "@chakra-ui/react";
import FeaturesSectionView from "components/views/sections/features";
import FooterSectionView from "components/views/sections/footer";
import HeroSectionView from "components/views/sections/hero";
import NavbarSectionView from "components/views/sections/navbar";
import React, { FC, useState } from "react";
import Frame, { FrameContextConsumer } from "react-frame-component";
import { useSelector } from "react-redux";
import { getTemplateData } from "selectors/template";

const PreviewIframe: FC = () => {
  const template = useSelector(getTemplateData());
  const [isInitializing, setInitialization] = useState(true);

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

  const viewNode = () => {
    // Wait for TailwindCSS to be downloaded in the background inside the iFrame
    setTimeout(() => {
      setInitialization(false);
    }, 2000);

    if (isInitializing) {
      return false;
    }

    return template.sections.map((section: any, index: number) => {
      return (
        <Box as="section" key={index}>
          {mapSectionToSectionType(section, index)}
        </Box>
      );
    });
  };

  return (
    <Frame
      id="js-preview-iframe"
      style={{
        width: "100%",
        height: "100%",
        pointerEvents: "none",
      }}
      initialContent='
        <!DOCTYPE html>
          <html>
            <head>
              <link
                href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
                rel="stylesheet"
              />
            </head>
            <body>
              <div></div>
            </body>
          </html>
        '
    >
      <FrameContextConsumer>{() => viewNode()}</FrameContextConsumer>
    </Frame>
  );
};

export default PreviewIframe;
