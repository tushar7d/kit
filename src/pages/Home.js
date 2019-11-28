/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import React from "react";

import Test from '../docs/test.mdx'
import {MDXProvider} from '@mdx-js/react'
import CodeBlock from '../docs/CodeBlock'
import {Box} from '../uds'


const components = {
  code: CodeBlock,
}


const Home = () => {
  return(

<MDXProvider components={components}  >
    <Test /> 
</MDXProvider>

  ) ;
};

export default Home;
