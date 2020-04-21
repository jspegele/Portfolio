import React from 'react';

const PortfolioPage = (props) => (
  <div>
    <h1>Portfolio item {props.match.params.id}</h1>
    <p>Here is the portfolio item</p>
  </div>
);

export default PortfolioPage;