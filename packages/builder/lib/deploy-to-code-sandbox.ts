import { getParameters } from "codesandbox/lib/api/define";
import createHTML from "create-html";

const deployToCodeSandbox = (bodyContent: string) => {
  const html = createHTML({
    title: "File generated using Writy",
    head:
      '<link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">',
    body: bodyContent,
  });

  const parameters = getParameters({
    files: {
      "index.html": {
        content: html,
        isBinary: false,
      },
    },
  });

  const codeSandboxURL = `https://codesandbox.io/api/v1/sandboxes/define?parameters=${parameters}`;

  return codeSandboxURL;
};

export default deployToCodeSandbox;
