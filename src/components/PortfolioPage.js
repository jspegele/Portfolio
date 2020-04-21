import React from 'react';
import { Link } from 'react-router-dom';

const PortfolioPage = () => (
  <div>
    <h1>My Work</h1>
    <p>Check out some of the projects I've done:</p>
    <Link to='/portfolio/1'>Portfolio Item One</Link>
    <Link to='/portfolio/2'>Portfolio Item Two</Link>
  </div>
);

export default PortfolioPage;