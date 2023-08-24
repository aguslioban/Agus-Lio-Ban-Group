import React from 'react'

import PropTypes from 'prop-types'

import './blog-post-card17.css'

const BlogPostCard17 = (props) => {
  return (
    <div className={`blog-post-card17-blog-post-card ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="blog-post-card17-image"
      />
      <div className="blog-post-card17-container">
        <span className="blog-post-card17-text">{props.label}</span>
        <span className="blog-post-card17-text1">{props.title}</span>
        <span className="blog-post-card17-text2">{props.description}</span>
        <div className="blog-post-card17-container1">
          <div className="blog-post-card17-profile"></div>
          <span className="blog-post-card17-text3">{props.time}</span>
        </div>
      </div>
    </div>
  )
}

BlogPostCard17.defaultProps = {
  image_alt: 'image',
  description:
    'Lorem ipsum dolor sit amet, consectetur, adipiscing elit. Sed non volutpat turpis.  ​ Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor. Lorem  ​​ ipsum dolor sit amet, consectetur adipiscing elit.',
  image_src:
    'https://images.unsplash.com/photo-1547841243-eacb14453cd9?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIyfHxjaXR5fGVufDB8fHx8MTYyNjE4NjYxMg&ixlib=rb-1.2.1&w=1000',
  rootClassName: '',
  label: 'ENTERPRISE',
  title: 'Lorem ipsum dolor sit amet',
  time: '5 min read',
}

BlogPostCard17.propTypes = {
  image_alt: PropTypes.string,
  description: PropTypes.string,
  image_src: PropTypes.string,
  rootClassName: PropTypes.string,
  label: PropTypes.string,
  title: PropTypes.string,
  time: PropTypes.string,
}

export default BlogPostCard17
