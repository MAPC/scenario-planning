/** @jsx jsx */

import * as React from "react";
import { css, jsx } from '@emotion/react';
import { sectionStyle1, keyStyle, themeColors } from "../utils/theme";
import travel0 from "../assets/key3/travel0.jpg";
import travel1 from "../assets/key3/travel1.png";
import travel2 from "../assets/key3/travel2.jpg";
import travel3 from "../assets/key3/travel3.png";
import travel4 from "../assets/key3/travel4.png";
import travel5 from "../assets/key3/travel5.png";
import travel6 from "../assets/key3/travel6.png";
import travel7 from "../assets/key3/travel7.png";
import key3bg from "../assets/Image20@2x.png"
import Carousel from "react-multi-carousel";
import "../utils/WithScrollbar.css";
import key3Data from "../utils/key3Data";
import { elementType } from "prop-types";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

class Key3 extends React.Component {
  state = { additionalTransfrom: 0 };
  render() {
    const CustomSlider = ({ carouselState }) => {
      let value = 0;
      let carouselItemWidth = 0;
      if (this.Carousel) {
        carouselItemWidth = this.Carousel.state.itemWidth;
        const maxTranslateX = Math.round(
          // so that we don't over-slide
          carouselItemWidth *
            (this.Carousel.state.totalItems -
              this.Carousel.state.slidesToShow) +
            150
        );
        value = maxTranslateX / 100; // calculate the unit of transform for the slider
      }
      const { transform } = carouselState;
      return (
        <div className="custom-slider">
          <input
            type="range"
            value={Math.round(Math.abs(transform) / value)}
            defaultValue={0}
            max={
              (carouselItemWidth *
                (carouselState.totalItems - carouselState.slidesToShow) +
                (this.state.additionalTransfrom === 150 ? 0 : 150)) /
              value
            }
            onChange={e => {
              if (this.Carousel.isAnimationAllowed) {
                this.Carousel.isAnimationAllowed = false;
              }
              const nextTransform = e.target.value * value;
              const nextSlide = Math.round(nextTransform / carouselItemWidth);
              if (
                e.target.value == 0 &&
                this.state.additionalTransfrom === 150
              ) {
                this.Carousel.isAnimationAllowed = true;
                this.setState({ additionalTransfrom: 0 });
              }
              this.Carousel.setState({
                transform: -nextTransform, // padding 20px and 5 items.
                currentSlide: nextSlide
              });
            }}
            className="custom-slider__input"
          />
        </div>
      );
    };
    return (
        <div css={keyStyle}>
            <div css={css`
                background-image: url(${key3bg});
                height: 100vh;
                width: 100vw;
                overflow: hidden;
            `}>
            <div css={css`
                height: 100%;
                width: 140%;
                // padding-left: 6rem;
                display: flex;
                align-items: center;`}>
                <Carousel
                    ssr={false}
                    ref={el => (this.Carousel = el)}
                    partialVisbile={false}
                    customButtonGroup={<CustomSlider />}
                    itemClass="slider-image-item"
                    responsive={responsive}
                    containerClass="carousel-container-with-scrollbar"
                    additionalTransfrom={-this.state.additionalTransfrom}
                    beforeChange={nextSlide => {
                    if (nextSlide !== 0 && this.state.additionalTransfrom !== 0) {
                        this.setState({ additionalTransfrom: 0 });
                    }
                    if (nextSlide === 0 && this.state.additionalTransfrom === 0) {
                        this.setState({ additionalTransfrom: 0 });
                    }
                    }}
                >
                    {key3Data.map(elem => {
                        return (
                            <div class="image-container increase-size" 
                                style={{border: "5px solid", borderColor: themeColors.orange}}
                            >
                                {/* <div class="image-container-text">
                                    <h3>{elem.h3}</h3>
                                </div> */}
                                <img
                                    draggable={false}
                                    style={{ width: "100%", cursor: "pointer" }}
                                    src={elem.imgSrc}
                                />
                            </div>
                        );
                    })}
                    {/* blank final slide */}
                    <div class="image-container increase-size">
                    </div>
                </Carousel>
            </div>
            </div>
      </div>
    );
  }
}

export default Key3;
