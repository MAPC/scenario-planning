/** @jsx jsx */

import React, { useState } from "react";
import { css, jsx } from '@emotion/react';
import { 
  deckText, 
  slideStyle,
  themeColors, 
  fonts } from "../utils/theme";
import key3bg from "../assets/Image20@2x.png"
import Carousel from "react-multi-carousel";
import "../utils/WithScrollbar.css";
import key3Data from "../utils/key3Data";
import triangleRight from "../assets/triangle-right.svg";
import triangleRightOrange from "../assets/triangle-right-orange@2x.png";
import economyBg from "../assets/deck-backgrounds/mapc-skyline.jpeg";
import travelBg from "../assets/deck-backgrounds/Traffic-heading-south-on-the-Southeast-Expressway_Credit-John-Wilcox.jpg";
import policyBg from "../assets/deck-backgrounds/Credit_Alex_Koppelman_Dorchester_Quincy_Area_.jpg"
import demographicsBg from "../assets/deck-backgrounds/Kendall_3.jpg";
import triangleQuad from "../assets/Group-117@2x.png";
import trafficGraphic from "../assets/Group-102@2x.png";
import economy1 from "../assets/key1/economy1.png";
import economy2 from "../assets/key1/economy2.png";
import economy3 from "../assets/key1/economy3.png";
import economy4 from "../assets/key1/economy4.png";
import economy5 from "../assets/key1/economy5.png";
import economy6 from "../assets/key1/economy6.png";
import travel1 from "../assets/key2/travel1.png";
import travel2 from "../assets/key2/travel2.png";
import travel3 from "../assets/key2/travel3.png";
import travel4 from "../assets/key2/travel4.png";
import travel5 from "../assets/key2/travel5.png";
import travel6 from "../assets/key2/travel6.png";
import policy1 from "../assets/key3/policy1.png";
import policy2 from "../assets/key3/policy2.png";
import policy3 from "../assets/key3/policy3.png";
import policy4 from "../assets/key3/policy4.png";
import policy5 from "../assets/key3/policy5.png";
import policy6 from "../assets/key3/policy6.png";
import demographics1 from "../assets/key4/demographics1.png";
import demographics2 from "../assets/key4/demographics2.png";
import demographics3 from "../assets/key4/demographics3.png";
import demographics4 from "../assets/key4/demographics4.png";
import demographics5 from "../assets/key4/demographics5.png";
import demographics6 from "../assets/key4/demographics6.png";

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

    // const CustomRightArrow = ({ onClick, ...rest }) => {
    //   const {
    //     onMove,
    //     carouselState: { currentSlide, deviceType }
    //   } = rest;
    //   // onMove means if dragging or swiping in progress.
    //   return <button onClick={() => onClick()} />;
    // }; 

    return (
      <div>
        {/* Economy Deck */}
        <div css={css`
          background-image: url(${economyBg}); 
          background-position: center; 
          background-size: cover;
        `}>
          <div css={css`
            :before {
              background: #855F99;
              content: '\A';
              height: 100%;
              opacity: 40%;
              position: absolute;
              width: 100%; 
            }
          `}>
            <div css={deckText}>
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
                        // customRightArrow={<CustomRightArrow />}
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
                      <div css={slideStyle}>
                        <img src={economy1} alt="" />
                      </div>
                      {/* Slide 2 */}
                      <div css={slideStyle}>
                        <img src={economy2} alt="" />
                      </div>
                      {/* Slide 3 */}
                      <div css={slideStyle}>
                        <img src={economy3} alt="" />
                      </div>
                      {/* Slide 4 */}
                      <div css={slideStyle}>
                        <img src={economy4} alt="" />
                      </div>
                      {/* Slide 5 */}
                      <div css={slideStyle}>
                        <img src={economy5} alt="" />
                      </div>
                      {/* Slide 6 */}
                      <div css={slideStyle}>
                        <img src={economy6} alt="" />
                      </div>
                      {/* blank final slide */}
                      <div class="image-container increase-size">
                      </div>
                    </Carousel>
                </div>
            </div>
          </div>
        </div>
        {/* Travel Deck */}
        <div css={css`
          background-image: url(${travelBg}); 
          background-position: center; 
          background-size: cover;
        `}>
          <div css={css`
            :before {
              background: #48B062;
              content: '\A';
              height: 100%;
              opacity: 40%;
              position: absolute;
              width: 100%; 
            }
          `}>
            <div css={deckText}>
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
                      <div css={slideStyle}>
                        <img src={travel1} alt="" />
                      </div>
                      {/* Slide 2 */}
                      <div css={slideStyle}>
                        <img src={travel2} alt="" />
                      </div>
                      {/* Slide 3 */}
                      <div css={slideStyle}>
                        <img src={travel3} alt="" />
                      </div>
                      {/* Slide 4 */}
                      <div css={slideStyle}>
                        <img src={travel4} alt="" />
                      </div>
                      {/* Slide 5 */}
                      <div css={slideStyle}>
                        <img src={travel5} alt="" />
                      </div>
                      {/* Slide 6 */}
                      <div css={slideStyle}>
                        <img src={travel6} alt="" />
                      </div>
                      {/* blank final slide */}
                      <div class="image-container increase-size">
                      </div>
                    </Carousel>
                </div>
            </div>
          </div>
        </div>
        {/* Policy Deck */}
        <div css={css`
          background-image: url(${policyBg}); 
          background-position: center; 
          background-size: cover;
          :before {
            background: red;
            content: '\A';
            height: 100%;
            opacity: 40%;
            position: absolute;
            width: 100%; 
          }
        `}>
          <div css={css`
            :before {
              background: #DA322A;
              content: '\A';
              height: 100%;
              opacity: 40%;
              position: absolute;
              width: 100%; 
            }
          `}>
            <div css={deckText}>
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
                      <div css={slideStyle}>
                        <img src={policy1} alt="" />
                      </div>
                      {/* Slide 2 */}
                      <div css={slideStyle}>
                        <img src={policy2} alt="" />
                      </div>
                      {/* Slide 3 */}
                      <div css={slideStyle}>
                        <img src={policy3} alt="" />
                      </div>
                      {/* Slide 4 */}
                      <div css={slideStyle}>
                        <img src={policy4} alt="" />
                      </div>
                      {/* Slide 5 */}
                      <div css={slideStyle}>
                        <img src={policy5} alt="" />
                      </div>
                      {/* Slide 6 */}
                      <div css={slideStyle}>
                        <img src={policy6} alt="" />
                      </div>
                      {/* blank final slide */}
                      <div class="image-container increase-size">
                      </div>
                    </Carousel>
                </div>
            </div>
          </div>
        </div>
        {/* Demographics Deck */}
        <div css={css`
          background-image: url(${demographicsBg}); 
          background-position: center; 
          background-size: cover;
        `}>
          <div css={css`
            :before {
              background: #855F99;
              content: '\A';
              height: 100%;
              opacity: 40%;
              position: absolute;
              width: 100%; 
            }
          `}>
            <div css={deckText}>
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
                      <div css={slideStyle}>
                        <img src={demographics1} alt="" />
                      </div>
                      {/* Slide 2 */}
                      <div css={slideStyle}>
                        <img src={demographics2} alt="" />
                      </div>
                      {/* Slide 3 */}
                      <div css={slideStyle}>
                        <img src={demographics3} alt="" />
                      </div>
                      {/* Slide 4 */}
                      <div css={slideStyle}>
                        <img src={demographics4} alt="" />
                      </div>
                      {/* Slide 5 */}
                      <div css={slideStyle}>
                        <img src={demographics5} alt="" />
                      </div>
                      {/* Slide 6 */}
                      <div css={slideStyle}>
                        <img src={demographics6} alt="" />
                      </div>
                      {/* blank final slide */}
                      <div class="image-container increase-size">
                      </div>
                    </Carousel>
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Key4;
