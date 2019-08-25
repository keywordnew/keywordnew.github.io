import React from 'react'
import Link from 'gatsby-link'
import Main from '../components/main'
import Activity from '../components/activity'

export default () => (
  <Main>
    <Activity
      name="github"
      url="https://github.com/keywordnew"
    />

    <Link to="/communities/">
      communities
    </Link>

    <Activity
      name="writing"
      url="https://medium.com/@keywordnew"
    />

    <Activity
      name="reading"
      url="https://www.goodreads.com/user/show/4748872-manil"
    />
  </Main>
)