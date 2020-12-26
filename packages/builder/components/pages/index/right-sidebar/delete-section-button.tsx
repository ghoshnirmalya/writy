import { Button } from "@chakra-ui/react";
import React, { FC } from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { removeTemplateSection } from "slices/template";

interface IProps {
  positionOfSection: number;
}

const DeleteSectionButton: FC<IProps> = ({ positionOfSection }) => {
  const dispatch = useDispatch();

  const handleSectionDeletion = () => {
    dispatch(
      removeTemplateSection({
        positionOfSection,
      })
    );
  };

  return (
    <Button
      leftIcon={<MdDelete />}
      w="100%"
      onClick={handleSectionDeletion}
      colorScheme="red"
    >
      Remove section
    </Button>
  );
};

export default DeleteSectionButton;
