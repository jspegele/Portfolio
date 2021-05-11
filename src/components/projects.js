import React, { useState } from "react"
import {
  FaPenSquare,
  FaBitcoin,
  FaPiggyBank,
  FaGamepad,
  FaRegCommentDots,
  FaGithub
} from "react-icons/fa"
import { RiTerminalWindowFill } from "react-icons/ri"

import Container from "./container"
import ProjectModal from "./project-modal"

import pfsThumb from "../images/parasky-flute-studios-sm.jpg"
import pfsScreen1 from "../images/parasky-flute-studios-screen1.jpg"
import pfsScreen2 from "../images/parasky-flute-studios-screen2.jpg"
import pfsScreen3 from "../images/parasky-flute-studios-screen3.jpg"
import pfsScreen4 from "../images/parasky-flute-studios-screen4.jpg"
import pfsScreen5 from "../images/parasky-flute-studios-screen5.jpg"
import pfsScreen6 from "../images/parasky-flute-studios-screen6.jpg"
import chenelSecuritiesThumb from "../images/chenel-securities-sm.jpg"
import chenelScreen1 from "../images/chenel-capital-screen1.jpg"
import chenelScreen2 from "../images/chenel-capital-screen2.jpg"
import chenelScreen3 from "../images/chenel-capital-screen3.jpg"
import chenelScreen4 from "../images/chenel-capital-screen4.jpg"
import chenelScreen5 from "../images/chenel-capital-screen5.jpg"
import crwnClothingThumb from "../images/crwn-clothing-sm.jpg"
import crwnClothingLarge from "../images/crwn-clothing-lg.jpg"
import styles from "./styles/projects.module.scss"
import buttonStyles from "./styles/buttons.module.scss"

const Projects = () => {
  const [modal1Open, setModal1Open] = useState(false)
  const [modal2Open, setModal2Open] = useState(false)
  const [modal3Open, setModal3Open] = useState(false)

  return (
    <div id="work" className={styles.projectsWrapper}>
      <Container>
        <div className={styles.header}>
          <h2>Recent Work</h2>
          <div className={styles.hr}></div>
        </div>
        <section className={styles.works}>
          <div className={styles.work} role="button" tabIndex={0} onClick={() => setModal2Open(true)} onKeyDown={(ev) => {if (ev.keyCode === 13) setModal2Open(true)}}>
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
                  students around the world. They approched me to help them rebuild
                  their online presence, improve SEO, and increase conversions of
                  new online students.
                </p>
                <p>
                  Built with GatsbyJS and a Contentful integration, paraskyflutestudios.com 
                  is a fast, dynamic,responsive and easy to maintain website designed 
                  to drive sales through an exceptional user experience.
                </p>
              </>
            }
            link="https://paraskyflutestudios.com"
          />
          <div className={styles.work} role="button" tabIndex={0} onClick={() => setModal1Open(true)} onKeyDown={(ev) => {if (ev.keyCode === 13) setModal1Open(true)}}>
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
          <div className={styles.work} role="button" tabIndex={0} onClick={() => setModal3Open(true)} onKeyDown={(ev) => {if (ev.keyCode === 13) setModal3Open(true)}}>
            <img src={crwnClothingThumb} alt="Crwn Clothing screenshot" />
            <div className={styles.workContent}>
              <h3>Crwn Clothing</h3>
              <p className={styles.workDesc}>
                A fully functional, React-based ecommerce shop with a modern and
                responsive design to showcase your products.
              </p>
            </div>
          </div>
          <ProjectModal
            isActive={modal3Open}
            handleCloseModal={() => setModal3Open(false)}
            title="Crwn Clothing"
            images={[
              { url: crwnClothingLarge },
            ]}
            description={
              <>
                <p>
                  A fully functional, React-based ecommerce shop with a modern and
                  responsive design to showcase your products.
                </p>
              </>
            }
            link="https://crwn-books.herokuapp.com/"
          />
        </section>
        <div className={styles.header} style={{ marginTop: "80px" }}>
          <h2>Misc Projects</h2>
          <div className={styles.hr}></div>
        </div>
        <section className={styles.projects}>
          <div className={styles.project}>
            <div className={styles.description}>
              <h4>
                <FaPenSquare />
                Notebook
              </h4>
              <span>A free and open-source note-taking app for the web.</span>
            </div>
            <div className={styles.links}>
              <a
                className={buttonStyles.buttonTertiary}
                href="https://notebook.justinspegele.com"
                target="_blank"
                rel="noreferrer"
              >
                <RiTerminalWindowFill /> Live Site
              </a>
              <a
                className={buttonStyles.buttonTertiary}
                href="https://github.com/jspegele/Notebook"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub /> GitHub
              </a>
            </div>
          </div>
          <div className={styles.project}>
            <div className={styles.description}>
              <h4>
                <FaBitcoin />
                CryptoDash
              </h4>
              <span>
                Crypto currency dashboard to track coins and look up prices and
                historical data.
              </span>
            </div>
            <div className={styles.links}>
              <a
                className={buttonStyles.buttonTertiary}
                href="http://crypto.justinspegele.com/"
                target="_blank"
                rel="noreferrer"
              >
                <RiTerminalWindowFill /> Live Site
              </a>
              <a
                className={buttonStyles.buttonTertiary}
                href="https://github.com/jspegele/cryptodash"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub /> GitHub
              </a>
            </div>
          </div>
          <div className={styles.project}>
            <div className={styles.description}>
              <h4>
                <FaPiggyBank />
                Expensify
              </h4>
              <span>
                A simple and intuitive budgeting and expense management app.
              </span>
            </div>
            <div className={styles.links}>
              <a
                className={buttonStyles.buttonTertiary}
                href="http://expensify.justinspegele.com/"
                target="_blank"
                rel="noreferrer"
              >
                <RiTerminalWindowFill /> Live Site
              </a>
              <a
                className={buttonStyles.buttonTertiary}
                href="https://github.com/jspegele/expensify-app"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub /> GitHub
              </a>
            </div>
          </div>
          <div className={styles.project}>
            <div className={styles.description}>
              <h4>
                <FaGamepad />
                Warframe Checklist
              </h4>
              <span>
                A tool for Warframe players to keep track of gear they've
                acquired and mastered, and what they still need.
              </span>
            </div>
            <div className={styles.links}>
              <a
                className={buttonStyles.buttonTertiary}
                href="https://warframe-checklist.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
              >
                <RiTerminalWindowFill /> Live Site
              </a>
              <a
                className={buttonStyles.buttonTertiary}
                href="https://github.com/jspegele/warframe-checklist"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub /> GitHub
              </a>
            </div>
          </div>
          {/* <div className={styles.project}>
            <div className={styles.description}>
              <h4><FaLink />TnyLnk</h4>
              <span>Link shortner that generates easy, readable, tiny links.</span>
            </div>
            <div className={styles.links}>
              <a
                className={buttonStyles.buttonTertiary}
                href="https://tny-link.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
              >
                <RiTerminalWindowFill /> Live Site
              </a>
              <a
                className={buttonStyles.buttonTertiary}
                href="https://github.com/jspegele/tny-lnk"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub /> GitHub
              </a>
            </div>
          </div> */}
          <div className={styles.project}>
            <div className={styles.description}>
              <h4>
                <FaRegCommentDots />
                DevChat
              </h4>
              <span>
                A slack clone for development teams to collaborate via real-time
                chat.
              </span>
            </div>
            <div className={styles.links}>
              <a
                className={buttonStyles.buttonTertiary}
                href="http://devchat.justinspegele.com/"
                target="_blank"
                rel="noreferrer"
              >
                <RiTerminalWindowFill /> Live Site
              </a>
              <a
                className={buttonStyles.buttonTertiary}
                href="https://github.com/jspegele/Devchat"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub /> GitHub
              </a>
            </div>
          </div>
        </section>
      </Container>
    </div>
  )
}

export default Projects
