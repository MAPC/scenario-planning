/** @jsx jsx */

import * as React from "react";
import { css, jsx } from '@emotion/react';
import { sectionStyle1, sectionStyle2 } from "../utils/theme";
import topImage from "../assets/Mask-Group-2@2x.png";
import bottomImage from "../assets/Mask-Group-3@2x.png";
import triangleRight1 from "../assets/triangle-right1.png";
import triangleRight2 from "../assets/triangle-right2.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Key1 from "./Key1"

const Examined = () => {
    return (
        <div>
            <div css={sectionStyle2}>
                <div className="section-content-2">
                    <h3>Four Key Uncertainties Examined</h3>
                </div>
                <Key1 />
            </div>
        </div>
    )
}

export default Examined;