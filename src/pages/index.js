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
      Developer advocate and software engineer, <Link to="/writing/">writing about finding calm on the web</Link>, creating <a target='_blank' rel='noopener noreferrer' href='https://www.womburtle.com/'>products for meatspace</a>, and building <Link to="/communities/">communities</Link>. ex<a target='_blank' rel='noopener noreferrer' href='https://www.crunchbase.com/organization/invisionapp'>-InVision</a>, <a target='_blank' rel='noopener noreferrer' href='https://www.crunchbase.com/organization/edvisor-io' target='_blank'>-Edvisor</a>, and <a target='_blank' rel='noopener noreferrer' href='https://www.crunchbase.com/organization/university-of-british-columbia'>-UBC</a>. I'm <Link to='/living/'>living</Link> in Vancouver BC 🇨🇦 and <Link to="/resume/">working</Link> with remote/distributed teams.
    </p>
    <Link to="/contact/">Get in touch.</Link>
  </Main>
)

ListLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
}

export default IndexPage
