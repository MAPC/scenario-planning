/** @jsx jsx */

import * as React from "react";
import { css, jsx } from '@emotion/react';
import { fonts, themeColors, aboutStyle } from "../utils/theme";
import line from "../assets/line.png"


const About = () => {
    return (
        <div css={aboutStyle}>
            <img src={line} className="line" alt="Decorative Border"/>
            <div className="about-content">
                <h3>2050. 29 Years. It's a long time away.</h3>
                <p>Three decades ago, our region looked very different than it does today. In 1990, cell phones were rare accessories for business executives, and a massive, elevated highway split downtown Boston. Now there’s a high-powered computer in nearly every pocket and a beautiful greenway stretching across the city. It’s hard to know what 2050 will look like, but we can be sure it will not look the same as today.</p>
                <p>Some of the changes will be of our own choosing. Just as the region decided to tear down the Central Artery and build a park in its place, we can take the initiative to build new infrastructure, change development rules, or provide new services and supports to the region’s residents. Yet even as we take charge of our future, the world will be changing around us, and we will be required to respond to conditions and constraints outside of our control.</p>
                <p>Unfortunately, we don’t yet know what those changes will be. There could be new technologies or societal trends that make it easier to achieve our goals, or much harder. The COVID pandemic has shown us just how quickly the world can change and how little certainty we should have about things that seem fixed. MetroCommon acknowledges this unpredictability and seeks to create a framework for responsible long-term planning – even in the context of deep uncertainty.</p>
                <p>Policies tailored to today’s needs may not work in the same way under radically different conditions. For example, it seems like a no-brainer to fix leaky natural gas pipelines that are contributing to climate change; but if technology, federal policy, and market conditions enable rapid electrification of home heating and cooking, those pipelines (and their leaks) may become obsolete by the year 2050. How should the region decide how much, and where, to spend resources on fixing pipes when we don’t know how long those investments will be useful? The way we tackle conundrums such as this one will determine whether the people of 2050 see the decisions of the next few years as prescient, short-sighted, or futile.</p>
                <p>If we hope for prescience, we must be aware of the many uncertainties we face. What are the powerful societal, economic, and political trends that could shape the world? What emerging technologies and practices could have a major impact if they take root? What seemingly inevitable transformations might “fizzle out” leaving the world unchanged?</p>
                <p>Once we have a good sense of key uncertainties, we can assess how those uncertainties might affect the urgency, efficacy, or relevance of potential policy interventions. Some policy ideas are “robust,” meaning they will be effective across a wide range of conditions. These policies can be pursued without much risk. Others may be contingent on external conditions – successful under some, while ineffective or even counterproductive under others. In these cases, it will be critical to track conditions and determine when those policies should be initiated, accelerated, or discontinued, as conditions warrant.</p>
            </div>
        </div>
    )
}

export default About;