/** @jsx jsx */

import * as React from "react";
import { css, jsx } from '@emotion/react';
import { sectionStyle1, keyStyle, themeColors } from "../utils/theme";
import topImage from "../assets/Mask-Group-2@2x.png";
import bottomImage from "../assets/Mask-Group-3@2x.png";
import triangleRight1 from "../assets/triangle-right1.png";
import triangleRight2 from "../assets/triangle-right2.png";
import key1bg from "../assets/Image22@2x.png"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";

const Key1 = () => {

    return(
        <div css={keyStyle}>
            <div css={css`background-image: url(${key1bg});
            // height: 100%;
            width: 100%;
            display: flex;
            align-items: center;`}>

        <Carousel
        interval={null}
        bsPrefix="carousel">
            <Carousel.Item bsPrefix="carousel-item">
                <div css={css`
                // height: 100%;
                width: 100%;
                background-color: ${themeColors.leaf};
                color: ${themeColors.white};
                padding: 19%;
                `}>
                    <h1>Regional Demographics and the Economy</h1>
                    <p>Changes in our population will influence housing demand, tax revenue, and transportation needs. In this section we examine who might live in the region by 2050, what kinds of homes might they want, and what services we need to plan for. </p>
                </div>
                <Carousel.Caption bsPrefix="carousel-caption">
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Carousel.Caption>
                    <h3>Last Slide</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </div>
        </div>
    )
}

export default Key1;