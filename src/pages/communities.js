import React from 'react'
import Main from '../components/main'
import Outlink from '../components/Outlink'

export default () => (
  <Main>
    <div>
      <Outlink
        name="cambie collective"
        url="https://cambiecollective.github.io"
      />
    </div>
      
    <div>
      <Outlink
        name="node.js"
        url="https://github.com/nodejs/community-committee"
      />
    </div>

    <div>
      <Outlink
        name="code & coffee yvr"
        url="https://www.meetup.com/codecoffeeyvr/"
      />
    </div>

    <div>
      <Outlink
        name="nodeschool yvr"
        url="https://nodeschool.io/vancouver/"
      />
    </div>
  </Main>
)
