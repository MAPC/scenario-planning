/** @jsx jsx */

import * as React from "react";
import { css, jsx } from '@emotion/react';
import { sectionStyle1, keyStyle, themeColors } from "../utils/theme";
import demographics0 from "../assets/key1/demographics0.png";
import demographics1 from "../assets/key1/demographics1.jpg";
import demographics2 from "../assets/key1/demographics2.png";
import demographics3 from "../assets/key1/demographics3.png";
import demographics4 from "../assets/key1/demographics4.png";
import demographics5 from "../assets/key1/demographics5.png";
import demographics6 from "../assets/key1/demographics6.png";
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



