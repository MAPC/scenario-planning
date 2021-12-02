/** @jsx jsx */
/** @jsxRuntime classic */

import * as React from "react";
import { css, jsx } from '@emotion/react';
import { themeColors, footerStyle } from "../utils/theme";
import { Footer, SocialNav } from "mapc-design-system";
import logo from "../assets/branding/mapc-logo.svg";

const FooterComponent = () => {

    return (
        <div css={footerStyle}>
            <div id="desktop">
                <Footer
                    backgroundColor="rgba(3,51,45,1)"
                    fontColor="#FFFFFF"
                    maxWidth={1366}
                    paddingLeft={50}
                    paddingRight={50}
                />
            </div>
            <div id="mobile">
                <div className="section about">
                    <h3>About MAPC</h3>
                    <p>The Metropolitan Area Planning Council (MAPC) is the regional planning agency serving the people who live and work in the 101 cities and towns of Metropolitan Boston.</p>
                </div>
                <div className="section contact">
                    <h3>Contact Us</h3>
                    <p>60 Temple Pl.</p>
                    <p>Boston, MA 02111</p>
                    <p>617-933-0700</p>
                </div>
                <div className="section explore">
                    <h3>Explore</h3>
                    <a href="https://metrocommon.mapc.org/"><p>MetroCommon</p></a>
                    <a href="https://datacommon.mapc.org/"><p>DataCommon</p></a>
                    <a href="https://www.massbuilds.com/map"><p>MassBuilds</p></a>
                    <a href="https://trailmap.mapc.org/"><p>Trailmap</p></a>
                </div>
                <div className="section social">
                    <a href="https://www.mapc.org/"><img src={logo} /></a>
                    <SocialNav color="#ffffff" />
                </div>
            </div>
        </div>
    )
}

export default FooterComponent;