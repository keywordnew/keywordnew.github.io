import React from 'react'
import PropTypes from 'prop-types'
import Main from '../components/main'

const InactivePage = props => (
  <div>
    <sup>old</sup><a href={props.url}>{props.name}</a>
  </div>
)

export default () => (
  <Main>
    <div>
      <a href="http://nilspace.xyz">nilspace blog</a>
    </div>

    <InactivePage
      name="research"
      url="https://scholar.google.ca/citations?user=NkPrDiYAAAAJ&hl=en"
    />

    <InactivePage
      name="uni blog"
      url="https://blogs.ubc.ca/chowdhurian/"
    />

    <InactivePage
      name="medium blog"
      url="https://medium.com/@keywordnew"
    />
  </Main>
)

InactivePage.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}
