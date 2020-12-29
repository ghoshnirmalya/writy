import {
  Box,
  HStack,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Portal,
  Text,
} from "@chakra-ui/react";
import React, { FC, useState } from "react";
import { TwitterPicker } from "react-color";

interface IProps {
  color: string;
  onChange: (color: string) => void;
}

const ColorPicker: FC<IProps> = ({ color, onChange }) => {
  const [isPickerVisible, setPickerVisibility] = useState(false);

  const pickerNode = () => {
    if (!isPickerVisible) {
      return false;
    }

    return (
      <TwitterPicker
        color={color}
        onChangeComplete={(color: any) => {
          onChange(color.hex);
        }}
      />
    );
  };

  return (
    <Popover placement="bottom-start">
      <PopoverTrigger>
        <HStack
          as="button"
          spacing={4}
          w="100%"
          borderWidth={1}
          p={1}
          rounded="lg"
          onClick={() => setPickerVisibility(true)}
        >
          <Box bg={color} h={8} w={8} rounded="lg" borderWidth={1} />
          <Text>{color}</Text>
        </HStack>
      </PopoverTrigger>
      <Portal>
        <PopoverContent bg="transparent" borderWidth={0}>
          <PopoverBody>{pickerNode()}</PopoverBody>
        </PopoverContent>
      </Portal>
    </Popover>
  );
};

export default ColorPicker;
