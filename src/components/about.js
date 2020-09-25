import React from 'react'
import { MdDevices, MdFlightTakeoff, MdLightbulbOutline, MdShowChart } from 'react-icons/md'
import { FaAngleDoubleRight } from 'react-icons/fa'

import Container from './container'

import aboutStyles from './styles/about.module.scss'
import avatar from '../images/avatar.png'

const About = () => (
  <div className={aboutStyles.aboutWrapper} id="about">
    <Container>
      <section className={aboutStyles.about}>
        <div className={aboutStyles.header}>
          <h2>About</h2>
          <div className={aboutStyles.hr}></div>
        </div>
        <div className={aboutStyles.services}>
          <div className={aboutStyles.service}>
            <div className={aboutStyles.icon}><MdDevices size="3.6rem" /></div>
            <h4>Responsive</h4>
            <p>Sites that work on all devices and browsers.</p>
          </div>
          <div className={aboutStyles.service}>
          <div className={aboutStyles.icon}><MdFlightTakeoff size="3.6rem" /></div>
            <h4>Fast</h4>
            <p>Lightning fast load times and interactions.</p>
          </div>
          <div className={aboutStyles.service}>
          <div className={aboutStyles.icon}><MdLightbulbOutline size="3.6rem" /></div>
            <h4>Intuitive</h4>
            <p>A strong focus on great UX and customer success.</p>
          </div>
          <div className={aboutStyles.service}>
          <div className={aboutStyles.icon}><MdShowChart size="3.6rem" /></div>
            <h4>Effective</h4>
            <p>SEO, built-in analytics and successful calls to action.</p>
          </div>
          <div className={aboutStyles.attribution}>Icons made by <a href="https://www.flaticon.local/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.local/" title="Flaticon">www.flaticon.local</a></div>
        </div>
        <div className={aboutStyles.profile}>
          <img className={aboutStyles.avatar} src={avatar} alt="Justin" />
          <h4>Who am I?</h4>
          <p>
            I am a web developer, UX researcher and project manager who builds highly usable, engaging and 
            effective websites and applications with UX best practices and modern development frameworks 
            to deliver fast, responsive, intuitive and effective customer experiences.
          </p>
          {/* <p><a href="#contact">Let's build something together.</a></p> */}
          <p>Let's build something together.</p>
        </div>
        <div className={aboutStyles.skills}>
          <ul>
            <li>
              <div className={`${aboutStyles.fill} ${aboutStyles.fill95}`}>
                <span>HTML</span>
              </div>
            </li>
            <li>
              <div className={`${aboutStyles.fill} ${aboutStyles.fill95}`}>
                <span>CSS</span>
              </div>
            </li>
            <li>
              <div className={`${aboutStyles.fill} ${aboutStyles.fill80}`}>
                <span>Javascript</span>
              </div>
            </li>
            <li>
              <div className={`${aboutStyles.fill} ${aboutStyles.fill60}`}>
                <span>React /Gatsby</span>
              </div>
            </li>
            <li>
              <div className={`${aboutStyles.fill} ${aboutStyles.fill70}`}>
                <span>Git</span>
              </div>
            </li>
            <li>
              <div className={`${aboutStyles.fill} ${aboutStyles.fill60}`}>
                <span>UI Design</span>
              </div>
            </li>
            <li>
              <div className={`${aboutStyles.fill} ${aboutStyles.fill70}`}>
                <span>UX Research</span>
              </div>
            </li>
            <li>
              <div className={`${aboutStyles.fill} ${aboutStyles.fill90}`}>
                <span>Responsive Design</span>
              </div>
            </li>
            <li>
              <div className={`${aboutStyles.fill} ${aboutStyles.fill90}`}>
                <span>SEO</span>
              </div>
            </li>
            <li>
              <div className={`${aboutStyles.fill} ${aboutStyles.fill60}`}>
                <span>Wireframing</span>
              </div>
            </li>
            <li>
              <div className={`${aboutStyles.fill} ${aboutStyles.fill70}`}>
                <span>Prototyping</span>
              </div>
            </li>
            <li>
              <div className={`${aboutStyles.fill} ${aboutStyles.fill50}`}>
                <span>User Journeys</span>
              </div>
            </li>
            <li>
              <div className={`${aboutStyles.fill} ${aboutStyles.fill80}`}>
                <span>Project Management</span>
              </div>
            </li>
          </ul>
        </div>
        {/* <div className={aboutStyles.roles}>
          <div className={aboutStyles.role}>
            <div className={aboutStyles.icon}><FaCode size="3.2rem" /></div>
            <div className={aboutStyles.title}>UI Development</div>
            <div className={aboutStyles.info}>Designing and deploying features, components, and full sites using modern development frameworks and best practices to meet business needs.</div>
          </div>
          <div className={aboutStyles.role}>
            <div className={aboutStyles.icon}><FaFlask size="3.2rem" /></div>
            <div className={aboutStyles.title}>UX Research</div>
            <div className={aboutStyles.info}>Gathering information from users through qualitative and quantitative research methods to understand their needs, wants and paint points.</div>
          </div>
          <div className={aboutStyles.role}>
            <div className={aboutStyles.icon}><FaTasks size="3.2rem" /></div>
            <div className={aboutStyles.title}>Project Management</div>
            <div className={aboutStyles.info}>Managing digital projects from requirements gathering to deployment, ensuring development projects are completed on-time and on-budget while delighting users and meeting business needs.</div>
          </div>
        </div> */}
      </section>
    </Container>
  </div>
)

export default About