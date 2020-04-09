import React from 'react'

export default ({ children }) => ( // eslint-disable-line react/prop-types
  <div
    style={{
      margin: '30px auto',
      maxWidth: 600,
      padding: '0 10px',
      // textAlign: 'center',
    }}
  >
    {children}
  </div>
)
