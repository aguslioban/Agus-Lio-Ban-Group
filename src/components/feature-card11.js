import React from 'react'

import PropTypes from 'prop-types'

import './feature-card11.css'

const FeatureCard11 = (props) => {
  return (
    <div className={`feature-card11-feature-card ${props.rootClassName} `}>
      <h2 className="feature-card11-text">{props.title}</h2>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="feature-card11-image"
      />
    </div>
  )
}

FeatureCard11.defaultProps = {
  title: 'Lorem ipsum',
  image_src: '/shinta-200h.png',
  rootClassName: '',
  image_alt: 'image',
}

FeatureCard11.propTypes = {
  title: PropTypes.string,
  image_src: PropTypes.string,
  rootClassName: PropTypes.string,
  image_alt: PropTypes.string,
}

export default FeatureCard11
