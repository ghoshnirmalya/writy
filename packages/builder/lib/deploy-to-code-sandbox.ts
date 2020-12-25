import { getParameters } from "codesandbox/lib/api/define";

const deployToCodeSandbox = (indexHTMLContent: string) => {
  const parameters = getParameters({
    files: {
      "index.html": {
        content: `
          <!doctype html>
            <html>
              <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
              </head>
              <body>
                <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">
                ${indexHTMLContent}
            </body>
          </html>
        `,
        isBinary: false,
      },
      // "package.json": {
      //   content: { dependencies: {} },
      // },
    },
  });

  const codeSandboxURL = `https://codesandbox.io/api/v1/sandboxes/define?parameters=${parameters}`;

  return codeSandboxURL;
};

export default deployToCodeSandbox;
