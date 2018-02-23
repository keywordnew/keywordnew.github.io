import React from 'react'
import Link from 'gatsby-link'

import Main from "../components/main"

const Page = props =>
  <div>
    <a href={props.url}>{props.name}</a>
  </div>

const InactivePage = props =>
  <div>
    <sup>old</sup><a href={props.url}>{props.name}</a>
  </div>

export default () =>
  <Main>
    <Page
      name="writing"
      url="https://medium.com/@keywordnew"
    />

    <Page
      name="reading"
      url="https://www.goodreads.com/user/show/4748872-manil"
    />

    <Page
      name="researching"
      url="https://scholar.google.ca/citations?user=NkPrDiYAAAAJ&hl=en"
    />

    <InactivePage
      name="writing"
      url="https://blogs.ubc.ca/chowdhurian/"
    />
  </Main>
