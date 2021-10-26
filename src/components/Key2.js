/** @jsx jsx */

import * as React from "react";
import { css, jsx } from '@emotion/react';
import { sectionStyle1, keyStyle, themeColors } from "../utils/theme";
import key1bg from "../assets/Image22@2x.png"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      paritialVisibilityGutter: 60
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      paritialVisibilityGutter: 40
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      paritialVisibilityGutter: 40
    }
  };
  const colors = ["red", "green", "blue", "orange"];

  const Key2 = ({ deviceType }) => {
    return (
      <Carousel
        partialVisbile
        deviceType={deviceType}
        itemClass="image-item"
        responsive={responsive}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        showDots={true}
      >
        {colors.map(color => {
          return (
            <div style={{ background: color, width: 300, height: 300 }}>
              hello
            </div>
          );
        })}
      </Carousel>
    );
  };
  
  export default Key2;



