import React from "react";
import Link from "gatsby-link";

const IndexPage = () => (
  <div>
    <h1>Joshi's PORTFOLIO!</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
    <br />
    <Link to="/page-3">New Page!</Link>
  </div>
);

export default IndexPage;