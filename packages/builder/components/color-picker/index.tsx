import {
  Box,
  HStack,
  Input,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
} from "@chakra-ui/react";
import React, { FC, useState } from "react";
import { SketchPicker } from "react-color";

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
      <SketchPicker
        color={color}
        onChangeComplete={(color: any) => {
          onChange(color.hex);
        }}
      />
    );
  };

  return (
    <HStack spacing={2}>
      <Popover placement="left-start">
        <PopoverTrigger>
          <Box
            as="button"
            bg={color}
            h={10}
            w={10}
            rounded="lg"
            onClick={() => setPickerVisibility(true)}
            borderWidth={1}
          />
        </PopoverTrigger>
        <PopoverContent>
          <PopoverBody>{pickerNode()}</PopoverBody>
        </PopoverContent>
      </Popover>
      <Input defaultValue={color} disabled />
    </HStack>
  );
};

export default ColorPicker;
