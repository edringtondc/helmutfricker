import React from "react";
import Iframe from "react-iframe";

const IframeContainer = ({url}) => {
  return (
    <Iframe url={url}
    className="video"
    position="relative"/>
  );
}

export default IframeContainer;