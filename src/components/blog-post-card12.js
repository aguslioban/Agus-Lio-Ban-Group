import React from 'react'

import PropTypes from 'prop-types'

import './blog-post-card12.css'

const BlogPostCard12 = (props) => {
  return (
    <div className={`blog-post-card12-blog-post-card ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="blog-post-card12-image"
      />
      <div className="blog-post-card12-container">
        <span className="blog-post-card12-text">{props.title}</span>
        <span className="blog-post-card12-text1">{props.description}</span>
        <div className="blog-post-card12-container1">
          <div className="blog-post-card12-profile">
            <img
              alt={props.profile_alt}
              src={props.profile_src}
              image_src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fG1hbiUyMHBvcnRyYWl0fGVufDB8fHx8MTYyNjQzMTMwMw&amp;ixlib=rb-1.2.1&amp;h=1200"
              className="blog-post-card12-image1"
            />
            <span className="blog-post-card12-text2">{props.author}</span>
          </div>
          <span className="blog-post-card12-text3">{props.time}</span>
        </div>
      </div>
    </div>
  )
}

BlogPostCard12.defaultProps = {
  image_alt: 'image',
  description:
    'Lorem ipsum dolor sit amet, consectetur, adipiscing elit. Sed non volutpat turpis.  ​ Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor. Lorem  ​​ ipsum dolor sit amet, consectetur adipiscing elit.',
  image_src:
    'https://images.unsplash.com/photo-1547841243-eacb14453cd9?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIyfHxjaXR5fGVufDB8fHx8MTYyNjE4NjYxMg&ixlib=rb-1.2.1&w=1000',
  time: '5 min read',
  title: 'Lorem ipsum dolor sit amet',
  author: 'Jon Doe',
  profile_src:
    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fG1hbiUyMHBvcnRyYWl0fGVufDB8fHx8MTYyNjQzMTMwMw&ixlib=rb-1.2.1&w=200',
  rootClassName: '',
  profile_alt: 'profile',
}

BlogPostCard12.propTypes = {
  image_alt: PropTypes.string,
  description: PropTypes.string,
  image_src: PropTypes.string,
  time: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  profile_src: PropTypes.string,
  rootClassName: PropTypes.string,
  profile_alt: PropTypes.string,
}

export default BlogPostCard12
