import React from 'react'
import Link from 'gatsby-link'

function Nav({ location }) {
  return location.pathname === '/' ? <div><span role="img" aria-label="rocket emoji">🚀</span></div> : <Link to="/"> ⏎</Link>
}

export default Nav
