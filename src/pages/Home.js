/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import React from "react";

import Test from '../docs/test.mdx'
import {MDXProvider} from '@mdx-js/react'

const components = {
  h1: props => <h1 style={{color: 'tomato'}} {...props} />
}



const Home = () => {
  return(

<MDXProvider components={components}>
    <Test /> 
</MDXProvider>

  ) ;
};

export default Home;
