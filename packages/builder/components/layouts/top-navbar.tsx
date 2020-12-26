import {
  Button,
  Flex,
  HStack,
  IconButton,
  Link,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { html as beautifyHTML } from "js-beautify";
import deployToCodeSandbox from "lib/deploy-to-code-sandbox";
import generateAndDownloadCode from "lib/generate-and-download-code";
import React, { FC } from "react";
import { AiOutlineCodeSandbox } from "react-icons/ai";
import {
  MdBugReport,
  MdFileDownload,
  MdLayersClear,
  MdWbIncandescent,
  MdWbSunny,
} from "react-icons/md";

const TopNavbar: FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("white", "black");

  const handleDeploymentToCodeSandbox = () => {
    const codeSandboxURL = deployToCodeSandbox(
      beautifyHTML(document.getElementById("js-page-content").innerHTML)
    );

    window.open(codeSandboxURL, "_blank");
  };

  const handleDownloadCode = () => {
    generateAndDownloadCode(
      beautifyHTML(document.getElementById("js-page-content").innerHTML)
    );
  };

  return (
    <Flex
      h="80px"
      borderBottomWidth={1}
      px={4}
      alignItems="center"
      bg={bgColor}
    >
      <Flex justifyContent="space-between" w="100%">
        <HStack spacing={4} align="center">
          <Link>Writy</Link>
        </HStack>
        <HStack spacing={4} align="center">
          <Button
            leftIcon={<MdLayersClear />}
            colorScheme="red"
            variant="outline"
          >
            Reset template
          </Button>
          <Button
            leftIcon={<AiOutlineCodeSandbox />}
            onClick={handleDeploymentToCodeSandbox}
          >
            Deploy to CodeSandbox
          </Button>
          <Button
            leftIcon={<MdFileDownload />}
            colorScheme="blue"
            onClick={handleDownloadCode}
          >
            Download HTML file
          </Button>
          <IconButton
            aria-label="Report an issue"
            icon={<MdBugReport size={24} />}
            as="a"
            href="https://github.com/ghoshnirmalya/writy/issues/new"
            target="_blank"
          />
          <IconButton
            aria-label="Report bug"
            icon={
              colorMode === "light" ? (
                <MdWbIncandescent size={24} />
              ) : (
                <MdWbSunny size={24} />
              )
            }
            onClick={toggleColorMode}
          />
        </HStack>
      </Flex>
    </Flex>
  );
};

export default TopNavbar;
