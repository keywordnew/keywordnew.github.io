import React from 'react'
import PropTypes from 'prop-types'

export const Activity = props => (
  <div>
    <a rel='noopener noreferrer' href={props.url}>{props.name}</a>
  </div>
)

Activity.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}

export default Activity
