/** @jsx jsx */

import React, { useState } from "react";
import { css, jsx } from '@emotion/react';
import { sectionStyle1, keyStyle, themeColors, fonts } from "../utils/theme";
import key3bg from "../assets/Image20@2x.png"
import Carousel from "react-multi-carousel";
import "../utils/WithScrollbar.css";
import key3Data from "../utils/key3Data";
// import { ReactComponent as triangleRight } from "../assets/triangle-right.svg";
import triangleRight from "../assets/triangle-right.svg";
import triangleRightOrange from "../assets/triangle-right-orange@2x.png";
import travelDeckBg from "../assets/deck-backgrounds/mapc-skyline.jpeg";
import triangleQuad from "../assets/Group-117@2x.png";
import trafficGraphic from "../assets/Group-102@2x.png";

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

class Key4 extends React.Component {
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
        <div css={css`background-image: url(${travelDeckBg}); background-position: center; background-size: cover;`}>
            <div css={css`
                height: auto;
                width: auto;
                margin: 0 14rem 6rem;
                h3 {
                  font-weight: 300;
                  margin: 0 0 24px;
                }
                p {
                  font-family: ${fonts.swiftNeueLtPro};
                  font-size: 16px;
                }
            `}>
                <h3>The Future of Travel</h3>
                <p>Transportation is a fundamentally regional issue – people travel all throughout Metro Boston, and we all share a network of roadways, transit systems, bike routes, and other infrastructure. It is already clear that the transportation system of today is incapable of meeting the needs of tomorrow. Congestion is among the worst in the nation; commuters of color experience disproportionately long commutes when compared to White commuters; transportation produces a third of our GHG emissions; deferred maintenance undermines safety and reliability; and subways and roadways are already disrupted during major storms.</p>
                <p>Meeting the transportation challenges of the future will require both regional coordination and local action. It will also require a sense of how the region’s travel needs, vehicles, and transportation services may change over the coming decades.  As with other uncertainties, some aspects of future travel are relatively certain: most trips will start and end in places that are already built up; most travelers will value speed and convenience over other considerations; and highway expansion just induces more demand and congestion.</p>
                <p>Yet many other aspects of travel were highly uncertain before the COVID-19 pandemic and are even more so today. Transportation technologies and services have evolved rapidly and will continue to do so over the next three decades. The proliferation of ride-hailing, delivery services, e-commerce, e-bikes, and micromobility demonstrate how quickly new modes and services can be adopted, and how disruptive they may be to existing transport services, roadways, and communities. Just as the impact of new technologies and services would have been hard to predict in 1990, the upcoming impact of autonomous vehicles, mobility as a service, and delivery services are hard to foresee.</p>
                <p>Similarly, the COVID 19 pandemic has demonstrated that disruptions can also drastically reduce the need for travel. Remote work, remote school, telemedicine, and virtual parties have all allowed people to do many things without leaving their home. Certainly some—though not all—of these trends will continue after the pandemic, especially as communication technology improves and virtual reality closes the gap between virtual and in-person interaction.</p>
            </div>
            <div css={css`
                height: 100vh;
                width: 100vw;
                overflow: hidden;
            `}>
                <div css={css`
                    height: 100%;
                    width: 140%;
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
                      {/* Slide 1 */}
                      <div 
                        css={css`
                          border: 5px solid ${themeColors.orange};
                          height: 90vh;
                          padding: 4rem 6rem;
                          background: ${themeColors.orange};
                          color: white;
                          font-family: ${fonts.calibre};
                          font-weight: 200;
                          font-size: 16px;
                          line-height: 18px;
                          h1 { 
                            font-size: 44px; 
                            padding-bottom: 20px;
                          }
                          h2 {
                            font-size: 24px;
                            line-height: 28px;
                            padding-bottom: 20px;
                          }
                          .triangle-right {
                            padding: 1%;
                          }
                        `}
                      >
                        <div>
                          <h1>The Future of Travel</h1>
                          <h2>How We Move.<br/>How Often We Move.</h2>
                          <img src={triangleRight} className="triangle-right" alt="Triangle" />
                          <img src={triangleRight} className="triangle-right" alt="Triangle" />
                          <img src={triangleRight} className="triangle-right" alt="Triangle" />
                          <img src={triangleRight} className="triangle-right" alt="Triangle" />
                        </div>
                      </div>
                      {/* Slide 4 */}
                      <div 
                        css={css`
                        border: 5px solid ${themeColors.orange};
                        height: 90vh;
                        padding: 4rem 6rem;
                        background: white;
                        color: black;
                        font-family: ${fonts.calibre};
                        font-weight: 200;
                        font-size: 16px;
                        line-height: 18px;
                        h1 { 
                          font-size: 36px; 
                          line-height: 4rem;
                          color: ${themeColors.orange};
                        }
                        h2 {
                          font-size: 24px;
                          line-height: 28px;
                          padding-bottom: 20px;
                        }
                        h3 {
                          font-size: 20px;
                          position: absolute;
                          right: 0;
                          top: 0;
                          padding-right: 6rem;
                          padding-top: 3rem; 
                          color: ${themeColors.orange};
                        }
                        ul {
                          width: 50%;
                        }
                        li {
                          list-style-image: url(${triangleRightOrange});
                          padding: 8px;
                          margin-left: 20px;
                        }
                        img {
                          position: absolute;
                          right: 1rem;
                          top: 0;
                          margin-top: 10rem;
                        }
                        `}
                      >
                        <div>
                          <h3>The Future of Travel × MetroCommon 2050</h3>
                          <h1>What We Know:</h1>
                          <h2>Travel’s Impact on the Region</h2>
                          <ul>
                            <li>The maintenance backlog, structural deficit, and contractual constraints at the MBTA make it difficult and time-consuming to invest in system expansions, increased service frequency, and innovative service delivery.</li>
                          </ul>
                          <img src={trafficGraphic} alt="Car and Street" />
                        </div>
                      </div>
                      {/* Slide 2 */}
                      <div
                        css={css`
                        border: 5px solid ${themeColors.orange};
                        height: 90vh;
                        padding: 4rem 6rem;
                        background: white;
                        color: black;
                        font-family: ${fonts.calibre};
                        font-weight: 200;
                        font-size: 16px;
                        line-height: 18px;
                        h1 { 
                          font-size: 36px; 
                          line-height: 4rem;
                          color: ${themeColors.orange};
                        }
                        h2 {
                          font-size: 24px;
                          line-height: 28px;
                          padding-bottom: 20px;
                        }
                        h3 {
                          font-size: 20px;
                          position: absolute;
                          right: 0;
                          top: 0;
                          padding-right: 6rem;
                          padding-top: 3rem; 
                          color: ${themeColors.orange};
                        }
                        li {
                          list-style-image: url(${triangleRightOrange});
                          padding: 8px;
                          margin-left: 20px;
                        }
                      `}
                      >
                        <div>
                          <h3>The Future of Travel × MetroCommon 2050</h3>
                          <h1>What We Know:</h1>
                          <h2>Travel’s Impact on the Region</h2>
                          <ul>
                            <li>Auto-oriented development and abundant low-cost parking contributes to auto ownership and lower usage of transit and other modes, even when they are available and convenient.</li>
                            <li>Rapid growth of TNCs, an explosion of micromobility diversity, advances in autonomous vehicles, and the growth of e-commerce demonstrate the rapidity with which the transportation landscape might change in coming decades.</li>
                            <li>Imperatives to create a climate resilient and low-emission transportation system will spur investment into new technologies and infrastructure, as well as dramatic changes in the types of vehicles available to consumers and travelers.</li>
                            <li>The COVID-19 pandemic has demonstrated the viability and limitations of remote options for some kinds of work, schooling, events, and communications. The disparity in the racial makeup of workers in occupations with high and low potential for remote work can exacerbate inequities in time spent commuting.​</li>
                          </ul>
                        </div>
                      </div>
                      {/* Slide 3 */}
                      <div 
                        css={css`
                        border: 5px solid ${themeColors.orange};
                        height: 90vh;
                        padding: 4rem 6rem;
                        background: white;
                        color: black;
                        font-family: ${fonts.calibre};
                        font-weight: 200;
                        font-size: 16px;
                        line-height: 18px;
                        h1 { 
                          font-size: 36px; 
                          line-height: 4rem;
                          color: ${themeColors.orange};
                        }
                        h2 {
                          font-size: 24px;
                          line-height: 28px;
                          padding-bottom: 20px;
                        }
                        h3 {
                          font-size: 20px;
                          position: absolute;
                          right: 0;
                          top: 0;
                          padding-right: 6rem;
                          padding-top: 3rem; 
                          color: ${themeColors.orange};
                        }
                        li {
                          list-style-image: url(${triangleRightOrange});
                          padding: 8px;
                          margin-left: 20px;
                        }
                        `}
                      >
                        <div>
                          <h3>The Future of Travel × MetroCommon 2050</h3>
                          <h1>What We Don't Know:</h1>
                          <h2>Unknowns</h2>
                          <ul>
                            <li>Transportation network companies operate on an unsustainable business model, losing billions of dollars each year. Their survival depends heavily on a steady stream of capital from investors, and from a driver/employee classification that keep costs low by limiting companies’ obligations to provide benefits. Changes in investor preferences or labor rules could upend this business model and result in substantial contraction of service or higher prices. Will this happen and dampen ridership and transportation system impacts?</li>
                            <li>The prospect of fully autonomous vehicles running in general traffic in the next decade remains highly speculative. Will the many technological, ethical, and economic barriers challenges be met, and result in the widespread adoption of autonomous vehicles?​</li>
                            <li>The pandemic is likely to result in a long-term increase in time spent working remotely. How many jobs will become fully remote, and how will changes will affect location choice decisions for workers and firms?</li>
                            <li>Will remote work, e-commerce, and virtual communications reduce the overall need for travel, or enable/prompt more discretionary trips that mitigate any reduction in total trips?</li>
                          </ul>
                        </div>
                      </div>
                      {/* Slide 4 */}
                      <div 
                        css={css`
                        border: 5px solid ${themeColors.orange};
                        height: 90vh;
                        padding: 4rem 6rem;
                        background: white;
                        color: black;
                        font-family: ${fonts.calibre};
                        font-weight: 200;
                        font-size: 16px;
                        line-height: 18px;
                        h1 { 
                          font-size: 36px; 
                          line-height: 4rem;
                          color: ${themeColors.orange};
                        }
                        h2 {
                          font-size: 24px;
                          line-height: 28px;
                          padding-bottom: 20px;
                        }
                        h3 {
                          font-size: 20px;
                          position: absolute;
                          right: 0;
                          top: 0;
                          padding-right: 6rem;
                          padding-top: 3rem; 
                          color: ${themeColors.orange};
                        }
                        ul {
                          width: 50%;
                        }
                        li {
                          list-style-image: url(${triangleRightOrange});
                          padding: 8px;
                          margin-left: 20px;
                        }
                        img#triangle-quad {
                          position: absolute;
                          right: -6rem;
                          top: 0;
                          margin-top: 10rem;
                        }
                        `}
                      >
                        <div>
                          <h3>The Future of Travel × MetroCommon 2050</h3>
                          <h1>Takeaways:</h1>
                          <h2>Possible Solutions</h2>
                          <ul>
                            <li>Transportation network companies operate on an unsustainable business model, losing billions of dollars each year. Their survival depends heavily on a steady stream of capital from investors, and from a driver/employee classification that keep costs low by limiting companies’ obligations to provide benefits. Changes in investor preferences or labor rules could upend this business model and result in substantial contraction of service or higher prices. Will this happen and dampen ridership and transportation system impacts?</li>
                          </ul>
                          <img src={triangleQuad} id="triangle-quad" alt="Car and Street" />
                        </div>
                      </div>
                      {/* Slide 4 */}
                      <div 
                        css={css`
                        border: 5px solid ${themeColors.orange};
                        height: 90vh;
                        padding: 4rem 6rem;
                        background: white;
                        color: black;
                        font-family: ${fonts.calibre};
                        font-weight: 200;
                        font-size: 16px;
                        line-height: 18px;
                        h1 { 
                          font-size: 36px; 
                          line-height: 4rem;
                          color: ${themeColors.orange};
                        }
                        h2 {
                          font-size: 24px;
                          line-height: 28px;
                          padding-bottom: 20px;
                        }
                        h3 {
                          font-size: 20px;
                          position: absolute;
                          right: 0;
                          top: 0;
                          padding-right: 6rem;
                          padding-top: 3rem; 
                          color: ${themeColors.orange};
                        }
                        li {
                          list-style-image: url(${triangleRightOrange});
                          padding: 8px;
                          margin-left: 20px;
                        }
                        `}
                      >
                        <div>
                          <h3>The Future of Travel × MetroCommon 2050</h3>
                          <h1>Takeaways:</h1>
                          <h2>Possible Solutions</h2>
                          <ul>
                            <li>The prospect of fully autonomous vehicles running in general traffic in the next decade remains highly speculative. Will the many technological, ethical, and economic barriers challenges be met, and result in the widespread adoption of autonomous vehicles?​</li>
                            <li>The pandemic is likely to result in a long-term increase in time spent working remotely. How many jobs will become fully remote, and how will changes will affect location choice decisions for workers and firms?</li>
                            <li>Will remote work, e-commerce, and virtual communications reduce the overall need for travel, or enable/prompt more discretionary trips that mitigate any reduction in total trips?</li>
                          </ul>
                        </div>
                      </div>
                      {/* Slide */}
                      <div 
                        style={{border: "5px solid", borderColor: themeColors.orange, minHeight: "40vw", background: "white"}}
                      >
                        <div
                          css={css`
                          border: 5px solid ${themeColors.orange};
                          height: 90vh;
                          padding: 4rem 6rem;
                          background: ${themeColors.orange};
                          color: white;
                          font-family: ${fonts.calibre};
                          font-weight: 200;
                          font-size: 16px;
                          line-height: 18px;
                          display: flex;
                          justify-content: center;
                          align-items: center;
                          `}
                        >
                          <h2>Learn more through MAPC's research on the <a href="https://www.mapc.org/wp-content/uploads/2021/02/Feb2021-Ecommerce-Report.pdf">impact of ecommerce</a>, <a href="https://www.mapc.org/resource-library/the-growing-carbon-footprint-of-ride-hailing-in-massachusetts/">TNCs</a>, and <a href="https://www.mapc.org/resource-library/autonomous-vehicles/">automated vehicle technology.</a></h2>
                        </div>
                      </div> 



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

export default Key4;
