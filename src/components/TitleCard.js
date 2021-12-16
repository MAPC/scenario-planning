/** @jsx jsx */

import * as React from "react";
import { css, jsx } from '@emotion/react';
import { titleCardStyle } from "../utils/theme";
import triangle from "../assets/triangle.png";
import dots from "../assets/dots.png";
import TitleCardDesktop from "./TitleCardDesktop";
import TitleCardMobile from "./TitleCardMobile";


const TitleCard = () => {
    return (
        <div >
            <div>
                <TitleCardDesktop />
            </div>
            <div>
                <TitleCardMobile />
            </div>
        </div>
    )
}

export default TitleCard;