import React from 'react'
import { FaExternalLinkAlt } from "react-icons/fa"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'

import styles from './styles/project-modal.module.scss'

const ProjectModal = ({ isActive, handleCloseModal, title, images, description, link }) => (
  <div className={`${styles.modal} ${isActive ? styles.isActive : ''}`}>
    <div className={styles.modalBackground}></div>
    <div className={styles.modalContent}>
      <header className={styles.modalContentHead}>
        <p className={styles.modalContentTitle}>
          {title}
        </p>
        <button className={styles.modalClose} onClick={handleCloseModal} aria-label="Close"></button>
      </header>
      <div className={styles.modalContentImage}>
        {images.length && (
          <Carousel showThumbs={false}>
            {images.map(image => (
              <div>
                <img src={image.url} alt="Website screenshot" />
              </div>
            ))}
          </Carousel>
        )}
      </div>
      <footer className={styles.modalContentFoot}>
        {description}
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
        >
          Visit {title} <FaExternalLinkAlt />
        </a>
      </footer>
    </div>
  </div>
)
 
export default ProjectModal
