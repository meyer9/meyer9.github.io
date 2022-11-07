import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";

const NoSsr = (props) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!loaded) {
    return null;
  }

  return <React.Fragment>{props.children}</React.Fragment>;
};

export default NoSsr;
