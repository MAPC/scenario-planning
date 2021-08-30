/** @jsx jsx */

import * as React from "react";
import { css, jsx } from '@emotion/react';
import logo from "../assets/branding/MAPC-MetroCommon-White-RGB.png";
import background from "../assets/background-blur-out-focus-bokeh-traffic-jams-road-repairs-accidents-red-brake-lights-stopped-cars-scaled-panorama.jpg"
import { fonts, themeColors } from "../utils/theme";
import { List } from "phosphor-react";


const homePage = css`
    height: 80vh;
    background-image: url(${background});
    background-size: cover; 
    position: relative;
`;

const headerContent = css `
    max-width: 100vw;
    height: 1rem;
    padding: 1rem 4rem;
    display: flex;
    background-color: #216E47;
    color: white;

    .header-content-right {
        width: 50%;
        align-items: center;
        > a > img {height: .8rem;}
    }

    .header-content-left {
        width: 50%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        color: white;
        > a {text-decoration: none;}
        > a:visited {color: white;}
    }
`;

const heroOverlay = css`
    height: 55vh;
    background: rgb(240,239,231);
    background: linear-gradient(90deg, rgba(240,239,231,1) 0%, rgba(240,239,231,1) 50%, rgba(255,255,255,0) 100%); 
`;

const homePageContent = css`
    height: 35vh;

    background: ${themeColors.indigo};
`;

const titleStyle = css`
    position: absolute;
    min-width: 40%;
    margin: 20vh 10vw;
    padding: 1.5rem;
    color: white;
    background: ${themeColors.indigo};
    z-index: 2;
    > h1 {
        font-size: 50px;
        font-family: ${fonts.swiftNeueLtPro};
        font-weight: 400;
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
`;

const listStyle = css`
    position: absolute;
    min-width: 40%;
    margin: 32vh 5vw;
    padding: 1.5rem;
    color: black;
    background: white;
    z-index: 1;
    > ul {
        margin: 8vh 8vw 6vh;
        font-size: 14px;
        font-family: ${fonts.calibre};
        font-weight: 400;
        letter-spacing: 2px;
        text-transform: uppercase;
        list-style: none;
    }
    > ul > li {
        margin: 10px 2px;
    }
`;


const Header = () => {
    return (
        <div>
            <div className="home-page" css={homePage}>
                <div className="header-content" css={headerContent}>
                    <div className="header-content-right"><a href="/"><img src={logo} alt="MetroCommon by 2050" /></a></div>
                    <div className="header-content-left">
                        <a href="">Language Dropdown</a>
                        <a href="/"><List size={36} /></a>
                    </div>
                    <div className="title" css={titleStyle}>
                        <h1>Scenario Planning</h1>
                        <h3>Planning For An Uncertain Future</h3>
                    </div>
                    <div className="table-contents" css={listStyle}>
                        <ul>
                            <li>Introduction</li>
                            <li>Goals</li>
                            <li>Process</li>
                            <li>Lorem Ipsum</li>
                            <li>Lorem Ipsum</li>
                            <li>Lorem Ipsum</li>
                            <li>What's Next</li>
                            <li>Recommendations</li>
                        </ul>
                    </div>
                </div>
                <div className="hero-overlay" css={heroOverlay}>
                </div>
                <div className="home-page-content" css={homePageContent}>
                </div>
                
            </div>
        </div>
    )
}

export default Header