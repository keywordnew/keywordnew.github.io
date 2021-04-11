import React from 'react'
import PropTypes from 'prop-types'

export const Outlink = props => (
  <a target='_blank' rel='noopener noreferrer' href={props.url}>{props.name}</a>
)

Outlink.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}

export default Outlink
