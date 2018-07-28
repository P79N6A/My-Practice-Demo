import React from 'react'

const Inbox = ({children}) => (
  <div>
    <h2>Inbox</h2>
    { children || "Welcome to Your Inbox" }
  </div>
)

export default Inbox