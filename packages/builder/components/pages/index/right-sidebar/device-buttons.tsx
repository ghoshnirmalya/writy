import { ButtonGroup, IconButton } from "@chakra-ui/react";
import React, { FC } from "react";
import { MdDesktopMac, MdPhoneIphone, MdTabletMac } from "react-icons/md";
import { useDispatch } from "react-redux";
import { updatePreviewDeviceType } from "slices/site";

const DeviceButtons: FC = () => {
  const dispatch = useDispatch();
  const devices = [
    {
      key: "mobile",
      icon: <MdPhoneIphone />,
      label: "Mobile",
    },
    {
      key: "tablet",
      icon: <MdTabletMac />,
      label: "Tablet",
    },
    {
      key: "desktop",
      icon: <MdDesktopMac />,
      label: "Desktop",
    },
  ];

  return (
    <ButtonGroup>
      {devices.map((device, index) => {
        return (
          <IconButton
            size="sm"
            key={index}
            aria-label={device.label}
            icon={device.icon}
            onClick={() => dispatch(updatePreviewDeviceType(device.key))}
          />
        );
      })}
    </ButtonGroup>
  );
};

export default DeviceButtons;
