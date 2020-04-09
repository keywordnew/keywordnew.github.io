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
    <Link to="/resume/">
      resumé
    </Link>
    <ListLink to="/writing/">
      writing
    </ListLink>
    <ListLink to="/working/">
      working
    </ListLink>
    <ListLink to="/speaking/">
      speaking
    </ListLink>
    <ListLink to="/contact/">
      contact
    </ListLink>
  </Main>
)

ListLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
}

export default IndexPage
