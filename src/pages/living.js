import React from 'react'
import Main from '../components/main'
import Outlink from '../components/outlink'

export default () => (
  <Main>
    <div>
      <Outlink
        name="reading"
        url="https://www.goodreads.com/user/show/4748872-manil"
      />
    </div>

    <div>
      <Outlink
        name="github"
        url="https://github.com/keywordnew"
      />
    </div>

    <div>
      <Outlink
        name="gitlab"
        url="https://gitlab.com/keywordnew"
      />
    </div>

    <div>
      <Outlink
        name="tweeting"
        url="https://twitter.com/keywordnew"
      />    
    </div>

    <div>
      <Outlink
        name="tooting"
        url="https://toot.cafe/@manil"
      />
    </div>
  </Main>
)
