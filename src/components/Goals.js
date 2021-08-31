/** @jsx jsx */

import * as React from "react";
import { css, jsx } from '@emotion/react';
import { fonts, themeColors } from "../utils/theme";

const contentContainer = css`
    width: 100vw;
    height: auto;
    padding: 2vh 0;
    color: ${themeColors.black};
    background: ${themeColors.white};
`;

const contentPage = css`
    margin: 10vh 18vw 10vh 23vw;
    > h1 {
        font-size: 60px;
        font-family: ${fonts.swiftNeueLtPro};
        color: ${themeColors.black};
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

const Goals = () => {
    return (
        <div className="content-container" css={contentContainer}>
            <div className="content-page" css={contentPage}>
                <h1>Goals</h1>
                <h2>Guiding Our Actions</h2>
                <h1>Two Rows of Action Components Here</h1>
                <p>MetroCommon is a long-term plan for our region. Released in 2021, it looks out to the year 2050, a period of 29 years, or nearly three decades. It’s a long time away, but even as we focus on the needs of today and tomorrow, we need to think about how our present-day actions will set us up for a sustainable, equitable, and prosperous region thirty years from now.</p>
                <p>Three decades ago, our region looked very different than it does today. In 1990, cell phones were rare accessories for business executives, it was common to have children in your early 20s, and the City of Boston had a massive elevated highway running through the middle of downtown. Now we have the world at our fingertips with a high-powered computer in nearly every pocket, adults are having children in their 30s and 40s, and there’s beautiful greenway stretching from South Station to North Station in Boston. It’s hard to know what 2050 will look like, but we can be sure it will not look the same as today. </p>
            </div>
        </div>
    )
}

export default Goals;