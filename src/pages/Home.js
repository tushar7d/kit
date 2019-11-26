/* eslint-disable react/prop-types */
import React from "react";
import {Box, Stack, Text } from '../uds/primitive'
import {Button} from '../uds'

const BoxProps = {

  bg: "neutral__700",
  height: "400px",
  width: "80%" 
}


const Home = () => {
  return(


<Box {...BoxProps} >hello1
<Box {...BoxProps} bg="red" >hello2</Box>
</Box>

  ) ;
};

export default Home;
