import React from 'react'

import PropTypes from 'prop-types'

import './feature-card15.css'

const FeatureCard15 = (props) => {
  return (
    <div className={`feature-card15-feature-card ${props.rootClassName} `}>
      <h2 className="feature-card15-text">{props.title}</h2>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="feature-card15-image"
      />
    </div>
  )
}

FeatureCard15.defaultProps = {
  rootClassName: '',
  title: 'Lorem ipsum',
  image_src: 'https://play.teleporthq.io/static/svg/placeholders/no-image.svg',
  image_alt: 'image',
}

FeatureCard15.propTypes = {
  rootClassName: PropTypes.string,
  title: PropTypes.string,
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
}

export default FeatureCard15
