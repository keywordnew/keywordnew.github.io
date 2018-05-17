import React from 'react'
import PropTypes from 'prop-types'
import Main from '../components/main'

const Activity = props => (
  <div>
    <a href={props.url}>{props.name}</a>
  </div>
)

export default () => (
  <Main>
    <Activity
      name="github"
      url="https://github.com/chowdhurian"
    />

    <Activity
      name="writing"
      url="https://medium.com/@keywordnew"
    />

    <Activity
      name="reading"
      url="https://www.goodreads.com/user/show/4748872-manil"
    />
  </Main>
)

Activity.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}
