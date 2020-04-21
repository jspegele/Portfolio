import React from 'react';

const AboutSection = () => (
  <section className="about" id="about">
    <div className="container about__container">
      <div className="about__overview">
        I am a UX-focused developer and project manager who has led projects focused on highly usable, engaging and effective websites and applications built with UX best practices and modern development frameworks to deliver exciting and memorable customer experiences.
      </div>
      <div className="about__roles">
        <div className="about__role">
          <div className="role__icon"><i class="fas fa-code"></i></div>
          <div className="role__title">UI Development</div>
          <div className="role__info">Designing and deploying features, components, and full sites using modern development frameworks and best practices to meet business needs.</div>
        </div>
        <div className="about__role">
          <div className="role__icon"><i class="fas fa-flask"></i></div>
          <div className="role__title">UX Research</div>
          <div className="role__info">Gathering information from users through qualitative and quantitative research methods to understand their needs, wants and paint points.</div>
        </div>
        <div className="about__role">
          <div className="role__icon"><i class="fas fa-tasks"></i></div>
          <div className="role__title">Project Management</div>
          <div className="role__info">Managing digital projects from requirements gathering to deployment, ensuring development projects are completed on-time and on-budget while delighting users and meeting business needs.</div>
        </div>
      </div>
      <div className="about__links">

      </div>
    </div>
  </section>
);

export default AboutSection;