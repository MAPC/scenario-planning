/** @jsx jsx */

import * as React from "react";
import { css, jsx } from '@emotion/react';

const Footer = () => {
    return (
        <div>
            <h1>Footer</h1>
            <footer class="footer">
                <div class="footer__container">
                    <div class="footer__section-about">
                        <h2>
                            {/* <%= t('footer.about_mapc') %> */}
                        </h2>
                        <p>The Metropolitan Area Planning Council (MAPC) is the regional planning agency serving the people who live and work in the 101 cities and towns of Metropolitan Boston.</p>
                    </div>
                    <div class="footer__section-links">
                        <h2>Quick Links</h2>
                        <ul class="footer__links">
                            <li><a href="/">Home</a></li>
                            <li><a href="/process-details">Process Details</a></li>
                            <li><a href="/events">Events</a></li>
                            {/* <li><a href="<%= (Mobility.locale != Refinery::I18n.config.default_locale ? "/#{Mobility.locale.to_s}" : "" ) %>/privacy-policy"> */}
                                {/* // <%= t('footer.privacy_policy') %></a></li> */}
                        </ul>
                    </div>
                    <div class="footer__section-explore">
                        <h2>Explore</h2>
                        <ul class="footer__links">
                            <li><a rel="noopener noreferrer" target="_blank" href="https://www.mapc.org/about-mapc/staff/">Staff</a></li>
                            <li><a rel="noopener noreferrer" target="_blank" href="https://www.mapc.org/get-involved/metrofuture-our-regional-plan/">MetroFuture</a></li>
                            <li><a rel="noopener noreferrer" target="_blank" href="https://datacommon.mapc.org/">DataCommon</a></li>
                            <li><a rel="noopener noreferrer" target="_blank" href="https://www.massbuilds.com/">MassBuilds</a></li>
                            <li><a rel="noopener noreferrer" target="_blank" href="https://trailmap.mapc.org/">Trailmap</a></li>
                        </ul>
                    </div>
                    <div class="footer__section-contact">
                        <h2>Contact Us</h2>
                        {/* <address>
                            60 Temple Pl.<br>
                            Boston MA 02111<br>
                            <a href="tel:6179330700">617-933-0700</a>
                        </address> */}
                        <p class="footer__section-contact-web">
                            <a href="/">metrocommon.mapc.org</a>
                        </p>
                    </div>
                    <div class="footer__section-images-logo">
                    {/* <%= link_to 'https://www.mapc.org/', class: 'footer-mapc-brand' do %> */}
                    {/* <%= image_tag("mapc-logo.svg", class: "footer_section-images-logo", alt: t('logo_alt')) %> */}
                    {/* <% end %> */}
                    </div>
                    <div class="footer__section-images-cta">
                    <a class="button" rel="noopener noreferrer" href="<%= CONSTANT_CONTACT_LANDING_PAGE %>" target="_blank">Receive Updates</a>
                    </div>
                    <div class="footer__section-images-social">
                    <a aria-label="MAPC Twitter Page" href="https://twitter.com/mapcmetroboston">
                        {/* <%= fa_icon "twitter" %> */} </a>
                    <a aria-label="MAPC Instagram Page" href="https://www.instagram.com/mapcmetroboston">
                        {/* <%= fa_icon "instagram" %> */} </a>
                    <a aria-label="MAPC Facebook Page" href="https://www.facebook.com/mapcmetroboston">
                        {/* <%= fa_icon "facebook" %> */} </a>
                    <a aria-label="MAPC LinkedIn Page" href="https://www.linkedin.com/company/metropolitan-area-planning-council/">
                        {/* <%= fa_icon "linkedin" %> */} </a>
                    </div>
                </div>
            </footer>

        </div>
    )
}

export default Footer