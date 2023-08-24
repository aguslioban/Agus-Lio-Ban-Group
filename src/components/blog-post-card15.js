import React from 'react'

import PropTypes from 'prop-types'

import './blog-post-card15.css'

const BlogPostCard15 = (props) => {
  return (
    <div className={`blog-post-card15-blog-post-card ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="blog-post-card15-image"
      />
      <div className="blog-post-card15-container">
        <span className="blog-post-card15-text">{props.title}</span>
        <span className="blog-post-card15-text1">{props.description}</span>
      </div>
    </div>
  )
}

BlogPostCard15.defaultProps = {
  rootClassName: '',
  title: 'Lorem ipsum dolor sit amet',
  image_alt: 'image',
  image_src:
    'https://images.unsplash.com/photo-1547841243-eacb14453cd9?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIyfHxjaXR5fGVufDB8fHx8MTYyNjE4NjYxMg&ixlib=rb-1.2.1&w=600',
  description:
    'Lorem ipsum dolor sit amet, consectetur, adipiscing elit. Sed non volutpat turpis.  ​ Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor. Lorem  ​​ ipsum dolor sit amet, consectetur adipiscing elit.',
}

BlogPostCard15.propTypes = {
  rootClassName: PropTypes.string,
  title: PropTypes.string,
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
  description: PropTypes.string,
}

export default BlogPostCard15
