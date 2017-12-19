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
    <ListLink to="/back-and-forth/">
      back and forth
    </ListLink>
    <ListLink to="/making/">
      making
    </ListLink>
    <ListLink to="/pages/">
      pages
    </ListLink>
    <Link to="/resume/">
      resume
    </Link>
  </Main>
)

export default IndexPage
