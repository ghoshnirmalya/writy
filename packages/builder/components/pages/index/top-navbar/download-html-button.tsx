import { Button } from "@chakra-ui/react";
import { html as beautifyHTML } from "js-beautify";
import fileDownload from "js-file-download";
import JSZip from "jszip";
import React, { FC } from "react";
import { MdFileDownload } from "react-icons/md";
import { useSelector } from "react-redux";
import { getSiteData } from "selectors/site";

const DownloadHTMLButton: FC = () => {
  const { pages } = useSelector(getSiteData());
  const zip = new JSZip();

  const handleDownloadCode = () => {
    pages.map((page: any, index: number) => {
      const iframeContent: any = document.getElementById(
        `js-preview-iframe-page-${index}`
      );

      zip.file(
        `${page.meta.id}.html`,
        beautifyHTML(`<html>
            ${iframeContent.contentWindow.document.documentElement.innerHTML}
          </html>
        `)
      );
    });

    zip
      .generateAsync({ type: "blob" })
      .then((blob) => fileDownload(blob, "project.zip"))
      .catch((e) => console.log(e));
  };

  return (
    <Button
      size="sm"
      leftIcon={<MdFileDownload />}
      colorScheme="blue"
      onClick={handleDownloadCode}
    >
      Download HTML files
    </Button>
  );
};

export default DownloadHTMLButton;
