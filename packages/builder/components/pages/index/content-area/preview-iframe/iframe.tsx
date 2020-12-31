import FeaturesSectionView from "components/views/sections/features";
import FooterSectionView from "components/views/sections/footer";
import HeroSectionView from "components/views/sections/hero";
import NavbarSectionView from "components/views/sections/navbar";
import TextSectionView from "components/views/sections/text";
import React, { ChangeEvent, FC, useState } from "react";
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

      case "text":
        return (
          <TextSectionView
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
      // Prevent clicking of links inside the iframe
      const iframeContent: any = document.getElementById(
        `js-preview-iframe-page-${pageId}`
      );

      iframeContent.contentWindow.document.addEventListener(
        "click",
        (e: ChangeEvent<HTMLInputElement>) => {
          e.preventDefault();
          e.stopPropagation();

          return false;
        }
      );

      setInitialization(false);
    }, 2000);

    if (isInitializing) {
      return (
        <div
          style={{
            height: "calc(100vh - 50px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1rem",
            fontWeight: "bold",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          <p>Loading...</p>
        </div>
      );
    }

    return template?.sections.map((section: any, index: number) => {
      return (
        <section key={index} id={`section-${index}`}>
          {mapSectionToSectionType(section, index)}
        </section>
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
