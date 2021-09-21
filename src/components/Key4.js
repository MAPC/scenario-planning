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
      <div>
        {/* Economy Deck */}
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
                <h3>A Changing Economy</h3>
                <p>How many jobs Greater Boston will offer in 2050, and in which industries and occupations, are factors that can’t be known for sure – but they’ll influence the region profoundly. That makes our future economy a major uncertainty for which we must prepare.</p>
                <p>There are some things we know about our thirty-years-from-now economy: it will be made up of workers – regardless of how much of life becomes automated. And some goods and services will be the same as ours today, and some will be different.</p>
                <p>Remembering that our economy is based on workers reminds us of the importance of housing and transportation as ways to grow the economy. Ultimately, the region's available labor force will impact how many jobs our region can hold.</p>
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
                    align-items: center;
                `}>
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
                      {/* Slide 0 */}
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
                          <h1>A Changing Economy</h1>
                          <h2>The Economy is Made of People​.</h2>
                          <img src={triangleRight} className="triangle-right" alt="Triangle" />
                          <img src={triangleRight} className="triangle-right" alt="Triangle" />
                          <img src={triangleRight} className="triangle-right" alt="Triangle" />
                          <img src={triangleRight} className="triangle-right" alt="Triangle" />
                        </div>
                      </div>
                      {/* Slide 1 */}
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
                          <ul>
                            <li>Wage polarization, benefits elimination, and worker reclassification has reduced economic security for many workers. That trend will likely continue if unchecked.</li>
                            <li>A limited supply of workers will lessen the likelihood of robust job growth. Current racial disparities in education and training, if they continue, will limit potential for current residents to meet industry labor needs.</li>
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
                          <ul>
                            <li>The demand for care work and other in-person jobs that require human skill and emotional intelligence will likely grow.​</li>
                            <li>Our region’s economic competitiveness is rooted in knowledge industries, especially medicine, biomedicine, technology, that are often linked to institutions of higher education​.</li>
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
                          <ul>
                            <li>Changes in higher education may fundamentally alter the region’s role as a magnet for students and researchers. Nationally, the population of college-age people has declined. Add to that, there’s an increase in the quality and perceived value of remote learning, and a growing aversion to student debt. Will these or other factors reduce enrollment at universities and the number of students living and working in the region?​</li>
                            <li>Automation and digital platforms may substantially alter the need for labor, but may create other employment opportunities. How will this play out?</li>
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
                            <li>The region will need to prepare for a future economy not predicated on absolute “job growth,” but on increased productivity and wage growth.​</li>
                          </ul>
                          <img src={triangleQuad} id="triangle-quad" alt="Car and Street" />
                        </div>
                      </div>
                      {/* Slide 5 */}
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
                            <li>To help close the racial opportunity gap and provide industry with skilled labor, we will need to make the most of our resident workforce through education, workforce development, and training programs. We will need childcare and other family supports.</li>
                            <li>Potential changes in higher education present a significant threat to the region’s major employers and region’s economic competitiveness. Higher education institutions must plan for a variety of possible changes alongside government and institutional partners.​</li>
                            <li>If the erosion of wages, employer-provided benefits, and federal social safety net continues, state and local governments will need to step in to create new legislation or fill the gaps.​</li>
                          </ul>
                        </div>
                      </div>
                      {/* Slide 6 */}
                      <div>
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
                          <h2>Learn more about MAPC's research on the future of work <a href="https://www.mapc.org/planning101/the-future-of-work-data-and-policies-to-shape-greater-bostons-recovery/">here</a>​.</h2>
                        </div>
                      </div> 
                      {/* blank final slide */}
                      <div class="image-container increase-size">
                      </div>
                    </Carousel>
                </div>
            </div>
        </div>
        {/* Travel Deck */}
        <div css={css`background-image: url(${travelDeckBg}); background-position: center; background-size: cover;`}>
            <div css={css`
                height: auto;
                width: auto;
                margin: 6rem 14rem;
                h3 {
                  font-weight: 300;
                  margin: 24px 0;
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
                    align-items: center;
                `}>
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
                      {/* Slide 0 */}
                      <div 
                        css={css`
                          border: 5px solid ${themeColors.purple};
                          height: 90vh;
                          padding: 4rem 6rem;
                          background: ${themeColors.purple};
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
                      {/* Slide 1 */}
                      <div 
                        css={css`
                        border: 5px solid ${themeColors.purple};
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
                          color: ${themeColors.purple};
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
                          color: ${themeColors.purple};
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
                        border: 5px solid ${themeColors.purple};
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
                          color: ${themeColors.purple};
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
                          color: ${themeColors.purple};
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
                        border: 5px solid ${themeColors.purple};
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
                          color: ${themeColors.purple};
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
                          color: ${themeColors.purple};
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
                        border: 5px solid ${themeColors.purple};
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
                          color: ${themeColors.purple};
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
                          color: ${themeColors.purple};
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
                      {/* Slide 5 */}
                      <div 
                        css={css`
                        border: 5px solid ${themeColors.purple};
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
                          color: ${themeColors.purple};
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
                          color: ${themeColors.purple};
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
                      {/* Slide 6 */}
                      <div>
                        <div
                          css={css`
                          border: 5px solid ${themeColors.purple};
                          height: 90vh;
                          padding: 4rem 6rem;
                          background: ${themeColors.purple};
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
        {/* Policy Deck */}
        <div css={css`background-image: url(${travelDeckBg}); background-position: center; background-size: cover;`}>
            <div css={css`
                height: auto;
                width: auto;
                margin: 6rem 14rem;
                font-size: 16px;
                h3 {
                  font-weight: 300;
                  margin: 24px 0;
                }
                p {
                  font-family: ${fonts.swiftNeueLtPro};
                }
                li {
                  font-family: ${fonts.swiftNeueLtPro}; 
                }
            `}>
                <h3>The Future of Federal Policy​</h3>
                <p>In addition to the many behavioral, economic, and technological factors that are out of our control, political decisions at the federal level will have a profound influence on our future.</p>
                <p>This plan was created during a period of great political uncertainty at the federal level. While some of this uncertainty may seem to ebb and flow with the two- and four- year election cycles, it is certain that things will look different in 2030 and 2050 than they do today.</p>
                <p>Federal policy influences almost all the work that MAPC does as an agency and cares about as an institution. However, for the purposes of this plan we have decided to focus on three major uncertainties that could have broad influences on our region and would require us to react at the state and local level.</p>
                <ol>
                  <li>The future of healthcare policy​</li>
                  <li>Federal environmental regulations and climate change policy</li>
                  <li>Federal funding for local governments, infrastructure, and disaster relief</li>
                </ol>
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
                    align-items: center;
                `}>
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
                      {/* Slide 0 */}
                      <div 
                        css={css`
                          border: 5px solid ${themeColors.turquoise};
                          height: 90vh;
                          padding: 4rem 6rem;
                          background: ${themeColors.turquoise};
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
                          <h1>The Future of Federal Policy​</h1>
                          <h2>Massachusetts Operates in a Greater System​.</h2>
                          <img src={triangleRight} className="triangle-right" alt="Triangle" />
                          <img src={triangleRight} className="triangle-right" alt="Triangle" />
                          <img src={triangleRight} className="triangle-right" alt="Triangle" />
                          <img src={triangleRight} className="triangle-right" alt="Triangle" />
                        </div>
                      </div>
                      {/* Slide 1 */}
                      <div 
                        css={css`
                        border: 5px solid ${themeColors.turquoise};
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
                          color: ${themeColors.turquoise};
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
                          color: ${themeColors.turquoise};
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
                          <ul>
                            <li>Federal investments in research, healthcare, and education are important drivers of the region’s economy.​</li>
                          </ul>
                          <img src={trafficGraphic} alt="Car and Street" />
                        </div>
                      </div>
                      {/* Slide 2 */}
                      <div
                        css={css`
                        border: 5px solid ${themeColors.turquoise};
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
                          color: ${themeColors.turquoise};
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
                          color: ${themeColors.turquoise};
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
                          <ul>
                            <li>Public entities and individual homeowners are highly dependent on federal support for disaster response and recovery.​</li>
                            <li>The region and Massachusetts are powerless to establish fuel economy standards and face substantial political challenges when attempting to implement carbon pricing​.</li>
                            <li>​Local and state governments have seen an influx of funds through ARPA that provide opportunities for significant investment in coming years.​</li>
                          </ul>
                        </div>
                      </div>
                      {/* Slide 3 */}
                      <div 
                        css={css`
                        border: 5px solid ${themeColors.turquoise};
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
                          color: ${themeColors.turquoise};
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
                          color: ${themeColors.turquoise};
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
                          <ul>
                            <li>Federal climate policy and U.S. leadership at the international level is essential to achieve global greenhouse gas (GHG) reductions and mitigate the worst impacts of climate change. The current administration has taken a proactive approach. Will these policies continue?</li>
                            <li>Efforts to restructure the nation’s healthcare system could result in a dramatically different economic environment for hospitals, biomedical and pharmaceutical companies, and insurance companies. Will these efforts create healthier environments and make healthcare more affordable? Will they diminish job growth, income, and tax revenue in Metro Boston?</li>
                            <li>Federal subsidies for rebuilding after natural disasters are politically popular but inefficient and contribute to repetitive loss. Will disaster relief programs be reformed, and will that result in increased abandonment and retreat from vulnerable areas?​</li>
                          </ul>
                        </div>
                      </div>
                      {/* Slide 4 */}
                      <div 
                        css={css`
                        border: 5px solid ${themeColors.turquoise};
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
                          color: ${themeColors.turquoise};
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
                          color: ${themeColors.turquoise};
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
                            <li>In a future where the federal government is either ineffective, unreliable, or not offering local support, it will be more critical than ever for local governments and state actors to work together toward common goals. Federal dysfunction and diminished aid to states and localities could increase the need for local and regional revenue sources​.</li>
                          </ul>
                          <img src={triangleQuad} id="triangle-quad" alt="Car and Street" />
                        </div>
                      </div>
                      {/* Slide 5 */}
                      <div 
                        css={css`
                        border: 5px solid ${themeColors.turquoise};
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
                          color: ${themeColors.turquoise};
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
                          color: ${themeColors.turquoise};
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
                            <li>The biomedical and pharmaceutical industries in the region are vulnerable to changes in federal policy. Local government should work with industries to plan for future uncertainties.</li>
                            <li>State and local interventions in workers’ rights, the regulation of emerging industries, and environmental protection may be needed if legislative or judicial withdrawal from the existing federal role continues.​</li>
                          </ul>
                        </div>
                      </div>
                      {/* Slide 6 */}
                      <div>
                        <div
                          css={css`
                          border: 5px solid ${themeColors.turquoise};
                          height: 90vh;
                          padding: 4rem 6rem;
                          background: ${themeColors.turquoise};
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
                          <h2>Learn more about MAPC's research on <a href="https://climate-vulnerability.mapc.org/">climate vulnerability</a>, <a href="https://metrocommon.mapc.org/reports/17">sea level rise</a>, and <a href="https://www.mapc.org/get-involved/legislative-priorities/">legislative policy</a>.​</h2>
                        </div>
                      </div> 
                      {/* blank final slide */}
                      <div class="image-container increase-size">
                      </div>
                    </Carousel>
                </div>
            </div>
        </div>
        {/* Demographics Deck */}
        <div css={css`background-image: url(${travelDeckBg}); background-position: center; background-size: cover;`}>
            <div css={css`
                height: auto;
                width: auto;
                margin: 6rem 14rem;
                h3 {
                  font-weight: 300;
                  margin: 24px 0;
                }
                p {
                  font-family: ${fonts.swiftNeueLtPro};
                  font-size: 16px;
                }
            `}>
                <h3>Demographic Change</h3>
                <p>In order to plan for an equitable, sustainable, and prosperous region in 2050, we need some sense of who we are planning for. How many people should we expect? How many will be young or old? How many and what kind of units will be needed to house them? Answers to these questions will determine what type of housing the region will need, the transportation services we must invest in, along with what other public services state and local governments must provide.</p>
                <p>The basic components of population change are simple: everyone gets older at the same rate; babies are being born every day; some people move out of the region, while others move in; and some of our current residents will pass away before 2050. An understanding of the basic trends in these elements can allow us to prepare for generational shifts over time.</p>
                <p>For example, Baby Boomers still comprise a substantial share of the region’s workforce and homeowners, but over the coming decades they will be entering new life stages. By 2050, all members of the Baby Boomer generation will be over 85 years old. While we don’t know exactly when or how many Boomers will move out of the region, pass away, or retire, we know enough to begin estimating how their changing needs for housing, income, and services may create both challenges and opportunities for the region. For example, we can predict with some certainty that there will be a large, if gradual, exodus from the workforce. We can predict there will be a greater number of older adults in need of transportation services and a larger number of homeowners on fixed incomes.</p>
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
                    align-items: center;
                `}>
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
                      {/* Slide 0 */}
                      <div 
                        css={css`
                          border: 5px solid ${themeColors.teal};
                          height: 90vh;
                          padding: 4rem 6rem;
                          background: ${themeColors.teal};
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
                          <h1>Demographic Change</h1>
                          <h2>How Do We Plan for Residents of Tomorrow?​</h2>
                          <img src={triangleRight} className="triangle-right" alt="Triangle" />
                          <img src={triangleRight} className="triangle-right" alt="Triangle" />
                          <img src={triangleRight} className="triangle-right" alt="Triangle" />
                          <img src={triangleRight} className="triangle-right" alt="Triangle" />
                        </div>
                      </div>
                      {/* Slide 1 */}
                      <div 
                        css={css`
                        border: 5px solid ${themeColors.teal};
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
                          color: ${themeColors.teal};
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
                          color: ${themeColors.teal};
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
                          <ul>
                            <li>Our region is getting older, and we need to prepare our housing, transportation, and other service sectors to accommodate those changes.</li>
                          </ul>
                          <img src={trafficGraphic} alt="Car and Street" />
                        </div>
                      </div>
                      {/* Slide 2 */}
                      <div
                        css={css`
                        border: 5px solid ${themeColors.teal};
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
                          color: ${themeColors.teal};
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
                          color: ${themeColors.teal};
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
                          <ul>
                            <li>We’ve likely hit the peak number of children in the region through 2050.​</li>
                            <li>Demographic shifts, even without changes in household formation preferences, will fundamentally change the type of households living in our region in 2050.</li>
                            <li>New housing demand will likely outpace population growth because of declining household size.​</li>
                          </ul>
                        </div>
                      </div>
                      {/* Slide 3 */}
                      <div 
                        css={css`
                        border: 5px solid ${themeColors.teal};
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
                          color: ${themeColors.teal};
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
                          color: ${themeColors.teal};
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
                          <ul>
                            <li>Will future generations have children at rates similar to those of their parents? In recent decades, birth rates in Massachusetts have declined steadily, and average maternal age has increased. In other words, mothers today tend to have fewer children, later in life. These patterns can be tracked over recent history, but how will they change going forward?​</li>
                            <li>The nation will experience more frequent and more extreme weather events related to climate change in coming decades. How would possible climate-change-related migration impact the Metro Boston region?​</li>
                            <li>What will be the rate at which seniors move out of our region after retirement and the rate at which recent college graduates and young workers remain in our region? How will this impact how many people live in our region, and the type of housing and services they’ll need?</li>
                            <li>How will changes in remote work policies impact domestic and international migration in the long term? If more jobs become fully remote, will Metro Boston  experience less migration as families look for areas with lower housing costs?</li>
                          </ul>
                        </div>
                      </div>
                      {/* Slide 4 */}
                      <div 
                        css={css`
                        border: 5px solid ${themeColors.teal};
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
                          color: ${themeColors.teal};
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
                          color: ${themeColors.teal};
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
                            <li>Under every scenario, the region’s senior population increases significantly. More residents will be on fixed incomes and will have difficulty paying higher property taxes, and more residents will need home healthcare, accessible transportation, and other senior services.​</li>
                          </ul>
                          <img src={triangleQuad} id="triangle-quad" alt="Car and Street" />
                        </div>
                      </div>
                      {/* Slide 5 */}
                      <div 
                        css={css`
                        border: 5px solid ${themeColors.teal};
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
                          color: ${themeColors.teal};
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
                          color: ${themeColors.teal};
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
                            <li>The need for new family housing depends on where and how seniors decide to live. The number of families with children in the region is likely to grow only modestly, resulting in small net increases in demand for family-sized housing. However, if current trends continue, seniors will occupy a substantial share of the family-sized units in the region, and many more 3+ bedroom units will be needed to accommodate young families.</li>
                            <li>Metro Boston will continue to see changes in the way people live. If future generations continue to get married later in life, or not at all, the number of households and therefore the type and size of housing units will change. The uncertainty in so many aspects of life over the next thirty years highlights our need for flexible policies, particularly around housing construction and transportation investments.​</li>
                          </ul>
                        </div>
                      </div>
                      {/* Slide 6 */}
                      <div>
                        <div
                          css={css`
                          height: 90vh;
                          padding: 4rem 6rem;
                          background: ${themeColors.teal};
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
                          <h2>Read more about our research on demographics and scenarios for the future <a href="https://mapc365.sharepoint.com/:w:/s/MetroCommon2050Team/EQFrxK91iipPiSUZOvhQJEABWnw_H_CN_hy4KmSQ2cEf8A?e=hVSiHP">here​</a>.</h2>
                        </div>
                      </div> 
                      {/* blank final slide */}
                      <div class="image-container increase-size">
                      </div>
                    </Carousel>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Key4;
