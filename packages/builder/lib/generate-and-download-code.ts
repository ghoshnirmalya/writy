import { html as beautifyHTML } from "js-beautify";
import fileDownload from "js-file-download";
import JSZip from "jszip";

const generateAndDownloadCode = (bodyContent: string) => {
  const zip = new JSZip();

  zip.file(
    "index.html",
    beautifyHTML(`<html>
      ${bodyContent}
    </html>
    `)
  );

  zip
    .generateAsync({ type: "blob" })
    .then((blob) => fileDownload(blob, "project.zip"))
    .catch((e) => console.log(e));
};

export default generateAndDownloadCode;
