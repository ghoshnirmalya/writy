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

  const allImagesURLS = [
    "/images/section-placeholders/1.jpg",
    "/images/section-placeholders/2.jpg",
    "/images/section-placeholders/3.jpg",
    "/images/section-placeholders/4.jpg",
  ];

  const zip = new JSZip();
  const folder = zip.folder("images");

  allImagesURLS.forEach((url) => {
    const blobPromise = fetch(url).then((r) => {
      if (r.status === 200) {
        return r.blob();
      }

      return Promise.reject(new Error(r.statusText));
    });

    const name = url.substring(url.lastIndexOf("/"));

    console.log(name);

    folder.file(name, blobPromise);
  });

  zip.file("index.html", html);

  zip
    .generateAsync({ type: "blob" })
    .then((blob) => fileDownload(blob, "example.zip"))
    .catch((e) => console.log(e));
};

export default generateAndDownloadCode;
