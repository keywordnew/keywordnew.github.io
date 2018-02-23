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
      making
    </ListLink>
    <ListLink to="/pages/">
      pages
    </ListLink>
    <ListLink to="/back-and-forth/">
      back & forth
    </ListLink>
  </Main>
)

export default IndexPage
