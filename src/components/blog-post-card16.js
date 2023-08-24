import React from 'react'

import PropTypes from 'prop-types'

import './blog-post-card16.css'

const BlogPostCard16 = (props) => {
  return (
    <div className={`blog-post-card16-blog-post-card ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="blog-post-card16-image"
      />
      <div className="blog-post-card16-container">
        <span className="blog-post-card16-text">{props.label}</span>
        <span className="blog-post-card16-text1">{props.title}</span>
        <span className="blog-post-card16-text2">{props.description}</span>
        <div className="blog-post-card16-container1">
          <div className="blog-post-card16-profile">
            <img
              alt={props.profile_alt}
              src={props.profile_src}
              image_src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fG1hbiUyMHBvcnRyYWl0fGVufDB8fHx8MTYyNjQzMTMwMw&amp;ixlib=rb-1.2.1&amp;h=1200"
              className="blog-post-card16-image1"
            />
            <span className="blog-post-card16-text3">{props.author}</span>
          </div>
          <span className="blog-post-card16-text4">{props.time}</span>
        </div>
      </div>
    </div>
  )
}

BlogPostCard16.defaultProps = {
  image_alt: 'image',
  description:
    'Lorem ipsum dolor sit amet, consectetur, adipiscing elit. Sed non volutpat turpis.  ​ Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor. Lorem  ​​ ipsum dolor sit amet, consectetur adipiscing elit.',
  rootClassName: '',
  profile_alt: 'profile',
  profile_src:
    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fG1hbiUyMHBvcnRyYWl0fGVufDB8fHx8MTYyNjQzMTMwMw&ixlib=rb-1.2.1&h=1200',
  title: 'Lorem ipsum dolor sit amet',
  author: 'Jon Doe',
  image_src:
    'https://images.unsplash.com/photo-1547841243-eacb14453cd9?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIyfHxjaXR5fGVufDB8fHx8MTYyNjE4NjYxMg&ixlib=rb-1.2.1&w=1000',
  time: '5 min read',
  label: 'ENTERPRISE',
}

BlogPostCard16.propTypes = {
  image_alt: PropTypes.string,
  description: PropTypes.string,
  rootClassName: PropTypes.string,
  profile_alt: PropTypes.string,
  profile_src: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  image_src: PropTypes.string,
  time: PropTypes.string,
  label: PropTypes.string,
}

export default BlogPostCard16
