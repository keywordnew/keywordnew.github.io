import React from 'react'
import Link from 'gatsby-link'

import Container from "../components/container"

const BackAndForthPage = () => (
  <Container>
    <div>
      <a href="https://twitter.com/keywordnew">twitter</a>
    </div>
    <p></p>
    <Link to="/">(back)</Link>
  </Container>
)

export default BackAndForthPage
