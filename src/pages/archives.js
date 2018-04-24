import React from 'react'
import Link from 'gatsby-link'

import Main from "../components/main"

const InactivePage = props =>
  <div>
    <sup>old</sup><a href={props.url}>{props.name}</a>
  </div>

export default () =>
  <Main>
    <InactivePage
      name="research"
      url="https://scholar.google.ca/citations?user=NkPrDiYAAAAJ&hl=en"
    />

    <InactivePage
      name="writing"
      url="https://blogs.ubc.ca/chowdhurian/"
    />
  </Main>
