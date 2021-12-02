/** @jsx jsx */

import * as React from "react";
import { css, jsx } from '@emotion/react';
import logo from "../assets/branding/MAPC-MetroCommon-White-RGB.png";
import { headerStyle } from "../utils/theme";
import { List } from "phosphor-react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Header = () => {
    return (
        <div>
            <Container fluid css={headerStyle}>
                <Row>
                    <Col className="header-left"><a href="/"><img src={logo} alt="MetroCommon by 2050" /></a></Col>
                    <Col className="header-right">
                        <a href="/">
                            {/* <a href="/" id="language-dropdown">English</a> */}
                            <List size={36} color="white" />
                        </a>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Header;