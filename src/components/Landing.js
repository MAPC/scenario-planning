/** @jsx jsx */

import * as React from "react";
import { css, jsx } from '@emotion/react';
import { landingStyle, titleCardContainer } from "../utils/theme";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Header from "./Header";
import TitleCard from "./TitleCard";

const Landing = () => {
    return (
        <div>
            <Container fluid css={landingStyle}>
                <Header />
                <Row css={titleCardContainer}>
                    <TitleCard />
                </Row>
                <div className="hero-overlay"></div>
            </Container>
        </div>
    )
}

export default Landing;