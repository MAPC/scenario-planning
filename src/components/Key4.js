/** @jsx jsx */

import React, { useState } from "react";
import { css, jsx } from '@emotion/react';


const Key4 = () => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
  
    function onDocumentLoadSuccess({ numPages }) {
      setNumPages(numPages);
    }
    return (
        <div>
        </div>
    );
}

export default Key4;
