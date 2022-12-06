import React from "react"
import {
  FaPenSquare,
  FaBitcoin,
  FaPiggyBank,
  FaGamepad,
  FaRegCommentDots,
  FaGithub,
} from "react-icons/fa"
import { RiTerminalWindowFill } from "react-icons/ri"

import Container from "./container"

import styles from "./styles/projects.module.css"
import buttonStyles from "./styles/buttons.module.css"

const MiscProjects = () => {
  return (
    <div id="projects" className={styles.projectsWrapper}>
      <Container>
        <div className={styles.header}>
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
                A tool for Warframe players to keep track of gear they've acquired
                and mastered, and what they still need.
              </span>
            </div>
            <div className={styles.links}>
              <a
                className={buttonStyles.buttonTertiary}
                href="https://warframe-checklist.justinspegele.com/"
                target="_blank"
                rel="noreferrer"
              >
                <RiTerminalWindowFill /> Live Site
              </a>
              <a
                className={buttonStyles.buttonTertiary}
                href="https://github.com/jspegele/warframe-mastery-checklist"
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

export default MiscProjects
