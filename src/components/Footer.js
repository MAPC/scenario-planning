/** @jsx jsx */
/** @jsxRuntime classic */

import * as React from "react";
import { css, jsx } from '@emotion/react';
import { themeColors } from "../utils/theme";
import { Footer } from "mapc-design-system";

const FooterComponent = () => {

    return (
        <Footer
            backgroundColor="rgba(3,51,45,1)"
            fontColor="#FFFFFF"
            maxWidth={1366}
            paddingLeft={50}
            paddingRight={50}
        />
    )
}

export default FooterComponent;