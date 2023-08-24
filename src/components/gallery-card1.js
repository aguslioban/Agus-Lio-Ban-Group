import React from 'react'

import PropTypes from 'prop-types'

import './gallery-card1.css'

const GalleryCard1 = (props) => {
  return (
    <div className={`gallery-card1-gallery-card ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="gallery-card1-image"
      />
      <h2 className="gallery-card1-text">{props.title}</h2>
      <span className="gallery-card1-text1">{props.subtitle}</span>
    </div>
  )
}

GalleryCard1.defaultProps = {
  image_src: '/mekanik%2011-1500h.png',
  rootClassName: '',
  title: 'Project Title',
  subtitle: 'Lorem ipsum dolor sit amet',
  image_alt: 'image',
}

GalleryCard1.propTypes = {
  image_src: PropTypes.string,
  rootClassName: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  image_alt: PropTypes.string,
}

export default GalleryCard1
