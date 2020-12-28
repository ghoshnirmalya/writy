import { Button } from "@chakra-ui/react";
import React, { FC } from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentPageData } from "selectors/site";
import { removeTemplateSection } from "slices/site";

interface IProps {
  positionOfSection: number;
}

const DeleteSectionButton: FC<IProps> = ({ positionOfSection }) => {
  const dispatch = useDispatch();
  const currentPageId = useSelector(getCurrentPageData());

  const handleSectionDeletion = () => {
    dispatch(
      removeTemplateSection({
        currentPageId,
        positionOfSection,
      })
    );
  };

  return (
    <Button
      size="sm"
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
