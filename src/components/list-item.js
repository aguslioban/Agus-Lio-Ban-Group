import React from 'react'

import PropTypes from 'prop-types'

import './list-item.css'

const ListItem = (props) => {
  return (
    <div className={`list-item-container ${props.rootClassName} `}>
      <h5 className="list-item-text HeadingThree">{props.new_prop}</h5>
      <span className="">{props.description}</span>
    </div>
  )
}

ListItem.defaultProps = {
  rootClassName: '',
  description:
    'Gain access to the demographics, psychographics, and location of unique people who are interested and talk about your brand.',
  new_prop: '1. Listen to Social Conversations',
}

ListItem.propTypes = {
  rootClassName: PropTypes.string,
  description: PropTypes.string,
  new_prop: PropTypes.string,
}

export default ListItem
