import React from 'react'

import PropTypes from 'prop-types'

import './feature-card31.css'

const FeatureCard31 = (props) => {
  return (
    <div className={`feature-card31-feature-card ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="feature-card31-image"
      />
      <h2 className="feature-card31-text">{props.title}</h2>
      <span className="feature-card31-text1">{props.description}</span>
      <span className="feature-card31-text2">{props.action}</span>
    </div>
  )
}

FeatureCard31.defaultProps = {
  image_src: '/dfc%20new%20logo%20%5B1%5D-200h.png',
  action: 'SEE MORE',
  rootClassName: '',
  title: 'Lorem ipsum',
  image_alt: 'image',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
}

FeatureCard31.propTypes = {
  image_src: PropTypes.string,
  action: PropTypes.string,
  rootClassName: PropTypes.string,
  title: PropTypes.string,
  image_alt: PropTypes.string,
  description: PropTypes.string,
}

export default FeatureCard31
