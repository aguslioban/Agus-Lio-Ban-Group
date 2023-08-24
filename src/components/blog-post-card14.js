import React from 'react'

import PropTypes from 'prop-types'

import './blog-post-card14.css'

const BlogPostCard14 = (props) => {
  return (
    <div className={`blog-post-card14-blog-post-card ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="blog-post-card14-image"
      />
      <div className="blog-post-card14-container">
        <span className="blog-post-card14-text">{props.label}</span>
        <span className="blog-post-card14-text1">{props.title}</span>
        <span className="blog-post-card14-text2">{props.description}</span>
        <div className="blog-post-card14-container1">
          <div className="blog-post-card14-profile">
            <img
              alt={props.profile_alt}
              src={props.profile_src}
              image_src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fG1hbiUyMHBvcnRyYWl0fGVufDB8fHx8MTYyNjQzMTMwMw&amp;ixlib=rb-1.2.1&amp;h=1200"
              className="blog-post-card14-image1"
            />
            <span className="blog-post-card14-text3">{props.author}</span>
          </div>
          <span className="blog-post-card14-text4">{props.time}</span>
        </div>
      </div>
    </div>
  )
}

BlogPostCard14.defaultProps = {
  title: 'Lorem ipsum dolor sit amet',
  profile_alt: 'profile',
  rootClassName: '',
  image_alt: 'image',
  author: 'Jon Doe',
  label: 'ENTERPRISE',
  image_src:
    'https://images.unsplash.com/photo-1547841243-eacb14453cd9?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIyfHxjaXR5fGVufDB8fHx8MTYyNjE4NjYxMg&ixlib=rb-1.2.1&w=1000',
  time: '5 min read',
  description:
    'Lorem ipsum dolor sit amet, consectetur, adipiscing elit. Sed non volutpat turpis.  ​ Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor. Lorem  ​​ ipsum dolor sit amet, consectetur adipiscing elit.',
  profile_src:
    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fG1hbiUyMHBvcnRyYWl0fGVufDB8fHx8MTYyNjQzMTMwMw&ixlib=rb-1.2.1&h=1200',
}

BlogPostCard14.propTypes = {
  title: PropTypes.string,
  profile_alt: PropTypes.string,
  rootClassName: PropTypes.string,
  image_alt: PropTypes.string,
  author: PropTypes.string,
  label: PropTypes.string,
  image_src: PropTypes.string,
  time: PropTypes.string,
  description: PropTypes.string,
  profile_src: PropTypes.string,
}

export default BlogPostCard14
