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
    Developer advocate and software engineer, <Link to="/writing/">writing</Link> about open source etc,
    giving <Link to="/speaking/">talks</Link> and <Link to="/working/">workshops</Link>. ex<a href='https://invisionapp.com'>-InVision</a> and <a href='https://edvisor.io'>-Edvisor</a>.
    I live in Vancouver BC 🇨🇦 and <Link to="/resume/">work with remote/distributed teams</Link>. 
    <div><Link to="/contact/">Get in touch.</Link></div>
  </Main>
)

ListLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
}

export default IndexPage
