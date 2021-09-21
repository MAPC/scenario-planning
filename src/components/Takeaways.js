/** @jsx jsx */

import * as React from "react";
import { css, jsx } from '@emotion/react';
import { sectionStyle1, sectionStyle2, liTitle } from "../utils/theme";
import topImage from "../assets/Mask-Group-2@2x.png";
import bottomImage from "../assets/Mask-Group-3@2x.png";
import triangleRight1 from "../assets/triangle-right1.png";
import triangleRight2 from "../assets/triangle-right2.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";
import triangleQuadrant from "../assets/Group-118@2x.png";

const Takeaways = () => {
    return (
        <div>
            <Container css={sectionStyle1}>
                <Row width="100vw">
                <Col className="section-content" md={5} lg={5}>
                    <h3>Key Takeaways from Engagement</h3>
                    <p>Over the course of the MetroCommon planning effort we engaged people in the region to better understand what it means to be ready for uncertainty. Our discussions led to <span className="teal-text">four main takeaways</span> to better plan for policy and action.</p>
                    <ul>
                        <Accordion flush bsPrefix="accordion">
                            <Accordion.Item eventKey="0" bsPrefix="accordion-item">
                                <Accordion.Header bsPrefix="accordion-header"><p>Centering equity is not only important to eliminate existing disparities, it makes the region stronger and more resilient in the long-run</p></Accordion.Header>
                                <Accordion.Body>
                                    <p>We know that the fewer disparities that mark our population, the easier it is for us to adapt to uncertainty. Many participants noted that when the economy is doing well it should be harnessed to increase equity in the region, invest in public needs, and make us better able to withstand periods of economic decline.</p>
                                    <p>Along the same lines, it’s critical that we center the voices of those most disenfranchised in our planning efforts to better understand the needs of all residents. Without this framework, it’s easy to think of certain future uncertainties ‘in aggregate,’ for example ‘what happens if we all work from home in the future?’ The truth is, working from home will never be possible for some front-line workers. Sanitation workers, childcare workers, health aids, and service workers all need to attend their jobs in-person and probably will need to do so for decades to come. It’s critical that our policy conversations center the experiences of everyone, particularly those who will be most impacted by future changes.</p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header><p>We need bold action to get to our goals, so we must make the most sustainable, equitable choice the path of least resistance, even if it means deprioritizing short-term profit</p></Accordion.Header>
                                <Accordion.Body>
                                    <p>Our MetroCommon goals are bold. They imagine a future where everyone is able to thrive and our region is able to withstand a variety of challenges. Doing this will require we financial and regulatory incentives and disincentives that enlist the private sector as a partner in reaching our vision for 2050. Participants also noted that it is critical for our desired choices (smart-growth development, low-emission travel, etc.) to always be the easiest path for investors and individuals to make.</p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header><p>We need new collaborative frameworks for decision-making that center residents’ needs </p></Accordion.Header>
                                <Accordion.Body>
                                    <p>A number of participants noted the need for regional collaboration to address any major challenges that may come our way. In addition to collaboration, a recentering of power is needed. A government should be the working body for the people, so it is critical that all people are able to discern and detail their desires. With increasing distrust in our federal government systems, it is critical for local governments to distinguish themself as an effective working system. Challenging the ‘status quo’ can be difficult, but responding to future uncertainties may provide unique opportunities to incrementally change priorities over time and express our values in new ways.</p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header><p>We need to be both proactive and adaptive in the way we tackle and respond to the future</p></Accordion.Header>
                                <Accordion.Body>
                                    <p>This insight stresses the need to create flexible systems and structures, but creating these systems ahead of time will help avoid the need to be reactionary. For example, if agencies switch to flexible online forms and database structures, they will be able to collect, organize, and analyze data in predictable ways going – no matter what the regulation need is. In every workshop, participants noted that ‘how and where people live will change.’ This stresses our need for flexibility in the systems and structures we create to respond to the new ways that people live and work. Participants also noted the need for government to quickly adapt to new technology and regulate companies before for-profit institutions influence policy and decide the rules for themselves.</p>
                                </Accordion.Body>
                            </Accordion.Item>
                            
                        </Accordion>
                    </ul>
                </Col>
                <Col className="section-images">
                    <img src={triangleQuadrant} alt="Notecards, gathering of people, light teal triangle, dark teal triangle" />
                    {/* <Row>
                        <img className="triangle-large" src={topImage} alt="Notecards" />
                        <img className="triangle-large" src={bottomImage} alt="Gathering of People" />
                    </Row>
                    <Row>
                        <img className="triangle-large" src={triangleRight1} alt="Light Teal Triangle"/>
                        <img className="triangle-large" src={triangleRight2} alt="Dark Teal Triangle"/>
                    </Row> */}
                </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Takeaways;