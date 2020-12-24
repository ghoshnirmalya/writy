import { FormControl, FormLabel, useColorMode } from "@chakra-ui/react";
import { html as beautifyHTML } from "js-beautify";
import React, { FC } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/theme-textmate";
import "ace-builds/src-noconflict/theme-twilight";
import "ace-builds/src-noconflict/ext-language_tools";

const RightSidebarHTMLTab: FC = () => {
  const { colorMode } = useColorMode();

  return (
    <FormControl py={2} px={4} borderWidth={1}>
      <FormLabel fontWeight="bold">Full HTML code</FormLabel>
      <AceEditor
        placeholder="Placeholder Text"
        mode="html"
        theme={colorMode === "light" ? "textmate" : "twilight"}
        name="html"
        fontSize={14}
        showPrintMargin={false}
        showGutter={false}
        highlightActiveLine={true}
        value={beautifyHTML(
          document.getElementById("js-page-content").innerHTML
        )}
        wrapEnabled
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
          showLineNumbers: true,
          tabSize: 2,
        }}
        width="100%"
        style={{
          borderWidth: 1,
        }}
      />
    </FormControl>
  );
};

export default RightSidebarHTMLTab;
