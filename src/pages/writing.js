import React from 'react'
import PropTypes from 'prop-types'

import Main from '../components/main'
import Outlink from '../components/outlink'

const InactivePage = props => (
  <div>
    <sup>old</sup><Outlink name={props.name} url={props.url} />
  </div>
)

export default () => (
  <Main>
    <div>
      <Outlink name='nilspace' url="https://manil.space" />
    </div>

    <InactivePage
      name="scholarly research"
      url="https://scholar.google.ca/citations?user=NkPrDiYAAAAJ&hl=en"
    />

    <InactivePage
      name="school blog"
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
