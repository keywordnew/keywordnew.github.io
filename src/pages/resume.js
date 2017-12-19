import React from 'react'
import Link from 'gatsby-link'

import Main from "../components/main"

const Resume = props =>
  <div>
    <a href={props.url}>{props.name}</a>
  </div>

export default () =>
  <Main>
    <Resume
      name="linkedin"
      url="https://ca.linkedin.com/in/manilchowdhury"
    />

    <Resume
      name="view pdf"
      url="https://www.dropbox.com/s/sh2l4bvnaznjj4f/manil_chowdhury.pdf?dl=0"
    />

    <Resume
      name="download pdf"
      url="https://www.dropbox.com/s/sh2l4bvnaznjj4f/manil_chowdhury.pdf?dl=1"
    />
  </Main>
