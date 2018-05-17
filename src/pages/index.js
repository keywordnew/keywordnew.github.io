import React from 'react'
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
    <ListLink to="/activities/">
      activities
    </ListLink>
    <ListLink to="/archives/">
      archives
    </ListLink>
    <ListLink to="/contact/">
      contact
    </ListLink>
  </Main>
)

export default IndexPage
