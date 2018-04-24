import React from 'react'
import Link from 'gatsby-link'

import Main from "../components/main"

const Resume = props =>
  <div>
    <a href={props.url}>{props.name}</a>
  </div>

export default () =>
  <Main>
    <Resume
      name="view pdf"
      url="https://drive.google.com/open?id=1Z3G52y1qNkvHGwUBkJheyoCFQ_-43_2s"
    />

    <Resume
      name="download pdf"
      url="https://doc-0c-0c-docs.googleusercontent.com/docs/securesc/ha0ro937gcuc7l7deffksulhg5h7mbp1/hb2pq2kr7vp0vbnei84g6fkv35ruj62q/1524592800000/08430212430750148255/*/1Z3G52y1qNkvHGwUBkJheyoCFQ_-43_2s?e=download"
    />

    <Resume
      name="linkedin"
      url="https://ca.linkedin.com/in/manilchowdhury"
    />
  </Main>
