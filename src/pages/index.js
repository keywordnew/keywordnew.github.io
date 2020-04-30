import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

import Main from '../components/main'

const ListLink = props => (
  <div>
    <Link to={props.to}>
      {props.children}
    </Link>
  </div>
)

const IndexPage = () => (
  <Main>
    <p>
      Developer advocate and software engineer, <Link to="/writing/">writing about the web and finding calm</Link>, giving <Link to="/speaking/">talks</Link>, and building <Link to="/communities/">communities</Link>. ex<a target='_blank' rel='noopener noreferrer' href='https://invisionapp.com'>-InVision</a> and <a target='_blank' rel='noopener noreferrer' href='https://edvisor.io' target='_blank'>-Edvisor</a>. I'm <Link to='/living/'>living</Link> in Vancouver BC 🇨🇦 and <Link to="/resume/">working</Link> with remote/distributed teams.
    </p>
    <Link to="/contact/">Get in touch.</Link>
  </Main>
)

ListLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
}

export default IndexPage
