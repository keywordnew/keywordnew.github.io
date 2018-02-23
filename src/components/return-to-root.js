import React from 'react'
import Link from 'gatsby-link'

function ReturnToRoot(props) {
  const isRoot = props.pathname === '/'

  return !isRoot ? <Link to='/'> ⏎</Link> : <div>🚀</div>
}

export default ReturnToRoot
