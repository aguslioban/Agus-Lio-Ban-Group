import React from 'react'

import PropTypes from 'prop-types'

import './blog-post-card1.css'

const BlogPostCard1 = (props) => {
  return (
    <div className={`blog-post-card1-blog-post-card ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="blog-post-card1-image"
      />
      <div className="blog-post-card1-container">
        <span className="blog-post-card1-text">{props.label}</span>
        <span className="blog-post-card1-text1">{props.title}</span>
        <span className="blog-post-card1-text2">{props.description}</span>
        <div className="blog-post-card1-container1">
          <div className="blog-post-card1-profile">
            <img
              alt={props.profile_alt}
              src={props.profile_src}
              image_src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fG1hbiUyMHBvcnRyYWl0fGVufDB8fHx8MTYyNjQzMTMwMw&amp;ixlib=rb-1.2.1&amp;h=1200"
              className="blog-post-card1-image1"
            />
            <span className="blog-post-card1-text3">{props.author}</span>
          </div>
          <span className="blog-post-card1-text4">{props.time}</span>
        </div>
      </div>
    </div>
  )
}

BlogPostCard1.defaultProps = {
  title: 'Lorem ipsum dolor sit amet',
  label: 'ENTERPRISE',
  description:
    'Lorem ipsum dolor sit amet, consectetur, adipiscing elit. Sed non volutpat turpis.  ​ Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor. Lorem  ​​ ipsum dolor sit amet, consectetur adipiscing elit.',
  profile_alt: 'profile',
  image_src: '/mekanik%2011-1500w.png',
  profile_src:
    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fG1hbiUyMHBvcnRyYWl0fGVufDB8fHx8MTYyNjQzMTMwMw&ixlib=rb-1.2.1&w=200',
  time: '5 min read',
  image_alt: 'image',
  author: 'Jon Doe',
  rootClassName: '',
}

BlogPostCard1.propTypes = {
  title: PropTypes.string,
  label: PropTypes.string,
  description: PropTypes.string,
  profile_alt: PropTypes.string,
  image_src: PropTypes.string,
  profile_src: PropTypes.string,
  time: PropTypes.string,
  image_alt: PropTypes.string,
  author: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default BlogPostCard1
