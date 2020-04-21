import React from 'react';

const HeroSection = () => (
  <section className="hero" id="top">
    <div className="hero__overlay">
      <div className="container hero__container">
        <img src="/images/profile-pic.png" alt="Justin" />
        <h1 className="hero__title">I'm Justin Spegele</h1>
        <h3 className="hero__tagline">A user experience researcher, UI developer, and digital project manager helping small companies and large enterprises on their UX journeys.</h3>
      </div>
    </div>
  </section>
);

export default HeroSection;