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
// import { Accordion } from "mapc-design-system";
import Accordion from "react-bootstrap/Accordion"

const Takeaways = () => {
    return (
        <div>
            <Container css={sectionStyle1}>
                <Row>
                <Col className="section-content" md={6} lg={6}>
                    <h3>Key Takeaways from Engagement</h3>
                    <p>Over the course of the MetroCommon planning effort we engaged people in the region to better understand what it means to be ready for uncertainty. Our discussions led to <span className="teal-text">10 main takeaways</span> to better plan for policy and action going forward.</p>      
                    <ul>
                        <Accordion flush bsPrefix="accordion">
                            <Accordion.Item eventKey="0" bsPrefix="accordion-item">
                                <Accordion.Header bsPrefix="accordion-header">Increased equity among residents enables us to be a more resilient region</Accordion.Header>
                                <Accordion.Body>
                                    <p>29 years ago our region looked completely different. In the early 1990s there was no massive internet infrastructure, cell phones were just starting to come into existence, and the City of Boston had a massive highway running down the middle of the city where the Greenway currently exists. It’s hard to know what 2050 may look like, but we do know one thing for sure. The future will be different than it is today.</p>                
                                    <p>One of the reasons planning for the next 29 years is so complicated is because the future is based on things both inside and outside of our control at the regional level. This plan is just part of our opportunity, and responsibility to our future selves and future residents of the region, to plan for that uncertainty.</p>
                                    <p>Because there are many uncertainties that will come our way between now and 2050 we need to realize that policies tailored to today’s needs may not work in the same way under different conditions. For example, focusing on repairing natural gas pipeline leaks may be a priority today, however, if natural gas becomes obsolete in the future repairing this infrastructure may not be critical anymore.</p>
                                    <p>Planning has largely relied on projections of what the future will look like—how much growth, how many jobs, how much traffic—to think about our future. While these projections are helpful, they are also flawed. They assume that the trends of the past will continue going forward. In this plan we have pushed ourselves to think about what it means to be prepared for the future, even if we don’t know what the future looks like.</p>
                                    <p>This section explores three key uncertainties that were developed from a group of both internal and external advisory groups. They were chosen due to their high likelihood of experiencing change, and their large impact on the region.</p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>We need to find incentives beyond profit to get to our goals</Accordion.Header>
                                <Accordion.Body>
                                    <p>29 years ago our region looked completely different. In the early 1990s there was no massive internet infrastructure, cell phones were just starting to come into existence, and the City of Boston had a massive highway running down the middle of the city where the Greenway currently exists. It’s hard to know what 2050 may look like, but we do know one thing for sure. The future will be different than it is today.</p>                
                                    <p>One of the reasons planning for the next 29 years is so complicated is because the future is based on things both inside and outside of our control at the regional level. This plan is just part of our opportunity, and responsibility to our future selves and future residents of the region, to plan for that uncertainty.</p>
                                    <p>Because there are many uncertainties that will come our way between now and 2050 we need to realize that policies tailored to today’s needs may not work in the same way under different conditions. For example, focusing on repairing natural gas pipeline leaks may be a priority today, however, if natural gas becomes obsolete in the future repairing this infrastructure may not be critical anymore.</p>
                                    <p>Planning has largely relied on projections of what the future will look like—how much growth, how many jobs, how much traffic—to think about our future. While these projections are helpful, they are also flawed. They assume that the trends of the past will continue going forward. In this plan we have pushed ourselves to think about what it means to be prepared for the future, even if we don’t know what the future looks like.</p>
                                    <p>This section explores three key uncertainties that were developed from a group of both internal and external advisory groups. They were chosen due to their high likelihood of experiencing change, and their large impact on the region.</p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>We can’t think ‘in aggregate:’ Without centering vulnerable populations in policy conversations, future uncertainty can lead to further inequities</Accordion.Header>
                                <Accordion.Body>
                                    <p>29 years ago our region looked completely different. In the early 1990s there was no massive internet infrastructure, cell phones were just starting to come into existence, and the City of Boston had a massive highway running down the middle of the city where the Greenway currently exists. It’s hard to know what 2050 may look like, but we do know one thing for sure. The future will be different than it is today.</p>                
                                    <p>One of the reasons planning for the next 29 years is so complicated is because the future is based on things both inside and outside of our control at the regional level. This plan is just part of our opportunity, and responsibility to our future selves and future residents of the region, to plan for that uncertainty.</p>
                                    <p>Because there are many uncertainties that will come our way between now and 2050 we need to realize that policies tailored to today’s needs may not work in the same way under different conditions. For example, focusing on repairing natural gas pipeline leaks may be a priority today, however, if natural gas becomes obsolete in the future repairing this infrastructure may not be critical anymore.</p>
                                    <p>Planning has largely relied on projections of what the future will look like—how much growth, how many jobs, how much traffic—to think about our future. While these projections are helpful, they are also flawed. They assume that the trends of the past will continue going forward. In this plan we have pushed ourselves to think about what it means to be prepared for the future, even if we don’t know what the future looks like.</p>
                                    <p>This section explores three key uncertainties that were developed from a group of both internal and external advisory groups. They were chosen due to their high likelihood of experiencing change, and their large impact on the region.</p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>Flexibility is Key: We need fluidity in our systems and structures to respond to new challenges and opportunities</Accordion.Header>
                                <Accordion.Body>
                                    <p>29 years ago our region looked completely different. In the early 1990s there was no massive internet infrastructure, cell phones were just starting to come into existence, and the City of Boston had a massive highway running down the middle of the city where the Greenway currently exists. It’s hard to know what 2050 may look like, but we do know one thing for sure. The future will be different than it is today.</p>                
                                    <p>One of the reasons planning for the next 29 years is so complicated is because the future is based on things both inside and outside of our control at the regional level. This plan is just part of our opportunity, and responsibility to our future selves and future residents of the region, to plan for that uncertainty.</p>
                                    <p>Because there are many uncertainties that will come our way between now and 2050 we need to realize that policies tailored to today’s needs may not work in the same way under different conditions. For example, focusing on repairing natural gas pipeline leaks may be a priority today, however, if natural gas becomes obsolete in the future repairing this infrastructure may not be critical anymore.</p>
                                    <p>Planning has largely relied on projections of what the future will look like—how much growth, how many jobs, how much traffic—to think about our future. While these projections are helpful, they are also flawed. They assume that the trends of the past will continue going forward. In this plan we have pushed ourselves to think about what it means to be prepared for the future, even if we don’t know what the future looks like.</p>
                                    <p>This section explores three key uncertainties that were developed from a group of both internal and external advisory groups. They were chosen due to their high likelihood of experiencing change, and their large impact on the region.</p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header>Thinking proactively about systems and structures can help avoid needing to think reactively</Accordion.Header>
                                <Accordion.Body>
                                    <p>29 years ago our region looked completely different. In the early 1990s there was no massive internet infrastructure, cell phones were just starting to come into existence, and the City of Boston had a massive highway running down the middle of the city where the Greenway currently exists. It’s hard to know what 2050 may look like, but we do know one thing for sure. The future will be different than it is today.</p>                
                                    <p>One of the reasons planning for the next 29 years is so complicated is because the future is based on things both inside and outside of our control at the regional level. This plan is just part of our opportunity, and responsibility to our future selves and future residents of the region, to plan for that uncertainty.</p>
                                    <p>Because there are many uncertainties that will come our way between now and 2050 we need to realize that policies tailored to today’s needs may not work in the same way under different conditions. For example, focusing on repairing natural gas pipeline leaks may be a priority today, however, if natural gas becomes obsolete in the future repairing this infrastructure may not be critical anymore.</p>
                                    <p>Planning has largely relied on projections of what the future will look like—how much growth, how many jobs, how much traffic—to think about our future. While these projections are helpful, they are also flawed. They assume that the trends of the past will continue going forward. In this plan we have pushed ourselves to think about what it means to be prepared for the future, even if we don’t know what the future looks like.</p>
                                    <p>This section explores three key uncertainties that were developed from a group of both internal and external advisory groups. They were chosen due to their high likelihood of experiencing change, and their large impact on the region.</p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="5">
                                <Accordion.Header>All policy decisions are inter-connected</Accordion.Header>
                                <Accordion.Body>
                                    <p>29 years ago our region looked completely different. In the early 1990s there was no massive internet infrastructure, cell phones were just starting to come into existence, and the City of Boston had a massive highway running down the middle of the city where the Greenway currently exists. It’s hard to know what 2050 may look like, but we do know one thing for sure. The future will be different than it is today.</p>                
                                    <p>One of the reasons planning for the next 29 years is so complicated is because the future is based on things both inside and outside of our control at the regional level. This plan is just part of our opportunity, and responsibility to our future selves and future residents of the region, to plan for that uncertainty.</p>
                                    <p>Because there are many uncertainties that will come our way between now and 2050 we need to realize that policies tailored to today’s needs may not work in the same way under different conditions. For example, focusing on repairing natural gas pipeline leaks may be a priority today, however, if natural gas becomes obsolete in the future repairing this infrastructure may not be critical anymore.</p>
                                    <p>Planning has largely relied on projections of what the future will look like—how much growth, how many jobs, how much traffic—to think about our future. While these projections are helpful, they are also flawed. They assume that the trends of the past will continue going forward. In this plan we have pushed ourselves to think about what it means to be prepared for the future, even if we don’t know what the future looks like.</p>
                                    <p>This section explores three key uncertainties that were developed from a group of both internal and external advisory groups. They were chosen due to their high likelihood of experiencing change, and their large impact on the region.</p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="6">
                                <Accordion.Header>We need to plan for what we do know: Everything hinges on climate change</Accordion.Header>
                                <Accordion.Body>
                                    <p>29 years ago our region looked completely different. In the early 1990s there was no massive internet infrastructure, cell phones were just starting to come into existence, and the City of Boston had a massive highway running down the middle of the city where the Greenway currently exists. It’s hard to know what 2050 may look like, but we do know one thing for sure. The future will be different than it is today.</p>                
                                    <p>One of the reasons planning for the next 29 years is so complicated is because the future is based on things both inside and outside of our control at the regional level. This plan is just part of our opportunity, and responsibility to our future selves and future residents of the region, to plan for that uncertainty.</p>
                                    <p>Because there are many uncertainties that will come our way between now and 2050 we need to realize that policies tailored to today’s needs may not work in the same way under different conditions. For example, focusing on repairing natural gas pipeline leaks may be a priority today, however, if natural gas becomes obsolete in the future repairing this infrastructure may not be critical anymore.</p>
                                    <p>Planning has largely relied on projections of what the future will look like—how much growth, how many jobs, how much traffic—to think about our future. While these projections are helpful, they are also flawed. They assume that the trends of the past will continue going forward. In this plan we have pushed ourselves to think about what it means to be prepared for the future, even if we don’t know what the future looks like.</p>
                                    <p>This section explores three key uncertainties that were developed from a group of both internal and external advisory groups. They were chosen due to their high likelihood of experiencing change, and their large impact on the region.</p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="7">
                                <Accordion.Header>Policies disincentives and incentives should center equity. All policies should make our desired choice the path of least resistance</Accordion.Header>
                                <Accordion.Body>
                                    <p>29 years ago our region looked completely different. In the early 1990s there was no massive internet infrastructure, cell phones were just starting to come into existence, and the City of Boston had a massive highway running down the middle of the city where the Greenway currently exists. It’s hard to know what 2050 may look like, but we do know one thing for sure. The future will be different than it is today.</p>                
                                    <p>One of the reasons planning for the next 29 years is so complicated is because the future is based on things both inside and outside of our control at the regional level. This plan is just part of our opportunity, and responsibility to our future selves and future residents of the region, to plan for that uncertainty.</p>
                                    <p>Because there are many uncertainties that will come our way between now and 2050 we need to realize that policies tailored to today’s needs may not work in the same way under different conditions. For example, focusing on repairing natural gas pipeline leaks may be a priority today, however, if natural gas becomes obsolete in the future repairing this infrastructure may not be critical anymore.</p>
                                    <p>Planning has largely relied on projections of what the future will look like—how much growth, how many jobs, how much traffic—to think about our future. While these projections are helpful, they are also flawed. They assume that the trends of the past will continue going forward. In this plan we have pushed ourselves to think about what it means to be prepared for the future, even if we don’t know what the future looks like.</p>
                                    <p>This section explores three key uncertainties that were developed from a group of both internal and external advisory groups. They were chosen due to their high likelihood of experiencing change, and their large impact on the region.</p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="8">
                                <Accordion.Header>Who is a government? We must change systems to better share decision making power</Accordion.Header>
                                <Accordion.Body>
                                    <p>29 years ago our region looked completely different. In the early 1990s there was no massive internet infrastructure, cell phones were just starting to come into existence, and the City of Boston had a massive highway running down the middle of the city where the Greenway currently exists. It’s hard to know what 2050 may look like, but we do know one thing for sure. The future will be different than it is today.</p>                
                                    <p>One of the reasons planning for the next 29 years is so complicated is because the future is based on things both inside and outside of our control at the regional level. This plan is just part of our opportunity, and responsibility to our future selves and future residents of the region, to plan for that uncertainty.</p>
                                    <p>Because there are many uncertainties that will come our way between now and 2050 we need to realize that policies tailored to today’s needs may not work in the same way under different conditions. For example, focusing on repairing natural gas pipeline leaks may be a priority today, however, if natural gas becomes obsolete in the future repairing this infrastructure may not be critical anymore.</p>
                                    <p>Planning has largely relied on projections of what the future will look like—how much growth, how many jobs, how much traffic—to think about our future. While these projections are helpful, they are also flawed. They assume that the trends of the past will continue going forward. In this plan we have pushed ourselves to think about what it means to be prepared for the future, even if we don’t know what the future looks like.</p>
                                    <p>This section explores three key uncertainties that were developed from a group of both internal and external advisory groups. They were chosen due to their high likelihood of experiencing change, and their large impact on the region.</p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="9">
                                <Accordion.Header>Responding to future changes provides an opportunity to ‘rebalance prioritization’ and express our values</Accordion.Header>
                                <Accordion.Body>
                                    <p>29 years ago our region looked completely different. In the early 1990s there was no massive internet infrastructure, cell phones were just starting to come into existence, and the City of Boston had a massive highway running down the middle of the city where the Greenway currently exists. It’s hard to know what 2050 may look like, but we do know one thing for sure. The future will be different than it is today.</p>                
                                    <p>One of the reasons planning for the next 29 years is so complicated is because the future is based on things both inside and outside of our control at the regional level. This plan is just part of our opportunity, and responsibility to our future selves and future residents of the region, to plan for that uncertainty.</p>
                                    <p>Because there are many uncertainties that will come our way between now and 2050 we need to realize that policies tailored to today’s needs may not work in the same way under different conditions. For example, focusing on repairing natural gas pipeline leaks may be a priority today, however, if natural gas becomes obsolete in the future repairing this infrastructure may not be critical anymore.</p>
                                    <p>Planning has largely relied on projections of what the future will look like—how much growth, how many jobs, how much traffic—to think about our future. While these projections are helpful, they are also flawed. They assume that the trends of the past will continue going forward. In this plan we have pushed ourselves to think about what it means to be prepared for the future, even if we don’t know what the future looks like.</p>
                                    <p>This section explores three key uncertainties that were developed from a group of both internal and external advisory groups. They were chosen due to their high likelihood of experiencing change, and their large impact on the region.</p>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </ul>
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