import React from 'react'

import PropTypes from 'prop-types'

import './blog-post-card4.css'

const BlogPostCard4 = (props) => {
  return (
    <div className={`blog-post-card4-blog-post-card ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="blog-post-card4-image"
      />
      <div className="blog-post-card4-container">
        <span className="blog-post-card4-text">{props.date}</span>
        <span className="blog-post-card4-text1">{props.description}</span>
        <div className="blog-post-card4-separator"></div>
      </div>
    </div>
  )
}

BlogPostCard4.defaultProps = {
  date: 'JULY 24',
  description:
    'Lorem ipsum lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  rootClassName: '',
  image_alt: 'image',
  image_src: '/whatsapp%20image%202022-12-16%20at%2010.36.31-1500w.jpg',
}

BlogPostCard4.propTypes = {
  date: PropTypes.string,
  description: PropTypes.string,
  rootClassName: PropTypes.string,
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
}

export default BlogPostCard4
