/* eslint-disable react/prop-types */
import React from "react";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import { Stack, Box } from "../../uds/primitive";
import theme from './theme'

const LiveEdit = props => (
  <LiveProvider code={props.code} scope={props.scope} theme={theme}>
    <Box width={"85%"} height="80%">
      <Stack width="100%" height="100%" horizontal left top>
        <Box width="50%" height="100%"  p="2">
          <LiveEditor />
        </Box>
        <Box width="50%" height="100%"  p="2">
          <LivePreview />
        </Box>
      </Stack>
    </Box>

    <LiveError />
  </LiveProvider>
);

export default LiveEdit;
