import Link from 'next/link'
import React from 'react'

function Footage() {

    return <div>
        <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
        
      <h1 class="ui header">Footage</h1>
      <div class="ui inverted menu"></div>
      <div>

    
        <div class="ui centered card">
  <div class="content">

     
      <Link href="/video">
      <div class="header">Video</div>
</Link>
    <div class="meta">Last Activity: Today</div>
    <div class="description">
      <p>View Video Footage recorded from the security cameras.</p>
        </div>
    </div>
    </div>

     

    <div class="ui centered card">
  <div class="content">
    <div class="header">Photos</div>
    <div class="meta">Last Activity: 2 Days ago</div>
    <div class="description">
      <p>view Headshots of Indiviuals who have entered the premeises via security cameras.</p>
    </div>
  </div>
</div>

      </div>
    </div>
  }
  
  export default Footage