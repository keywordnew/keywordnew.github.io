import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <div>
      <Link
        to="/back-and-forth/"
      >
        back and forth
      </Link>
    </div>
    <div>
      <Link
        to="/making/"
      >
        making
      </Link>
    </div>
    <div>
      <Link
        to="/pages/"
      >
        pages
      </Link>
    </div>
    <div>
      <Link
        to="/resume/"
      >
        resume
      </Link>
    </div>
  </div>
)

export default IndexPage
