import React from "react"
import {
  FaPenSquare,
  FaBitcoin,
  FaPiggyBank,
  FaGamepad,
  FaRegCommentDots,
  FaExternalLinkAlt,
} from "react-icons/fa"

import Container from "./container"

import pfsThumb from "../images/parasky-flute-studios-sm.jpg"
import chenelSecuritiesThumb from "../images/chenel-securities-sm.jpg"
import crwnClowthingThumb from "../images/crwn-clothing-sm.jpg"
import styles from "./styles/projects.module.scss"
import buttonStyles from "./styles/buttons.module.scss"

const Projects = () => (
  <div className={styles.projectsWrapper}>
    <Container>
      <div className={styles.header}>
        <h2 id="projects">Recent Work</h2>
        <div className={styles.hr}></div>
      </div>
      <section className={styles.works}>
        <div className={styles.work}>
          <img src={chenelSecuritiesThumb} alt="Chenel Capital screenshot" />
          <div className={styles.workContent}>
            <h3>Chenel Capital</h3>
            <p className={styles.workDesc}>
              chenelcapital.com showcases and innovative, Manhattan-based
              private equity firm that specializing in growth, venture, and
              angel stage investments.
            </p>
            <a
              className={styles.siteButton}
              href="https://chenelcapital.com"
              target="_blank"
              rel="noreferrer"
            >
              Visit Site <FaExternalLinkAlt />
            </a>
          </div>
        </div>
        <div className={styles.work}>
          <img src={pfsThumb} alt="Parasky Flute Studios screenshot" />
          <div className={styles.workContent}>
            <h3>Parasky Flute Studios</h3>
            <p className={styles.workDesc}>
              paraskyflutestudios.com is a modern small business website
              designed to drive conversions of new online business for
              the studio in a virtual world.
            </p>
            <a
              className={styles.siteButton}
              href="https://paraskyflutestudios.com"
              target="_blank"
              rel="noreferrer"
            >
              Visit Site <FaExternalLinkAlt />
            </a>
          </div>
        </div>
        <div className={styles.work}>
          <img src={crwnClowthingThumb} alt="Crwn Clothing screenshot" />
          <div className={styles.workContent}>
            <h3>Crwn Clothing</h3>
            <p className={styles.workDesc}>
              A fully functional, React-based ecommerce shop with a modern and
              responsive design to showcase your products.
            </p>
            <a
              className={styles.siteButton}
              href="https://crwn-books.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              Visit Site <FaExternalLinkAlt />
            </a>
          </div>
        </div>
      </section>
      <div className={styles.header} style={{ marginTop: '80px' }}>
        <h2>Misc Projects</h2>
        <div className={styles.hr}></div>
      </div>
      <section className={styles.projects}>
        <div className={styles.project}>
          <a
            href="https://notebook.justinspegele.com"
            target="_blank"
            rel="noreferrer"
            className={styles.info}
          >
            <h4>
              <FaPenSquare />
              Notebook
            </h4>
            <span>A free and open-source note-taking app for the web.</span>
          </a>
          <div className={styles.source}>
            <a
              className={buttonStyles.buttonSecondary}
              href="https://github.com/jspegele/Notebook"
              target="_blank"
              rel="noreferrer"
            >
              Source Code
            </a>
          </div>
        </div>
        <div className={styles.project}>
          <a
            href="http://crypto.justinspegele.com/"
            target="_blank"
            rel="noreferrer"
            className={styles.info}
          >
            <h4>
              <FaBitcoin />
              CryptoDash
            </h4>
            <span>
              Crypto currency dashboard to track coins and look up prices and
              historical data.
            </span>
          </a>
          <div className={styles.source}>
            <a
              className={buttonStyles.buttonSecondary}
              href="https://github.com/jspegele/cryptodash"
              target="_blank"
              rel="noreferrer"
            >
              Source Code
            </a>
          </div>
        </div>
        <div className={styles.project}>
          <a
            href="http://expensify.justinspegele.com/"
            target="_blank"
            rel="noreferrer"
            className={styles.info}
          >
            <h4>
              <FaPiggyBank />
              Expensify
            </h4>
            <span>
              A simple and intuitive budgeting and expense management app.
            </span>
          </a>
          <div className={styles.source}>
            <a
              className={buttonStyles.buttonSecondary}
              href="https://github.com/jspegele/expensify-app"
              target="_blank"
              rel="noreferrer"
            >
              Source Code
            </a>
          </div>
        </div>
        <div className={styles.project}>
          <a
            href="https://warframe-checklist.herokuapp.com/"
            target="_blank"
            rel="noreferrer"
            className={styles.info}
          >
            <h4>
              <FaGamepad />
              Warframe Checklist
            </h4>
            <span>
              A tool for Warframe players to keep track of gear they've acquired
              and mastered, and what they still need.
            </span>
          </a>
          <div className={styles.source}>
            <a
              className={buttonStyles.buttonSecondary}
              href="https://github.com/jspegele/warframe-checklist"
              target="_blank"
              rel="noreferrer"
            >
              Source Code
            </a>
          </div>
        </div>
        {/* <div className={styles.project}>
          <a
            href="https://tny-link.herokuapp.com/"
            target="_blank"
            rel="noreferrer"
            className={styles.info}
          >
            <h4><FaLink />TnyLnk</h4>
            <span>Link shortner that generates easy, readable, tiny links.</span>
          </a>
          <div className={styles.source}>
            <a
              className={buttonStyles.buttonSecondary}
              href="https://github.com/jspegele/tny-lnk"
              target="_blank"
              rel="noreferrer"
            >
              Source Code
            </a>
          </div>
        </div> */}
        <div className={styles.project}>
          <a
            href="http://devchat.justinspegele.com/"
            target="_blank"
            rel="noreferrer"
            className={styles.info}
          >
            <h4>
              <FaRegCommentDots />
              DevChat
            </h4>
            <span>
              A slack clone for development teams to collaborate via real-time
              chat.
            </span>
          </a>
          <div className={styles.source}>
            <a
              className={buttonStyles.buttonSecondary}
              href="https://github.com/jspegele/Devchat"
              target="_blank"
              rel="noreferrer"
            >
              Source Code
            </a>
          </div>
        </div>
      </section>
    </Container>
  </div>
)

export default Projects
