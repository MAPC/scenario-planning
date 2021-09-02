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

const Slides = () => {
    return (
        <div className="content-container" css={contentContainer}>
            <iframe src="https://slides.com/mapc/deck-9a8a6e/embed?byline=hidden&share=hidden" width="100%" height="1000" scrolling="yes" frameborder="0" ></iframe>
        </div>
    )
}

export default Slides;