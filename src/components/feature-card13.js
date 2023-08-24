import React from 'react'

import PropTypes from 'prop-types'

import './feature-card13.css'

const FeatureCard13 = (props) => {
  return (
    <div className={`feature-card13-feature-card ${props.rootClassName} `}>
      <h2 className="feature-card13-text">{props.title}</h2>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="feature-card13-image"
      />
    </div>
  )
}

FeatureCard13.defaultProps = {
  image_alt: 'image',
  image_src:
    'https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHllbGxvdyUyMHRlY2h8ZW58MHx8fHwxNjI2MjU1NDk0&ixlib=rb-1.2.1&w=300',
  rootClassName: '',
  title: 'Lorem ipsum',
}

FeatureCard13.propTypes = {
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
  rootClassName: PropTypes.string,
  title: PropTypes.string,
}

export default FeatureCard13
