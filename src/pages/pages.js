import React from 'react'
import Link from 'gatsby-link'

import Container from "../components/container"

const Page = props =>
  <div>
    <div>
      <a href={props.url}>{props.name}</a>
    </div>
  </div>

export default () =>
  <Container>
    <Page
      name="writing"
      url="https://medium.com/@keywordnew"
    />

    <Page
      name="reading"
      url="https://www.goodreads.com/user/show/4748872-manil"
    />

    <Page
      name="research"
      url="https://scholar.google.ca/citations?user=NkPrDiYAAAAJ&hl=en"
    />

    <Page
      name="old writing"
      url="https://blogs.ubc.ca/chowdhurian/"
    />

    <p></p>
    <Link to="/">(back)</Link>
  </Container>
