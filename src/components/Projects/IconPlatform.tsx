import React from "react";
import { IconBaseProps } from "react-icons";

import { Platform } from "../../interfaces";
import { FaGlobe, FaAndroid, FaAppStoreIos, FaDesktop } from "react-icons/fa";

interface IconPlatformProps {
  platform: Platform;
  settings: IconBaseProps;
}

const IconPlatform: React.FunctionComponent<IconPlatformProps> = ({
  platform,
  settings,
}) => {
  switch (String(platform)) {
    case Platform.WEB:
      return <FaGlobe {...settings} />;
    case Platform.DESKTOP:
      return <FaDesktop {...settings} />;
    case Platform.ANDROID:
      return <FaAndroid {...settings} />;
    case Platform.IOS:
      return <FaAppStoreIos {...settings} />;

    default:
      return <FaGlobe {...settings} />;
  }
};

export default IconPlatform;
