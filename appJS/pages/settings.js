import Link from 'next/link'
import React from 'react'

function settings() {
  return (

    <div >
      <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
      <h1 class="ui header"> WelcomeIN</h1>
      <div class="ui inverted menu">
        <a class="item">
          Home
    </a>
        <Link href="/users">
          <a className="item">
            Authroized Individuals
          </a>
        </Link>
        <Link href="/settings">
          <a className="active item">
            Notification Settings</a>
        </Link>
        <Link href="/footage">
          <a className="item">
            Footage
          </a>
        </Link>

      </div>
         -
      <div>

      </div>
      <div class="ui center aligned grid">
        <h2 class="ui icon header">
          <i class="settings icon"></i>
          <div class="content">
            Notification Settings
    <div class="sub header">Manage your account settings and set e-mail preferences.</div>
          </div>
        </h2>
      </div>
      
      <div class="ui padded center aligned grid">
      
        <div class="red row" >
    
          <div class="ui toggle checkbox">
            <input type="checkbox" name="public"></input>
              <label>Receive Notifications if Strangers are detected.</label>
              
          </div>
          </div>

          <div class="white row" >

          <div class="ui toggle checkbox">
            <input type="checkbox" name="public"></input>
              <label>Receive Notifications if Authroized Individuals are detected.</label>
              
          </div>
          </div>
          
          <button class="positive ui button">Save Changes</button>

          
        </div>











      </div> //ending page 
  )


} export default settings