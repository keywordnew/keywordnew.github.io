import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import Main from '../components/main'

const Header = () => (
  <div
    style={{
      margin: '3rem auto',
      maxWidth: 600,
      textAlign: 'center',
    }}
  >
    <h2>
      <Link to="/">
        manil chowdhury
      </Link>
    </h2>
  </div>
)

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="manil <> a page"
      meta={[
        { name: 'description', content: 'personal landing page' },
        { name: 'keywords', content: 'javascript, vancouver, developer, web, nodejs, engineer' },
      ]}
    />
    <Header />
    <Main>
      {children()}
    </Main>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
