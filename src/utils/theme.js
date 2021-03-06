import { css, jsx } from '@emotion/react';
import background from "../assets/background-blur-out-focus-bokeh-traffic-jams-road-repairs-accidents-red-brake-lights-stopped-cars-scaled-panorama.jpg";
import key1bg from "../assets/Image20@2x.png";
import triangleAccordion from "../assets/triangle-accordion.png";
import triangleRightOrange from "../assets/triangle-right-orange@2x.png";

const fonts = {
  calibre: "'Calibre', sans-serif",
  swiftNeueLtPro: "'Swift Neue LT Pro', serif"
};

const themeColors = {
  purple: '#855F99',
  indigo: '#101436',
  teal: '#4CC1B9',
  lightTeal: '#ebf6f7',
  turquoise: '#67CBE4',
  lightGray: '#D8D8D8',
  white: '#FFFFFF',
  black: '#000000',
  leaf: '#03332D',
  fontGray: '#545454',
  red: '#DA322A',
  orange: '#F3781F'
};

const headerStyle = css`
  background-color: ${themeColors.leaf};
  height: 120px;
  position: fixed;
  z-index: 5;
  .row {
    height: 100%;
    margin: auto 6rem;
  }
  .header-left {
    align-items: center;
    display: flex;
    height: 100%;
    margin-left: 6rem;
    padding: 0;
    img {
      max-height: 20px;
    }
  }
  .header-right {
    height: 100%;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    a {
      text-decoration: none;      
      color: ${themeColors.white};
      font-family: ${fonts.swiftNeueLtPro};
      font-size: 16px;
      margin: 0 20px;
    }
  }
  @media (max-width: 425px){
    .row {
      margin: 0;
    }
    .header-left {
      width: 50%;
    }
    .header-right {
      width: 50%;
      a {
        margin: 0;
      }
    }
  }
`;

const landingStyle = css`
  background-image: url(${background});
  background-size: cover;
  height: 31.75rem;
  padding: 0;
  .row { 
    margin: 0;
  }
  .hero-overlay {
    background: rgb(240,239,231);
    background: linear-gradient(90deg, rgba(240,239,231,1) 0%, rgba(240,239,231,1) 50%, rgba(255,255,255,0) 100%); 
    height: 100%;
    z-index: -1;
  }
  @media (max-width: 425px){
    .hero-overlay {
      display: none;
    }
  }
`;

const titleCardContainer = css`
  .mobile {
    display: none;
  }
  @media (max-width: 425px) {
    .mobile {
      display: block;
    }
    .desktop {
      display: none;
    }
  }
`;

const titleCardDesktopContainer = css`
  margin: 10rem 6rem 0;
  position: absolute;
  @media (max-width: 425px){
    margin: 0;
    position: relative;
  }
`;

const titleCardStyle = css `
  .title-card {
    position: absolute;
    min-width: 47rem;
    margin: 0 8rem;
    padding: 1.5rem 3rem;
    color: white;
    background: ${themeColors.leaf};
    z-index: 2;
    > h1 {
        font-size: 60px;
        font-family: ${fonts.calibre};
        font-weight: 200;
        padding: 0;
        margin: 0;
    }
    > h3 {
        font-size: 20px;
        font-family: ${fonts.calibre};
        font-weight: 400;
        letter-spacing: 2px;
        text-transform: uppercase;
        margin: 10px 20px;
    }
  }
  .subtitle-card-bg {
    position: absolute;
    min-width: 47rem;
    min-height: 21rem;
    margin: 4rem 0;
    background: white;
    z-index: 1;
  }
  .subtitle-card-text {
    position: absolute;
    min-width: 47rem;
    margin: 4rem 0;
    color: black;
    background: none;
    z-index: 2;
    > ul {
        margin: 7.25rem 6rem 3rem 11rem;
        padding: 0;
        font-size: 14px;
        font-family: ${fonts.calibre};
        font-weight: 400;
        letter-spacing: 2px;
        text-transform: uppercase;
        list-style: none;
        z-index: 3;
    }
    > ul > li {
        margin: 8px 0;
        img.triangle {
          width: 20px;
        }
        img.dots {
          height: 2px;
          margin-right: 8px;
        }
    }
  }
`;

const titleCardStyleMobile = css`
  padding: 0;
  .title-card {
    position: relative;
    min-width: 0;
    max-width: 94vw;
    margin: 62vh 0 0 0;
    padding: 1.5rem 0;
    color: white;
    background: ${themeColors.leaf};
    z-index: 2;
    > h1 {
        font-size: 65px;
        font-family: ${fonts.calibre};
        font-weight: 200;
        padding: 0;
        margin: 0;
    }
    > h3 {
        font-size: 20px;
        font-family: ${fonts.calibre};
        font-weight: 400;
        letter-spacing: 2px;
        text-transform: uppercase;
        margin: 10px 20px;
    }
  }
  .subtitle-card-text {
    background-color: white;
    color: black;
    margin: 0;
    min-width: 0;
    padding: 1rem;
    position: relative;  
    z-index: 2;
    > ul {
        font-size: 14px;
        font-family: ${fonts.calibre};
        font-weight: 400;
        letter-spacing: 2px;
        list-style: none;
        margin: 0;
        min-width: 0;
        padding: 0;
        text-transform: uppercase;
        z-index: 3;
        text-indent: -70px;
        margin-left: 65px;
    }
    > ul > li {
        margin: 8px 0;
        img.triangle {
          width: 20px;
        }
        img.dots {
          height: 2px;
          margin-right: 8px;
        }
    }
  }
`;

const layoutStyle = css`
  @media (max-width: 425px) {
    padding: 1rem; 
  }  
`;

const aboutStyle = css`
  width: 100%;
  margin: 0;
  height: auto;
  padding-top: 10rem;
  position: relative;
  color: ${themeColors.white};
  background: ${themeColors.leaf};

  .line {
    width: 21rem;
    margin-top: 12px;
    position: absolute;
  }

  .about-content {
    padding: 0 22rem 7rem;
    h3 {
      font-size: 24px;
      font-family: ${fonts.calibre};
      text-transform: uppercase;
      letter-spacing: 3px;
      margin: 0 0 24px;
    }

    p {
      font-family: ${fonts.swiftNeueLtPro};
      font-size: 16px;
    }
  }
  @media (max-width: 425px) {
    padding-top: 46rem;
    .line {
      display: none;
    }
    .about-content {
      padding: 1rem;
    }
  }
`;

const sectionStyle1 = css`
  width: 100%;
  margin: 0;
  height: auto;
  position: relative;
  
  .row {
    width: 100vw;
  }

  .section-content {
    width: 80%;
    padding: 7rem 4rem 0 14rem;
    
    h3 {
      font-size: 44px;
      font-weight: 300;
      letter-spacing: 1.5px;
      margin: 15px 0;
    }

    p {
      font-family: ${fonts.swiftNeueLtPro};
      margin-right: 0;
    }

    .teal-text {
      color: ${themeColors.teal};
    }

    ul {
      width: 100%;
      list-style: none;
      margin-bottom: 4rem;
    }

    .accordion-item .accordion-button {
      padding: 18px 0;
      border-bottom: 1px ${themeColors.lightGray} solid;
      color: ${themeColors.leaf};
      transition: all 0.2s ease-in-out;
    }

    .accordion-button::after {
      background-image: url(${triangleAccordion});
    }

    .accordion-button:not(.collapsed) {
      color: ${themeColors.black};
      background-color: ${themeColors.lightTeal};
      padding: 18px 1.25rem;
    }

    .accordion-button:not(.collapsed):after {
      transform: rotate(90deg);
    }

    .accordion-button:focus {
      box-shadow: none;
    }

    .accordion-header {
      font-size: 16px;
      font-family: ${fonts.swiftNeueLtPro};
      color: ${themeColors.leaf};
      p {
        margin-bottom: 0;
        margin-right: 3rem;
      }
    }
    @media (max-width: 425px) {
      padding: 1rem;
      width: 100%;
      flex: none;
      .col {
        flex: none;
      }
      ul {
        margin: 0;
        padding: 0 1rem;
      }
    }
  }

  .section-images {
    width: 10%;
    padding: 5rem 0 0;
    overflow: hidden;
    .triangle-large {
      max-height: 80%;
    }
    @media (max-width: 425px) {
      flex: none;
      padding: 1rem;
      width: 100%;
      .col {
        flex: none;
      }
    }
  }
`;

const liTitle = css`
  .accordion-item {
    color: red;
  }
`;

const sectionStyle2 = css`
  width: 100vw;
  height: auto;
  padding: 0;
  position: relative;
  .section-content-2 {
    h3 {
      font-size: 44px;
      font-weight: 300;
      letter-spacing: 1.5px;
      margin: 3rem 0 2rem 14rem;
    }

    p {
      font-family: ${fonts.swiftNeueLtPro};
    }
  }
  @media (min-width: 426px) {
    #mobile {
      display: none;
    }
  }
  @media (max-width: 425px) {
    .section-content-2 {
      h3 {
        margin: 0;
        padding: 1rem;
      }
    }
    #desktop {
      display: none;
    }
    #mobile {
      display: block;
    }
  }
`;

const keyStyle = css`
  width: 100%;
  display: flex;

  .carousel {
    width: 100%;
  }

  .carousel-inner {

  }

  .carousel-item {
    width: 100%;
    padding: 0 15%;
  }

  .carousel-caption {
    color: black;
  }

  .carousel-control-next-icon, .carousel-control-prev-icon {
    width: 5rem;
    height: 5rem;
  }

  .carousel-indicators [data-bs-target] {
    height: 6px;
    background-color: ${themeColors.leaf};
  }
`;

const deckContainer = css`
  @media (max-width: 425px) {
    margin: 0 0 4rem;
  }
`;

const deckText = css`
  background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.5032387955182073) 30%, rgba(255,255,255,0) 100%);
  height: auto;
  padding: 2rem 14rem;
  width: auto;
  z-index: 2;
  h3 {
    font-weight: 300;
    margin: 0 0 24px;
  }
  p {
    font-family: ${fonts.swiftNeueLtPro};
    font-size: 16px;
  }
  li {
    font-family: ${fonts.swiftNeueLtPro};
  }
  @media (max-width: 425px) {
    padding: 0;
  }
`;

const slideStyle = css`
  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
  @media (max-width: 425px) {
    height: auto;
    margin: 1rem 0;
    width: 100%;
  }
`;

const lastSlide = css`
  align-items: flex-start;
  display: flex;
  flex-flow: column;
  font-family: ${fonts.swiftNeueLtPro};
  height: 100%;
  justify-content: center;
  .last-slide-copy {
    padding: 6rem;
  }
  @media (max-width: 425px) {
    h1 {
      font-size: 18px;
    }
    .last-slide-copy {
      padding: 0;
    }
  }
`;

const footerStyle = css`
  #mobile {
    background-color: rgba(3,51,45,1);
    color: #ffffff;
    display: none;
    font-family: ${fonts.swiftNeueLtPro};
    padding: 2rem 1rem 0;
    .section {
      padding-bottom: 2rem;
      a {
        color: #ffffff;
        text-decoration: none;
      }
      p {
        margin: 0;
      }
    }
    .about {

    }
    .social {
      display: flex;
      img {
        height: 2.2rem;
        width: auto;
      }
    }
  }
  @media (max-width: 425px) {
    #desktop {
      display: none;
    }
    #mobile {
      display: block;
    }
  }
`;

export { 
  fonts, 
  themeColors, 
  headerStyle, 
  landingStyle, 
  titleCardContainer, 
  titleCardDesktopContainer,
  titleCardStyle, 
  titleCardStyleMobile,
  layoutStyle, 
  aboutStyle, 
  sectionStyle1, 
  liTitle,
  sectionStyle2,
  keyStyle,
  deckContainer,
  deckText,
  slideStyle,
  lastSlide,
  footerStyle
};
