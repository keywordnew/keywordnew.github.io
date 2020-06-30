import React from 'react'
import PropTypes from 'prop-types'
import Main from '../components/main'

const Resume = props => (
  <div>
    <a href={props.url}>{props.name}</a>
  </div>
)

export default () => (
  <Main>
    <Resume
      name="1-page pdf summary"
      url="https://drive.google.com/file/d/1iRTlxw9B6suED-wPGKm29955aDVjyDVX/view?usp=sharing"
    />

    <Resume
      name='"the works" on linkedin'
      url="https://ca.linkedin.com/in/manilchowdhury"
    />
  </Main>
)

Resume.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}
