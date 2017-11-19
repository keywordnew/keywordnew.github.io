import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './index.css'

const Header = () => (
  <div
    style={{
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '3rem auto',
        maxWidth: 600,
        // padding: '1.45rem 1.0875rem',
      }}
    >
      <h1>
        <Link
          to="/"
        >
          manil chowdhury
        </Link>
      </h1>
    </div>
  </div>
)

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="manil | a page"
      meta={[
        { name: 'description', content: 'personal landing page' },
        { name: 'keywords', content: 'javascript, vancouver, nodejs, engineer' },
      ]}
    />
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 650,
        padding: '0 1rem',
      }}
    >
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
