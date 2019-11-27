/* eslint-disable react/prop-types */
import React from "react";
import { Stack } from "../primitive";

const Column = props => {
  return (
    <Stack vertical center mx="4" width="100%" left top {...props}>
      {props.children}
    </Stack>
  );
};
export default Column;
