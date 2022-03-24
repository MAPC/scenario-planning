/** @jsx jsx */

import * as React from "react";
import { jsx } from '@emotion/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Landing from '../components/Landing';
import About from '../components/About';
import Takeaways from '../components/Takeaways';
import Examined from '../components/Examined';
import FooterComponent from '../components/Footer';

const IndexPage = () => {
  return (
    <main>
      <style jsx global>{`
      body {
        margin: 0px;
        overflow-x: hidden;
        padding: 0px;
      }
    `}</style>
      <Landing />
      <About />
      <Takeaways />
      <Examined />
      <FooterComponent />
    </main>
  )
}

export default IndexPage;
