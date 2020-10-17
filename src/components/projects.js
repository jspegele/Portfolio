import React from 'react'
import { FaPenSquare, FaBitcoin, FaPiggyBank, FaGamepad, FaLink, FaRegCommentDots } from 'react-icons/fa'

import Container from './container'

import styles from './styles/projects.module.scss'
import buttonStyles from './styles/buttons.module.scss'

const Projects = () => (
  <div className={styles.projectsWrapper} id="projects">
    <Container>
      <div className={styles.header}>
        <h2>Work &amp; Projects</h2>
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
            <h6><FaPenSquare />Notebook</h6>
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
            <h6><FaBitcoin />CryptoDash</h6>
            <span>Crypto currency dashboard to track coins and look up prices and historical data.</span>
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
            <h6><FaPiggyBank />Expensify</h6>
            <span>A simple and intuitive budgeting and expense management app.</span>
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
            <h6><FaGamepad />Warframe Checklist</h6>
            <span>A tool for Warframe players to keep track of gear they've acquired and mastered, and what they still need.</span>
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
        <div className={styles.project}>
          <a
            href="https://tny-link.herokuapp.com/"
            target="_blank"
            rel="noreferrer"
            className={styles.info}
          >
            <h6><FaLink />TnyLnk</h6>
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
        </div>
        <div className={styles.project}>
          <a
            href="http://devchat.justinspegele.com/"
            target="_blank"
            rel="noreferrer"
            className={styles.info}
          >
            <h6><FaRegCommentDots />DevChat</h6>
            <span>A slack clone for development teams to collaborate via real-time chat.</span>
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
