import React, { useState } from "react"

import Container from "./container"
import ProjectModal from "./project-modal"

import flyweightThumb from "../images/flyweight-sm.jpg"
import flyweight1 from "../images/flyweight-screen1.jpg"
import flyweight2 from "../images/flyweight-screen2.jpg"
import flyweight3 from "../images/flyweight-screen3.jpg"
import shelbysThumb from "../images/shelbys-screen-sm.jpg"
import shelbys1 from "../images/shelbys-screen-1.jpg"
import shelbys2 from "../images/shelbys-screen-2.jpg"
import shelbys3 from "../images/shelbys-screen-3.jpg"
import shelbys4 from "../images/shelbys-screen-4.jpg"
import shelbys5 from "../images/shelbys-screen-5.jpg"
import newlonsburgThumb from "../images/newlonsburg-sm.jpg"
import newlonsburg1 from "../images/newlonsburg1.jpg"
import newlonsburg2 from "../images/newlonsburg2.jpg"
import pfsThumb from "../images/parasky-flute-studios-sm.jpg"
import pfsScreen1 from "../images/parasky-flute-studios-screen1.jpg"
import pfsScreen2 from "../images/parasky-flute-studios-screen2.jpg"
import pfsScreen3 from "../images/parasky-flute-studios-screen3.jpg"
import pfsScreen4 from "../images/parasky-flute-studios-screen4.jpg"
import pfsScreen5 from "../images/parasky-flute-studios-screen5.jpg"
import pfsScreen6 from "../images/parasky-flute-studios-screen6.jpg"
import bellportThumb from "../images/bellport-screen-sm.jpg"
import bellport1 from "../images/bellport-screen-1.jpg"
import bellport2 from "../images/bellport-screen-2.jpg"
import bellport3 from "../images/bellport-screen-3.jpg"
import chenelSecuritiesThumb from "../images/chenel-securities-sm.jpg"
import chenelScreen1 from "../images/chenel-capital-screen1.jpg"
import chenelScreen2 from "../images/chenel-capital-screen2.jpg"
import chenelScreen3 from "../images/chenel-capital-screen3.jpg"
import chenelScreen4 from "../images/chenel-capital-screen4.jpg"
import chenelScreen5 from "../images/chenel-capital-screen5.jpg"

import styles from "./styles/recent-work.module.css"

const RecentWork = () => {
  const [modal1Open, setModal1Open] = useState(false)
  const [modal2Open, setModal2Open] = useState(false)
  const [modal3Open, setModal3Open] = useState(false)
  const [modal4Open, setModal4Open] = useState(false)
  const [modal5Open, setModal5Open] = useState(false)
  const [modal6Open, setModal6Open] = useState(false)

  return (
    <div id="work" className={styles.worksWrapper}>
      <Container>
        <div className={styles.header}>
          <h2>Recent Work</h2>
          <div className={styles.hr}></div>
        </div>
        <section className={styles.works}>
          <div
            className={styles.work}
            role="button"
            tabIndex={0}
            onClick={() => setModal4Open(true)}
            onKeyDown={ev => {
              if (ev.keyCode === 13) setModal4Open(true)
            }}
          >
            <img src={flyweightThumb} alt="Flyweight screenshot" />
            <div className={styles.workContent}>
              <h3>Flyweight</h3>
              <p className={styles.workDesc}>
                Flweight Digital is a dynamic workout app featuring a 90-Day
                workout designed to build explosiveness, aerobic muscle and
                competitive stamina.
              </p>
            </div>
          </div>
          <ProjectModal
            isActive={modal4Open}
            handleCloseModal={() => setModal4Open(false)}
            title="Flyweight Workout App"
            images={[
              { url: flyweight1 },
              { url: flyweight2 },
              { url: flyweight3 },
            ]}
            description={
              <>
                <p>
                  Flyweight Digital is a custom web-based workout app. The
                  solution features a modern, intuitive, and mobile-first UI
                  that provides users with a simple and easy fitness experience.
                  The app features secure user management and fast, responsive
                  content delivery using best practices and proven technologies.
                </p>
                <p>
                  This web app is built with React and includeds a fully custom
                  admin application, allowing the admin team to manage users,
                  add and update workouts and track usage of their system.
                </p>
              </>
            }
            // link="https://digital.theflyweight.us/"
          />
          <div
            className={styles.work}
            role="button"
            tabIndex={0}
            onClick={() => setModal6Open(true)}
            onKeyDown={ev => {
              if (ev.keyCode === 13) setModal6Open(true)
            }}
          >
            <img src={shelbysThumb} alt="Shelby's of Bellport screenshot" />
            <div className={styles.workContent}>
              <h3>Shelby's of Bellport</h3>
              <p className={styles.workDesc}>
                Shelby's is a family-owned business opening its doors to have
                everyone in the Bellport area be a part of what they love to do
                — serving delicious food with a smile on their faces.
              </p>
            </div>
          </div>
          <ProjectModal
            isActive={modal6Open}
            handleCloseModal={() => setModal6Open(false)}
            title="Shelby's of Bellport"
            images={[
              { url: shelbys1 },
              { url: shelbys2 },
              { url: shelbys3 },
              { url: shelbys4 },
              { url: shelbys5 },
            ]}
            description={
              <>
                <p>
                  The Shelby's of Bellport website is an informational site
                  designed to drive foot traffic into the cafe and drive online
                  ordering. As a small, family-owned business, Shelby's needed a
                  custom solution that provides maximum value with built in
                  content management--and we delivered the perfect solution for
                  their business needs.
                </p>
              </>
            }
            link="https://www.shelbysofbellport.com/"
          />
          <div
            className={styles.work}
            role="button"
            tabIndex={0}
            onClick={() => setModal5Open(true)}
            onKeyDown={ev => {
              if (ev.keyCode === 13) setModal5Open(true)
            }}
          >
            <img src={newlonsburgThumb} alt="Newlonsburg Music screenshot" />
            <div className={styles.workContent}>
              <h3>Newlonsburg Music</h3>
              <p className={styles.workDesc}>
                The Newlonsburg Music Academy website connects music students
                with local instructors and resources to help them learn.
              </p>
            </div>
          </div>
          <ProjectModal
            isActive={modal5Open}
            handleCloseModal={() => setModal5Open(false)}
            title="Newlonsburg Music Academy"
            images={[{ url: newlonsburg1 }, { url: newlonsburg2 }]}
            description={
              <>
                <p>
                  The Newlonsburg Music Academy website is an informational site
                  with custom design and contact form. The site features a clean
                  and modern design, built for all browsers, devices and screen
                  sizes and optimized for search engines and fast load times.
                </p>
              </>
            }
            link="https://www.newlonsburgmusic.com/"
          />
          <div
            className={styles.work}
            role="button"
            tabIndex={0}
            onClick={() => setModal2Open(true)}
            onKeyDown={ev => {
              if (ev.keyCode === 13) setModal2Open(true)
            }}
          >
            <img src={pfsThumb} alt="Parasky Flute Studios screenshot" />
            <div className={styles.workContent}>
              <h3>Parasky Flute Studios</h3>
              <p className={styles.workDesc}>
                paraskyflutestudios.com is a modern small business website
                designed to drive conversions of new online business for the
                studio in a virtual world.
              </p>
            </div>
          </div>
          <ProjectModal
            isActive={modal2Open}
            handleCloseModal={() => setModal2Open(false)}
            title="Parasky Flute Studios"
            images={[
              { url: pfsScreen1 },
              { url: pfsScreen2 },
              { url: pfsScreen3 },
              { url: pfsScreen4 },
              { url: pfsScreen5 },
              { url: pfsScreen6 },
            ]}
            description={
              <>
                <p>
                  Parasky Flute Studios is a private music studio offering music
                  lessons in the greater Pittsburgh area as well as virtually to
                  students around the world. They approched me to help them
                  rebuild their online presence, improve SEO, and increase
                  conversions of new online students.
                </p>
                <p>
                  Built with GatsbyJS and a Contentful integration,
                  paraskyflutestudios.com is a fast, dynamic,responsive and easy
                  to maintain website designed to drive sales through an
                  exceptional user experience.
                </p>
              </>
            }
            link="https://paraskyflutestudios.com"
          />
          <div
            className={styles.work}
            role="button"
            tabIndex={0}
            onClick={() => setModal3Open(true)}
            onKeyDown={ev => {
              if (ev.keyCode === 13) setModal3Open(true)
            }}
          >
            <img src={bellportThumb} alt="Bellport Brewing screenshot" />
            <div className={styles.workContent}>
              <h3>Bellport Brewing Company</h3>
              <p className={styles.workDesc}>
                A small business website designed to keep customers up to date
                on the brewery's latest information.
              </p>
            </div>
          </div>
          <ProjectModal
            isActive={modal3Open}
            handleCloseModal={() => setModal3Open(false)}
            title="Bellport Brewing Company"
            images={[
              { url: bellport1 },
              { url: bellport2 },
              { url: bellport3 },
            ]}
            description={
              <>
                <p>
                  The Bellport Brewing Company website is an informational site
                  designed to drive traffic into the brewery and keep customers
                  up-to-date. As a small, family-owned business, Bellport
                  Brewing Company needed a custom solution that provides maximum
                  value with built in content management--and we delivered the
                  perfect solution for their business needs.
                </p>
              </>
            }
            link="https://bellportbrewing.com/"
          />
          <div
            className={styles.work}
            role="button"
            tabIndex={0}
            onClick={() => setModal1Open(true)}
            onKeyDown={ev => {
              if (ev.keyCode === 13) setModal1Open(true)
            }}
          >
            <img src={chenelSecuritiesThumb} alt="Chenel Capital screenshot" />
            <div className={styles.workContent}>
              <h3>Chenel Capital</h3>
              <p className={styles.workDesc}>
                Chenel Capital is an innovative, Manhattan-based private equity
                firm that specializing in growth, venture, and angel stage
                investments.
              </p>
            </div>
          </div>
          <ProjectModal
            isActive={modal1Open}
            handleCloseModal={() => setModal1Open(false)}
            title="Chenel Capital"
            images={[
              { url: chenelScreen1 },
              { url: chenelScreen2 },
              { url: chenelScreen3 },
              { url: chenelScreen4 },
              { url: chenelScreen5 },
            ]}
            description={
              <>
                <p>
                  Chenel Capital is an innovative, Manhattan-based private
                  equity firm that specializing in growth, venture, and angel
                  stage investments. They approached me to build a clean,
                  professional, and minimalistic website with them that
                  showcases their phenomenal team and modern appraoch in the
                  industry.
                </p>
                <p>
                  Built with GatsbyJS, chenelcapital.com is a fast, dynamic,
                  responsive and easy to maintain website with a powerful news
                  publishing feature.
                </p>
              </>
            }
            link="https://chenelcapital.com"
          />
        </section>
      </Container>
    </div>
  )
}

export default RecentWork
