import { Box } from "@chakra-ui/react";
import FeaturesSection from "components/views/sections/features";
import FooterSection from "components/views/sections/footer";
import HeroSection from "components/views/sections/hero";
import NavbarSection from "components/views/sections/navbar";
import React, { FC, useState } from "react";
import Frame, { FrameContextConsumer } from "react-frame-component";
import { useSelector } from "react-redux";
import { getTemplateData } from "selectors/template";

const PreviewIframe: FC = () => {
  const template = useSelector(getTemplateData());
  const [isInitializing, setInitialization] = useState(true);

  const mapSectionToSectionType = (section: any) => {
    switch (section.meta.type) {
      case "navbar":
        return <NavbarSection section={section} />;

      case "hero":
        return <HeroSection section={section} />;

      case "features":
        return <FeaturesSection section={section} />;

      case "footer":
        return <FooterSection section={section} />;

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
          {mapSectionToSectionType(section)}
        </Box>
      );
    });
  };

  return (
    <Frame
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
