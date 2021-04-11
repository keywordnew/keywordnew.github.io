import React from 'react'
import Main from '../components/main'
import Outlink from '../components/outlink'

const Contact = () => (
  <Main>
    <div>
      <Outlink name='Slide into the DMs' url='https://twitter.com/keywordnew' />. (Response times vary, a lot.)
    </div>
    <div>
      <p>Or, preferably, send an email to <Outlink name="dinghyprotegee@ this website's domain" url='mailto:dinghyprotegee@manil.xyz' />. This address is randomly generated and replaced periodically, to reduce spam.</p>
    </div>
  </Main>
)

export default Contact
