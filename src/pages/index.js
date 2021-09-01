/** @jsx jsx */

import * as React from "react";
import { css, jsx } from '@emotion/react';
import { themeColors } from '../utils/theme';
import 'bootstrap/dist/css/bootstrap.min.css';
import Landing from '../components/Landing';
import About from '../components/About';
import Takeaways from '../components/Takeaways';
import Goals from '../components/Goals';
import Slides from '../components/Slides';
import Banner from '../components/Banner';
import Main from '../components/Main';
import Footer from '../components/Footer';

const IndexPage = () => {
  return (
    <main>
      <style jsx global>{`
      body {
        margin: 0px;
        padding: 0px;
      }
    `}</style>
      <Landing />
      <About />
      <Takeaways />
      <Slides />
      <Goals />
      <Banner />
      <Main />
      <Footer />
      
    </main>
  )
}

export default IndexPage;
