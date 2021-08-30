/** @jsx jsx */

import * as React from "react";
import { css, jsx } from '@emotion/react';
import { fonts, themeColors } from "../utils/theme";

const contentContainer = css`
    width: 100vw;
    height: auto;
    padding: 2vh 0;
    color: ${themeColors.white};
    background: ${themeColors.indigo};
`;

const contentPage = css`
    margin: 0 20vw 0 23vw;
    > h3 {
        font-size: 14px;
        font-family: ${fonts.calibre};
        color: ${themeColors.white};
        text-transform: uppercase;
        letter-spacing: 2px;
        margin-bottom: 30px;
    }
    > p {
        font-size: 12px;
        font-family: ${fonts.swiftNeueLtPro};
    }
`;

const About = () => {
    return (
        <div className="content-container" css={contentContainer}>
            <div className="content-page" css={contentPage}>
            <h3>About Scenario Planning</h3>
            <p>MetroCommon is a long-term plan for our region. Released in 2021, it looks out to the year 2050, a period of 29 years, or nearly three decades. It’s a long time away, but even as we focus on the needs of today and tomorrow, we need to think about how our present-day actions will set us up for a sustainable, equitable, and prosperous region thirty years from now.</p>
            <p>Three decades ago, our region looked very different than it does today. In 1990, cell phones were rare accessories for business executives, it was common to have children in your early 20s, and the City of Boston had a massive elevated highway running through the middle of downtown. Now we have the world at our fingertips with a high-powered computer in nearly every pocket, adults are having children in their 30s and 40s, and there’s beautiful greenway stretching from South Station to North Station in Boston. It’s hard to know what 2050 will look like, but we can be sure it will not look the same as today. </p>
            <p>Some of the changes over the next three decades will be of our own choosing. Just as the region decided to tear down the Central Artery and build a park in its place, we can take the initiative to build new infrastructure, change development rules, or provide new services and supports to the region’s residents. Yet even as we take agency about our future, the world will be changing around us, and we will be required to respond to conditions and constraints that are outside of our control at the regional level.  </p>
            <p>Unfortunately, we don’t yet know what those changes will be. There could be new technologies or societal trends that make it easier to achieve our goals, or much harder. The COVID pandemic has shown us just how quickly the world can change and how little certainty we should have about things that seem fixed. MetroCommon acknowledges this unpredictability and seeks to create a framework for responsible long-term planning even in the context of deep uncertainty.</p>
            <p>Policies tailored to today’s needs may not work in the same way under radically different conditions. For example, it seems loke a no-brainer to fix leaky natural gas pipelines that are contributing to climate change; but if technology, federal policy, and market conditions enable rapid electrification of home heating and cooking, those pipelines (and their leaks) may become obsolete by the year 2050. How should the region decide how much, and where, to spend resources on fixing pipes when we don’t know how long those investments will be useful?</p>
            <p>The way we tackle conundrums such as this one will determine whether the people of 2050 see the decisions of the next few years as prescient, short-sighted, or futile. If we hope to be prescient, then the first step is to be cognizant of the many uncertainties we face in planning. What are the powerful societal, economic, and political trends that could shape the world in which we operate? What emerging technologies and practices could have a major impact if they take root? What seemingly inevitable transformations might “fizzle out” leaving the world unchanged?</p>
            <p>Once we have a good sense of key uncertainties facing the region, we can begin assessing how those uncertainties might affect the urgency, efficacy, or relevance of potential policy interventions. Some policy ideas are “robust,” meaning they will be effective across a wide range of conditions. These policies can be pursued without much risk. Others may be contingent on external conditions—successful under some, while ineffective or even counterproductive under others. In these cases, it will be critical to track conditions and determine when those policies should be initiated, accelerated, or discontinued, as conditions warrant.</p>
            <p>With the assistance of public participants, external advisors, and extensive research, MAPC has identified four key uncertainties that are likely to have an outsized impact on the region’s future. While it is certainly not a comprehensive assessment of all the uncertainties facing the region, these four “Key Uncertainties” will determine much of the landscape in which regional policymaking and change takes place.</p>
            <p>To read more about each of the uncertainties and their potential impacts on the region please click on them below:</p>
            </div>
        </div>
    )
}

export default About