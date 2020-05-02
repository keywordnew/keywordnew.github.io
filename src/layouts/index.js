import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import { BrowserRouter as Router, Route } from 'react-router-dom' // eslint-disable-line no-unused-vars
import favicon48 from '../assets/icon.png'
import Main from '../components/main'
import Nav from '../components/nav'

const Header = () => (
  <div
    style={{
      margin: '30px auto',
      maxWidth: 600,
      padding: '0 20px',
      // textAlign: 'center',
    }}
  >
    <h1>
      <Link to="/">
        manil chowdhury
      </Link>
    </h1>
    <h3>
      <Route path="/" component={Nav} />
    </h3>
  </div>
)

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="manil <> a page"
      meta={[
        { name: 'description', content: 'personal landing page' },
        { name: 'keywords', content: 'distributed, remote, javascript, vancouver, developer, web, nodejs, engineer, consultant' },
      ]}
      link={[
        { rel: 'icon', href: `${favicon48}`, type: 'image/png', sizes: '48x48' },
      ]}
    />
    <Header />
    <Main>
      {children()}
    </Main>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func.isRequired,
}

export default TemplateWrapper
