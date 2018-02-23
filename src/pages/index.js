import React from 'react'
import Link from 'gatsby-link'

import Main from "../components/main"

const ListLink = props =>
  <div>
    <Link to={props.to}>
      {props.children}
    </Link>
  </div>

const IndexPage = () => (
  <Main>
    <Link to="/resume/">
      resumé
    </Link>
    <ListLink to="/making/">
      activity
    </ListLink>
    <ListLink to="/pages/">
      archives
    </ListLink>
    <ListLink to="/back-and-forth/">
      contact
    </ListLink>
  </Main>
)

export default IndexPage
