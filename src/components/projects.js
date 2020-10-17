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
          <div className={styles.info}>
            <a
              href="https://notebook.justinspegele.com"
              target="_blank"
              rel="noreferrer"
            >
              <FaPenSquare />Notebook
            </a>
            <span>A free and open-source note-taking app for the web.</span>
          </div>
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
          <div className={styles.info}>
            <a
              href="http://crypto.justinspegele.com/"
              target="_blank"
              rel="noreferrer"
            >
              <FaBitcoin />CryptoDash
            </a>
            <span>Crypto currency dashboard to track coins and look up prices and historical data.</span>
          </div>
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
          <div className={styles.info}>
            <a
              href="http://expensify.justinspegele.com/"
              target="_blank"
              rel="noreferrer"
            >
              <FaPiggyBank />Expensify
            </a>
            <span>A simple and intuitive budgeting and expense management app.</span>
          </div>
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
          <div className={styles.info}>
            <a
              href="https://warframe-checklist.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              <FaGamepad />Warframe Checklist
            </a>
            <span>A tool for Warframe players to keep track of gear they've acquired and mastered, and what they still need.</span>
          </div>
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
          <div className={styles.info}>
            <a
              href="https://tny-link.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLink />TnyLnk
            </a>
            <span>Link shortner that generates easy, readable, tiny links.</span>
          </div>
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
          <div className={styles.info}>
            <a
              href="http://devchat.justinspegele.com/"
              target="_blank"
              rel="noreferrer"
            >
              <FaRegCommentDots />DevChat
            </a>
            <span>A slack clone for development teams to collaborate via real-time chat.</span>
          </div>
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
