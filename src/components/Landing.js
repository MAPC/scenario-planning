/** @jsx jsx */

import * as React from "react";
import { css, jsx } from '@emotion/react';
import { landingStyle, titleCardContainer, titleCardDesktopContainer } from "../utils/theme";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Header from "./Header";
import TitleCard from "./TitleCard";
import TitleCardDesktop from "./TitleCardDesktop";
import TitleCardMobile from "./TitleCardMobile";

const Landing = () => {
    return (
        <div>
            <Container fluid css={landingStyle}>
                <Header />
                <Row css={titleCardContainer}>
                    <div className="desktop" css={titleCardDesktopContainer}>
                        <TitleCardDesktop />
                    </div>
                    <div className="mobile">
                        <TitleCardMobile />
                    </div>
                </Row>
                <div className="hero-overlay"></div>
            </Container>
        </div>
    )
}

export default Landing;