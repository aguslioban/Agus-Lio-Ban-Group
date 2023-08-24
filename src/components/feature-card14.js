import React from 'react'

import PropTypes from 'prop-types'

import './feature-card14.css'

const FeatureCard14 = (props) => {
  return (
    <div className={`feature-card14-feature-card ${props.rootClassName} `}>
      <h2 className="feature-card14-text">{props.title}</h2>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="feature-card14-image"
      />
    </div>
  )
}

FeatureCard14.defaultProps = {
  image_alt: 'image',
  image_src:
    'https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHllbGxvdyUyMHRlY2h8ZW58MHx8fHwxNjI2MjU1NDk0&ixlib=rb-1.2.1&h=500',
  rootClassName: '',
  title: 'Lorem ipsum',
}

FeatureCard14.propTypes = {
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
  rootClassName: PropTypes.string,
  title: PropTypes.string,
}

export default FeatureCard14
