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
                <p>29 years ago our region looked completely different. In the early 1990s there was no massive internet infrastructure, cell phones were just starting to come into existence, and the City of Boston had a massive highway running down the middle of the city where the Greenway currently exists. It’s hard to know what 2050 may look like, but we do know one thing for sure. The future will be different than it is today.</p>                
                <p>One of the reasons planning for the next 29 years is so complicated is because the future is based on things both inside and outside of our control at the regional level. This plan is just part of our opportunity, and responsibility to our future selves and future residents of the region, to plan for that uncertainty.</p>
                <p>Because there are many uncertainties that will come our way between now and 2050 we need to realize that policies tailored to today’s needs may not work in the same way under different conditions. For example, focusing on repairing natural gas pipeline leaks may be a priority today, however, if natural gas becomes obsolete in the future repairing this infrastructure may not be critical anymore.</p>
                <p>Planning has largely relied on projections of what the future will look like—how much growth, how many jobs, how much traffic—to think about our future. While these projections are helpful, they are also flawed. They assume that the trends of the past will continue going forward. In this plan we have pushed ourselves to think about what it means to be prepared for the future, even if we don’t know what the future looks like.</p>
                <p>This section explores three key uncertainties that were developed from a group of both internal and external advisory groups. They were chosen due to their high likelihood of experiencing change, and their large impact on the region.</p>
            </div>
        </div>
    )
}

export default About;