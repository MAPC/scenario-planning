/** @jsx jsx */

import * as React from "react";
import { css, jsx } from '@emotion/react';
import { titleCardStyleMobile } from "../utils/theme";
import triangle from "../assets/triangle.png";
import dots from "../assets/dots.png";


const TitleCardMobile = () => {
    return (
        <div css={titleCardStyleMobile}>
            <div className="title-card">
                <h1>How Do We Plan for an<br/>Uncertain Future?</h1>
            </div>
            <div className="subtitle-card-text">
                <ul>
                    <li><img className="triangle" src={triangle}/><img className="dots" src={dots}/>Key Takeaways</li>
                    <li><img className="triangle" src={triangle}/><img className="dots" src={dots}/>Demographics and the Economy</li>
                    <li><img className="triangle" src={triangle}/><img className="dots" src={dots}/>The Future of Travel</li>
                    <li><img className="triangle" src={triangle}/><img className="dots" src={dots}/>Federal policy</li>
                    <li><img className="triangle" src={triangle}/><img className="dots" src={dots}/>The Future</li>
                </ul>
            </div>
        </div>
    )
}

export default TitleCardMobile;