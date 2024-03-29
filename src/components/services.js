import React from "react"
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaMobileAlt,
  FaGoogle,
  FaReact,
  FaServer,
  FaDatabase,
  FaChartLine,
} from "react-icons/fa"

import styles from "./styles/services.module.css"
import imgFrontEndDev from "../images/svc-front-end-development.jpg"
import imgAppDev from "../images/svc-app-development.jpg"
import imgWebUpdates from "../images/svc-website-updates.jpg"

const Services = () => {
  return (
    <div id="services" className={styles.wrapper}>
      <div className={styles.services}>
        <div className={`${styles.service} ${styles.frontEndDev}`}>
          <div className={styles.content}>
            <div className={styles.description}>
              <h3>New Website Development</h3>
              <p>
                I offer full web devleopment services designed to help
                businesses of all sizes and industries succeed in the digital
                world. I can help you create a beautiful, responsive, and
                user-friendly website that meets your business needs.
              </p>
              <p>
                I use the latest concepts and technologies to ensure that your
                website is fast, secure, fully responsive, mobile friendly, and
                optimized for search engines.
              </p>
              <p>
                Already have a design and just need the development completed? I
                can build it for you and launch it on your desired hosting
                platform.
              </p>
              <p>
                If you are looking for a reliable and experienced web developer
                to help you create a stunning website, contact me today to learn
                more about how I can help your business succeed online.
              </p>
              <div className={styles.tags}>
                <span className={styles.icon}>
                  <FaHtml5 />
                </span>
                <span className={styles.icon}>
                  <FaCss3Alt />
                </span>
                <span className={styles.icon}>
                  <FaJsSquare />
                </span>
                <span className={styles.icon}>
                  <FaMobileAlt />
                </span>
                <span className={styles.icon}>
                  <FaGoogle />
                </span>
              </div>
            </div>
            <div className={styles.image}>
              <img src={imgFrontEndDev} alt="" />
            </div>
          </div>
        </div>
        <div className={`${styles.service} ${styles.appDev}`}>
          <div className={styles.content}>
            <div className={styles.description}>
              <h3>Business App Development</h3>
              <p>
                I can build a fast, modern, database-driven application to help
                you run your business more efficiently and focus driving sales.
              </p>
              <p>
                A powerful web app to view your KPIs, track orders, manage
                content, distribute learning materials, or much more can be
                ready to use in a few short weeks. Let's talk about your needs
                and see how I can help you streamline your operations.
              </p>
              <div className={styles.tags}>
                <span className={styles.icon}>
                  <FaReact />
                </span>
                <span className={styles.icon}>
                  <FaDatabase />
                </span>
                <span className={styles.icon}>
                  <FaServer />
                </span>
                <span className={styles.icon}>
                  <FaMobileAlt />
                </span>
                <span className={styles.icon}>
                  <FaChartLine />
                </span>
              </div>
            </div>
            <div className={styles.image}>
              <img src={imgAppDev} alt="" />
            </div>
          </div>
        </div>
        <div className={`${styles.service} ${styles.webUpdates}`}>
          <div className={styles.content}>
            <div className={styles.description}>
              <h3>Website Updates</h3>
              <p>
                Need help with your existing webiste? Need to improve your
                search engine optimization, increase your site's speed and
                performance, meet accessibility guidelines, fix technical
                issues, update your design, or just add a page and update some
                content and images. I can help you with that.
              </p>
              <p>
                Whatever your website needs are, reach out to me today and let's
                chat about your goals and how I can help you reach them.
              </p>
              <div className={styles.tags}>
                <span className={styles.icon}>
                  <FaHtml5 />
                </span>
                <span className={styles.icon}>
                  <FaCss3Alt />
                </span>
                <span className={styles.icon}>
                  <FaJsSquare />
                </span>
                <span className={styles.icon}>
                  <FaMobileAlt />
                </span>
                <span className={styles.icon}>
                  <FaGoogle />
                </span>
              </div>
            </div>
            <div className={styles.image}>
              <img src={imgWebUpdates} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
