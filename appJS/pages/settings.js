import Link from 'next/link'
import React from 'react'

function settings() {
    return (
    
        <div >
    <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
    <h1 class="ui header">WelcomeIN</h1>
    <div class="ui inverted menu">
    <a class="active item">
      Home
    </a>
    <Link href="/users">
        <a className="item">
        Authroized Individuals
          </a>
      </Link>
      <Link href="/settings">
        <a className="item">
        Notification Settings            </a>
      </Link>
      <Link href="/footage">
        <a className="item">
        Footage
          </a>
      </Link>

  </div>
  </div>
)


} export default settings