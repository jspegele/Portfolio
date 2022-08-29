import React, { useState } from "react"
import {
  FaBitcoin,
  FaGamepad,
  FaGithub,
  FaPenSquare,
  FaPiggyBank,
  FaRegCommentDots,
  FaShoppingBag,
} from "react-icons/fa"
import { RiTerminalWindowFill } from "react-icons/ri"

import Container from "./container"
import ProjectModal from "./project-modal"

import chenelPortalThumb from "../images/portfolio/chenel-capital-portal-0-sm.jpg"
import chenelPortalLarge from "../images/portfolio/chenel-capital-portal-0.jpg"
import chenelPortalScreen1 from "../images/portfolio/chenel-capital-portal-1.jpg"
import chenelPortalScreen2 from "../images/portfolio/chenel-capital-portal-2.jpg"
import chenelPortalScreen3 from "../images/portfolio/chenel-capital-portal-3.jpg"
import chenelPortalScreen4 from "../images/portfolio/chenel-capital-portal-4.jpg"
import chenelPortalScreen5 from "../images/portfolio/chenel-capital-portal-5.jpg"
import chenelPortalScreen6 from "../images/portfolio/chenel-capital-portal-6.jpg"
import chenelPortalScreen7 from "../images/portfolio/chenel-capital-portal-7.jpg"
import chenelPortalScreen8 from "../images/portfolio/chenel-capital-portal-8.jpg"
import chenelPortalScreen9 from "../images/portfolio/chenel-capital-portal-9.jpg"
import chenelPortalScreen10 from "../images/portfolio/chenel-capital-portal-10.jpg"
import chenelPortalScreen11 from "../images/portfolio/chenel-capital-portal-11.jpg"
import chenelPortalScreen12 from "../images/portfolio/chenel-capital-portal-12.jpg"

import flyweightThumb from "../images/portfolio/flyweight-00-sm.jpg"
import flyweightLarge from "../images/portfolio/flyweight-00.jpg"
import flyweightScreen1 from "../images/portfolio/flyweight-01.jpg"
import flyweightScreen2 from "../images/portfolio/flyweight-02.jpg"
import flyweightScreen3 from "../images/portfolio/flyweight-03.jpg"
import flyweightScreen4 from "../images/portfolio/flyweight-04.jpg"
import flyweightScreen5 from "../images/portfolio/flyweight-05.jpg"
import flyweightScreen6 from "../images/portfolio/flyweight-06.jpg"
import flyweightScreen7 from "../images/portfolio/flyweight-07.jpg"
import flyweightScreen8 from "../images/portfolio/flyweight-08.jpg"
import flyweightScreen9 from "../images/portfolio/flyweight-09.jpg"

import sunstateThumb from "../images/portfolio/sunstate-00-sm.jpg"
import sunstateScreen0 from "../images/portfolio/sunstate-00.jpg"
import sunstateScreen1 from "../images/portfolio/sunstate-01.jpg"
import sunstateScreen2 from "../images/portfolio/sunstate-02.jpg"

import bellportThumb from "../images/portfolio/bellport-01-sm.jpg"
import bellportScreen1 from "../images/portfolio/bellport-01.jpg"
import bellportScreen2 from "../images/portfolio/bellport-02.jpg"
import bellportScreen3 from "../images/portfolio/bellport-03.jpg"

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

import styles from "./styles/portfolioFull.module.css"
import buttonStyles from "./styles/buttons.module.css"

const PortfolioFull = () => {
  const [modal1Open, setModal1Open] = useState(false)
  const [modal2Open, setModal2Open] = useState(false)
  const [modal3Open, setModal3Open] = useState(false)
  const [modal4Open, setModal4Open] = useState(false)
  const [modal5Open, setModal5Open] = useState(false)
  const [modal6Open, setModal6Open] = useState(false)

  return (
    <div id="work" className={styles.portfolioWrapper}>
      <Container>
        <div className={styles.worksWrapper}>
          <div className={styles.header}>
            <h2>Featured Client Work</h2>
            <div className={styles.hr}></div>
          </div>
          <section className={styles.works}>
            <div
              className={styles.work}
              role="button"
              tabIndex={0}
              onClick={() => setModal1Open(true)}
              onKeyDown={ev => {
                if (ev.keyCode === 13) setModal1Open(true)
              }}
            >
              <img
                src={chenelPortalThumb}
                alt="Chenel Capital Login Screenshot"
              />
              <div className={styles.workContent}>
                <h3>Chenel Capital Investor Portal</h3>
                <p className={styles.workDesc}>
                  A fully functional, React-based investment portal and customer
                  engagement tool.
                </p>
              </div>
            </div>
            <ProjectModal
              isActive={modal1Open}
              handleCloseModal={() => setModal1Open(false)}
              title="Investor Portal"
              images={[
                { url: chenelPortalLarge, legend: "Investor Portal Login" },
                { url: chenelPortalScreen1, legend: "User Dashboard" },
                { url: chenelPortalScreen2, legend: "Investment Fund Details" },
                { url: chenelPortalScreen3, legend: "Investor Relations" },
                { url: chenelPortalScreen4, legend: "User Mailbox" },
                {
                  url: chenelPortalScreen5,
                  legend: "User Mailbox - Communication Thread",
                },
                { url: chenelPortalScreen6, legend: "User Documents" },
                {
                  url: chenelPortalScreen7,
                  legend: "Administrator - Dashboard",
                },
                {
                  url: chenelPortalScreen8,
                  legend: "Administrator - Manage Funds",
                },
                {
                  url: chenelPortalScreen9,
                  legend: "Administrator - Manage Users",
                },
                {
                  url: chenelPortalScreen10,
                  legend: "Administrator - Manage Groups",
                },
                {
                  url: chenelPortalScreen11,
                  legend: "Administrator - Manage Communications",
                },
                {
                  url: chenelPortalScreen12,
                  legend: "Administrator - Manage Documents",
                },
              ]}
              description={
                <>
                  <p>
                    The Chenel Capital Portal is a fully functional,
                    custom-built investor portal where users can view a summary
                    of their current investment information, view and download
                    documents from the company, communicate directly with
                    investment experts, and receive important alerts and updates
                    from the company.
                  </p>
                  <p>
                    This application is custom solution that provide the desired
                    customization and flexibility required by Chenel Capital.
                    This solution also includes a full admin solution where
                    Chenel Capital employees can update information, download
                    customer info, upload documents and add messages and alerts.
                  </p>
                  <p>
                    Custom permissions allow content to shared with all
                    investors or only certain groups or individuals. Content
                    include documents, messages, investment data, and investor
                    information. Users are able to find documents, information
                    and messages quickly and easily within a clean, modern and
                    intuitive UI.
                  </p>
                  <p>
                    This app is built with React 17, NodeJS, Firebase API, and
                    MaterialUI.
                  </p>
                </>
              }
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
              <img
                src={flyweightThumb}
                alt="Flyweight 90-Day Workout Screenshot"
              />
              <div className={styles.workContent}>
                <h3>Flyweight 90-Day Workout App</h3>
                <p className={styles.workDesc}>
                  A React-based app to guide users through a workout program
                  with a custom built administration platform.
                </p>
              </div>
            </div>
            <ProjectModal
              isActive={modal2Open}
              handleCloseModal={() => setModal2Open(false)}
              title="Flyweight 90-Day Workout App"
              images={[
                { url: flyweightLarge, legend: "App Signup" },
                { url: flyweightScreen1, legend: "User Program Selection" },
                { url: flyweightScreen2, legend: "User Workout Selection" },
                { url: flyweightScreen3, legend: "User Workout" },
                { url: flyweightScreen4, legend: "Admin Dashboard" },
                { url: flyweightScreen5, legend: "Admin Manage Users" },
                { url: flyweightScreen6, legend: "Admin Edit User" },
                { url: flyweightScreen7, legend: "Admin Manage Workouts" },
                { url: flyweightScreen8, legend: "Admin Edit Workout" },
                { url: flyweightScreen9, legend: "Admin Edit Exercise" },
              ]}
              description={
                <>
                  <p>
                    The Flyweight 90-day Flyweight Workout Program app is a
                    fully responsive, mobile-friendly app that present a 90-day
                    program allowing users to swipe or click-through daily
                    workout routine featuring the Flyweight product. Each
                    workout day is comprised of 4-5 exercises, each displaying
                    an embedded video with information about the exercise, a
                    countdown timer and an overlay with coaching cues. The app
                    tracks users progress and prompt them to continue on to the
                    next day when they re-open the app.
                  </p>
                  <p>
                    This application is built with a modern, intuitive, and
                    mobile-first UI that provides users with a simple and easy
                    fitness experience. The app features secure user management
                    and fast, responsive content delivery using best practices
                    and proven technologies. This solution also includes a full
                    admin platform where administrators can update information,
                    download customer info, create new workouts and edit
                    existing programs.
                  </p>
                  <p>
                    This app is built with React 17, NodeJS, Firebase API, Vimeo
                    API, and MaterialUI.
                  </p>
                </>
              }
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
              <img src={sunstateThumb} alt="Sunstate Petroleum Screenshot" />
              <div className={styles.workContent}>
                <h3>Sunstate Petroleum Inventory Management</h3>
                <p className={styles.workDesc}>
                  A custom designed small business inventory management tool.
                </p>
              </div>
            </div>
            <ProjectModal
              isActive={modal3Open}
              handleCloseModal={() => setModal3Open(false)}
              title="Flyweight 90-Day Workout App"
              images={[
                { url: sunstateScreen0 },
                { url: sunstateScreen1 },
                { url: sunstateScreen2 },
              ]}
              description={
                <>
                  <p>
                    The Sunstate Petroleum inventory management tool is a simple
                    React-based application designed to replace the clients
                    spreadsheets shared via email with a centralized inventory
                    tool updated by drivers and operations managers in real
                    time.
                  </p>
                  <p>This app is built with React, Firebase, and MaterialUI.</p>
                </>
              }
            />

            <div
              className={styles.work}
              role="button"
              tabIndex={0}
              onClick={() => setModal4Open(true)}
              onKeyDown={ev => {
                if (ev.keyCode === 13) setModal4Open(true)
              }}
            >
              <img src={bellportThumb} alt="Bellport Brewing screenshot" />
              <div className={styles.workContent}>
                <h3>Bellport Brewing Company</h3>
                <p className={styles.workDesc}>
                  BellportBrewing.com is a modern, responsive website designed
                  to provide a small business platform to communicate with
                  customers.
                </p>
              </div>
            </div>
            <ProjectModal
              isActive={modal4Open}
              handleCloseModal={() => setModal4Open(false)}
              title="Bellport Brewing"
              images={[
                { url: bellportScreen1 },
                { url: bellportScreen2 },
                { url: bellportScreen3 },
              ]}
              description={
                <>
                  <p>
                    BellportBrewing.com is a modern, responsive website designed
                    to provide a small business platform to communicate with
                    customers.
                  </p>
                  <p>
                    The site features social media plugins, an events calendar
                    managed by brewery staff, updates on the latest crafts on
                    tap and additional informational content easily updateable
                    by the client.
                  </p>
                </>
              }
              link="https://bellportbrewing.com"
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
              <img src={pfsThumb} alt="Parasky Flute Studios screenshot" />
              <div className={styles.workContent}>
                <h3>Parasky Flute Studios</h3>
                <p className={styles.workDesc}>
                  Paraskyflutestudios.com is a modern small business website
                  designed to drive conversions of new online business for the
                  studio in a virtual world.
                </p>
              </div>
            </div>
            <ProjectModal
              isActive={modal5Open}
              handleCloseModal={() => setModal5Open(false)}
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
                    Parasky Flute Studios is a private music studio offering
                    music lessons in the greater Pittsburgh area as well as
                    virtually to students around the world. They approched me to
                    help them rebuild their online presence, improve SEO, and
                    increase conversions of new online students.
                  </p>
                  <p>
                    Built with GatsbyJS and a Contentful integration,
                    paraskyflutestudios.com is a fast, dynamic,responsive and
                    easy to maintain website designed to drive sales through an
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
              onClick={() => setModal6Open(true)}
              onKeyDown={ev => {
                if (ev.keyCode === 13) setModal6Open(true)
              }}
            >
              <img
                src={chenelSecuritiesThumb}
                alt="Chenel Capital screenshot"
              />
              <div className={styles.workContent}>
                <h3>Chenel Capital</h3>
                <p className={styles.workDesc}>
                  Chenel Capital is an innovative, Manhattan-based private
                  equity firm that specializing in growth, venture, and angel
                  stage investments.
                </p>
              </div>
            </div>
            <ProjectModal
              isActive={modal6Open}
              handleCloseModal={() => setModal6Open(false)}
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
        </div>
        <div className={styles.projectsWrapper}>
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
                  Crypto currency dashboard to track coins and look up prices
                  and historical data.
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
                  <FaShoppingBag />
                  Ecommerce Clothing Store
                </h4>
                <span>
                  A fully functional, React-based ecommerce shop with a modern
                  and responsive design to showcase your products.
                </span>
              </div>
              <div className={styles.links}>
                <a
                  className={buttonStyles.buttonTertiary}
                  href="https://crwn-books.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <RiTerminalWindowFill /> Live Site
                </a>
                <a
                  className={buttonStyles.buttonTertiary}
                  href="https://github.com/jspegele/crwn-books"
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
                  <FaRegCommentDots />
                  DevChat
                </h4>
                <span>
                  A slack clone for development teams to collaborate via
                  real-time chat.
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
        </div>
      </Container>
    </div>
  )
}

export default PortfolioFull
