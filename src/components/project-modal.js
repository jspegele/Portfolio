import React from 'react'
import { FaExternalLinkAlt } from "react-icons/fa"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'

import styles from './styles/project-modal.module.css'

const ProjectModal = ({ isActive, handleCloseModal, title, images, description, link }) => {
  const handleKeyDown = ev => {
    if (ev.keyCode === 13) {
      handleCloseModal()
    }
  }

  return (
    <div className={`${styles.modal} ${isActive ? styles.isActive : ''}`}>
      <div className={styles.modalBackground} onClick={handleCloseModal} onKeyDown={handleKeyDown} role="presentation"></div>
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
              {images.map((image, i) => (
                <div key={i}>
                  <img src={image.url} alt="Website screenshot" />
                  {image.legend && <p className="legend">{image.legend}</p>}
                </div>
              ))}
            </Carousel>
          )}
        </div>
        <footer className={styles.modalContentFoot}>
          {description}
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
            >
              Visit {title} <FaExternalLinkAlt />
            </a>
          )}
        </footer>
      </div>
    </div>
  )
}
 
export default ProjectModal
