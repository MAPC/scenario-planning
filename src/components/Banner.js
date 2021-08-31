/** @jsx jsx */

import * as React from "react";
import { css, jsx } from '@emotion/react';
import { fonts, themeColors } from "../utils/theme";

const contentContainer = css`
    width: 100vw;
    height: auto;
    padding: 2vh 0;
    color: ${themeColors.white};
    background: ${themeColors.indigo};
`;

const contentPage = css`
    margin: 10vh 18vw 10vh 23vw;
    > h1 {
        font-size: 28px;
        font-family: ${fonts.swiftNeueLtPro};
        color: ${themeColors.white};
        letter-spacing: 2px;
        margin-bottom: 0;
    }
    > h2 {
        font-size: 28px;
        font-family: ${fonts.calibre};
        letter-spacing: 5px;
        text-transform: uppercase;
        margin: 15px 30px;
    }
    > p {
        font-size: 14px;
        font-family: ${fonts.swiftNeueLtPro};
        line-height: 20px;
    }
`;

const Banner = () => {
    return (
        <div className="content-container" css={contentContainer}>
            <div className="content-page" css={contentPage}>
                <h1>The future is based on things both<br/><em>inside</em> and <em>outside</em> of our control</h1>
                <h1>We have the opportunity and <br/>responsibility to plan for an <br/>uncertain future</h1>
            </div>
        </div>
    )
}

export default Banner;