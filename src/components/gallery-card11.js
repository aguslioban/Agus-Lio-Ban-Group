import React from 'react'

import PropTypes from 'prop-types'

import './gallery-card11.css'

const GalleryCard11 = (props) => {
  return (
    <div className={`gallery-card11-gallery-card ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="gallery-card11-image"
      />
      <h2 className="gallery-card11-text">{props.title}</h2>
      <span className="gallery-card11-text1">{props.subtitle}</span>
    </div>
  )
}

GalleryCard11.defaultProps = {
  rootClassName: '',
  subtitle: 'Lorem ipsum dolor sit amet',
  image_alt: 'image',
  image_src:
    'https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEyfHxmb3Jlc3R8ZW58MHx8fHwxNjI2MjUxMjg4&ixlib=rb-1.2.1&h=1200',
  title: 'Project Title',
}

GalleryCard11.propTypes = {
  rootClassName: PropTypes.string,
  subtitle: PropTypes.string,
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
  title: PropTypes.string,
}

export default GalleryCard11
