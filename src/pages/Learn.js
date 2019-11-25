/* eslint-disable react/prop-types */
import React from "react";
import {Stack, Box, Text} from '../uds/primitive'
import LiveEdit from './components/LiveEdit'

const scope = {Stack,Box,Text}
let code = 
`<Box width="200px" height="200px" bg="neutral__500" ></Box>
`

const Learn = () =>(

    <Stack horizontal left top width="100vw" height="100vh" bg="neutral__100">
        <Stack vertical top left width="15%" bg="white" height="100vh" >
            

        </Stack>
        <LiveEdit code={code}  scope={scope}/>


    </Stack>

)

export default Learn
