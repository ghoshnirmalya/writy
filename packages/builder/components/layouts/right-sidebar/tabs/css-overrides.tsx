import { FormControl, FormLabel, useColorMode } from "@chakra-ui/react";
import { css as beautifyCSS } from "js-beautify";
import React, { FC } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/theme-textmate";
import "ace-builds/src-noconflict/theme-twilight";
import "ace-builds/src-noconflict/ext-language_tools";

const RightSidebarCSSOverridesTab: FC = () => {
  const { colorMode } = useColorMode();

  return (
    <FormControl py={2} px={4} borderWidth={1}>
      <FormLabel fontWeight="bold">Custom CSS code</FormLabel>
      <AceEditor
        placeholder="Placeholder Text"
        mode="css"
        theme={colorMode === "light" ? "textmate" : "twilight"}
        name="css"
        fontSize={14}
        showPrintMargin={false}
        showGutter={false}
        highlightActiveLine={true}
        value={beautifyCSS(`body {background: '#fff';}`)}
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

export default RightSidebarCSSOverridesTab;
