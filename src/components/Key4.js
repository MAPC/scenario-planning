/** @jsx jsx */

import React, { useState } from "react";
import { css, jsx } from '@emotion/react';
import samplePDF from "../utils/sample.pdf";
import { Document, Page } from 'react-pdf';


const Key4 = () => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
  
    function onDocumentLoadSuccess({ numPages }) {
      setNumPages(numPages);
    }
    return (
        <div>
            <Document
                file={samplePDF}
                onLoadSuccess={onDocumentLoadSuccess}
            >
                <Page pageNumber={pageNumber}></Page>
            </Document>
            <p>Page {pageNumber} of {numPages}</p>
        </div>
    );
}

export default Key4;
