import React from 'react'
import Link from 'gatsby-link'

function Nav({ location }) {
  return location.pathname === '/' ? <div>🚀</div> : <Link to='/'> ⏎</Link>
}

export default Nav
