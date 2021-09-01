/** @jsx jsx */

import * as React from "react";
import { css, jsx } from '@emotion/react';
import { sectionStyle1 } from "../utils/theme";
import topImage from "../assets/Mask-Group-2@2x.png";
import bottomImage from "../assets/Mask-Group-3@2x.png";
import triangleRight1 from "../assets/triangle-right1.png";
import triangleRight2 from "../assets/triangle-right2.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Takeaways = () => {
    return (
        <div>
            
            <Container css={sectionStyle1}>
                <Row>
                <Col className="section-content" md={6} lg={6}>
                    <h3>Key Takeaways from Engagement</h3>
                    <p>Over the course of the MetroCommon planning effort we engaged people in the region to better understand what it means to be ready for uncertainty. Our discussions led to <span className="teal-text">10 main takeaways</span> to better plan for policy and action going forward.</p>      
                    <ul>
                        <li>Increased equity among residents enables us to be a more resilient region</li>
                        <li>We need to find incentives beyond profit to get to our goals</li>
                        <li>We can’t think ‘in aggregate:’ Without centering vulnerable populations in policy conversations, future uncertainty can lead to further inequities</li>
                        <li>Flexibility is Key: We need fluidity in our systems and structures to respond to new challenges and opportunities</li>
                        <li>Thinking proactively about systems and structures can help avoid needing to think reactively</li>
                        <li>All policy decisions are inter-connected</li>
                        <li>We need to plan for what we do know: Everything hinges on climate change </li>
                        <li>Policies disincentives and incentives should center equity. All policies should make our desired choice the path of least resistance </li>
                        <li>Who is a government? We must change systems to better share decision making power</li>
                        <li>Responding to future changes provides an opportunity to ‘rebalance prioritization’ and express our values</li>
                    </ul>
                    <h3>Three Key Uncertainties Examined</h3>
                </Col>
                <Col className="section-images">
                    <Row>
                            <img className="triangle-large" src={topImage} alt="Notecards" />
                            <img className="triangle-large" src={triangleRight1} alt="Light Teal Triangle"/>
                    </Row>
                    <Row>
                            <img className="triangle-large" src={bottomImage} alt="Gathering of People" />
                            <img className="triangle-large" src={triangleRight2} alt="Dark Teal Triangle"/>
                    </Row>
                </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Takeaways;