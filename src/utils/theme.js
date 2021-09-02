import { css, jsx } from '@emotion/react';
import background from "../assets/background-blur-out-focus-bokeh-traffic-jams-road-repairs-accidents-red-brake-lights-stopped-cars-scaled-panorama.jpg";
import key1bg from "../assets/Image20@2x.png";
import triangleAccordion from "../assets/triangle-accordion.png";

const fonts = {
  calibre: "'Calibre', sans-serif",
  swiftNeueLtPro: "'Swift Neue LT Pro', serif"
};

const themeColors = {
  indigo: '#101436',
  teal: '#4CC1B9',
  lightTeal: '#ebf6f7',
  lightGray: '#D8D8D8',
  white: '#FFFFFF',
  black: '#000000',
  leaf: '#03332D',
  fontGray: '#545454'
};

const headerStyle = css`
  height: 120px;
  background-color: ${themeColors.leaf};
  .row {
    height: 100%;
    margin: auto 6rem;
  }
  .header-left {
    height: 100%;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
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
`;

const landingStyle = css`
  height: 32rem;
  padding: 0;
  background-image: url(${background});
  background-size: cover;

  .hero-overlay {
    height: 100%;
    background: rgb(240,239,231);
    background: linear-gradient(90deg, rgba(240,239,231,1) 0%, rgba(240,239,231,1) 50%, rgba(255,255,255,0) 100%); 
    z-index: -1;
  }

`;

const titleCardContainer = css`
  position: absolute;
  margin: 8rem 6rem 0;
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

const layoutStyle = css`

`;

const aboutStyle = css`
  width: 100%;
  margin: 0;
  padding-top: 12rem;
  height: auto;
  position: relative;
  color: ${themeColors.white};
  background: ${themeColors.leaf};

  .line {
    width: 21rem;
    margin-top: 12px;
    position: absolute;
  }

  .about-content {
    padding: 0 22rem 10rem;
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
`;

const sectionStyle1 = css`
  width: 100%;
  margin: 0;
  height: auto;
  position: relative;
  
  .section-content {
    width: 80%;
    padding: 10rem 4rem 10rem 14rem;
    
    h3 {
      font-size: 44px;
      font-weight: 300;
      letter-spacing: 1.5px;
      margin: 15px 0;
    }

    p {
      font-family: ${fonts.swiftNeueLtPro};
    }

    .teal-text {
      color: ${themeColors.teal};
    }

    ul {
      width: 100%;
      list-style: none;
      margin-bottom: 4rem;
    }

    .accordion {
      
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
      // transition: all 0.2s ease-in-out;
    }

    .accordion-button:focus {
      box-shadow: none;
    }

    .accordion-header {
      font-size: 16px;
      font-family: ${fonts.swiftNeueLtPro};
      color: ${themeColors.leaf};
    }

  }

  .section-images {
    padding: 10rem 0;

    .triangle-large {
      width: 30rem;
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
  height: 100vh;
  // margin: 10rem 14rem;
  padding: 0;
  position: relative;

  .section-content-2 {
    h3 {
      font-size: 44px;
      font-weight: 300;
      letter-spacing: 1.5px;
      margin: 10rem 0 6rem 14rem;
    }

    p {
      font-family: ${fonts.swiftNeueLtPro};
    }
  }
    
`;

const keyStyle = css`
  height: 100vh;
  width: 100%;

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

  // targets color of indicator buttons
  .carousel-indicators [data-bs-target] {
    height: 6px;
    background-color: ${themeColors.leaf};
  }
`;

export { 
  fonts, 
  themeColors, 
  headerStyle, 
  landingStyle, 
  titleCardContainer, 
  titleCardStyle, 
  layoutStyle, 
  aboutStyle, 
  sectionStyle1, 
  liTitle,
  sectionStyle2,
  keyStyle 
};
