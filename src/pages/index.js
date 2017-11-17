import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <div>
      <Link
        to="/back-and-forth/"
        style={{
          textDecoration: 'none',
        }}
      >
        back and forth
      </Link>
    </div>
    <div>
      <Link
        to="/making/"
        style={{
          textDecoration: 'none',
        }}
      >
        making
      </Link>
    </div>
    <div>
      <Link
        to="/pages/"
        style={{
          textDecoration: 'none',
        }}
      >
        pages
      </Link>
    </div>
    <div>
      <Link
        to="/resume/"
        style={{
          textDecoration: 'none',
        }}
      >
        resume
      </Link>
    </div>
  </div>
)

export default IndexPage
