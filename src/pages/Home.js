/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import React from "react";

import Test from '../docs/test.mdx'
import {MDXProvider} from '@mdx-js/react'





const Home = () => {
  return(

<MDXProvider>
    <Test /> 
</MDXProvider>

  ) ;
};

export default Home;
