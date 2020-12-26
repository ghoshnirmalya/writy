import createHTML from "create-html";
import fileDownload from "js-file-download";
import JSZip from "jszip";

const generateAndDownloadCode = (bodyContent: string) => {
  const html = createHTML({
    title: "File generated using Writy",
    head:
      '<link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">',
    body: bodyContent,
  });

  const zip = new JSZip();

  zip.file("index.html", html);

  zip
    .generateAsync({ type: "blob" })
    .then((blob) => fileDownload(blob, "project.zip"))
    .catch((e) => console.log(e));
};

export default generateAndDownloadCode;
