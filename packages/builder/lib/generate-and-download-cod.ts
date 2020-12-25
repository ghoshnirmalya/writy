import createHTML from "create-html";
import fileDownload from "js-file-download";

const generateAndDownloadCode = (bodyContent: string) => {
  const html = createHTML({
    title: "File generated using Writy",
    head:
      '<link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">',
    body: bodyContent,
  });

  fileDownload(html, "index.html");
};

export default generateAndDownloadCode;
