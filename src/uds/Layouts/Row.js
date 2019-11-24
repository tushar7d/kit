/* eslint-disable react/prop-types */
import React from "react";
import { Stack } from "../primitive";

const Row = props => {
  return (
    <Stack horizontal mx="4" width="100%" maxWidth="1440px" {...props}>
      {props.children}
    </Stack>
  );
};
export default Row;
