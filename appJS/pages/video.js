import React, { useState } from "react";
import Link from 'next/link'
import { Button, Table } from 'semantic-ui-react'

export default video;

function video(props) {

    return (

      <div class=" ui clearing segment">
        <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
        <h1 class="ui header">WelcomeIN</h1>
        <div class="ui inverted menu">
        <Link href="/index">
          <a class="item">
            Home
          </a>
          </Link>
          <Link href="/users">
            <a className="item">
              Authorized Individuals
          </a>
          </Link>
          <Link href="/footage">
            <a className="item">
              Footage</a>
          </Link>
          <Link href="/settings">
            <a className="item">
               Settings
          </a>
          </Link>
        </div>
        
        <h2 align="center">Video Activity Logs</h2>
        <div>
        
        <table class="ui selectable celled table">
        <thead>
          <tr>
            <th class="">Name</th>
            <th class="">Date</th>
            <th class="">Time</th>
            <th class="">Footage</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Dani</td>
            <td>4/11/20</td>
            <td>12:00pm</td>
            <td class="center aligned">
              <Button class="ui grey button" href='http://0.0.0.0:8007/footage/'>
              <video width="100" height="100" controls  > <source src= 'http://0.0.0.0:8007/footage/' type="video/mp4"></source></video>
              </Button>
            </td>
          </tr>
          <tr>
            <td>Dani</td>
            <td>4/10/20</td>
            <td>12:00pm</td>
            <td class="center aligned">
              <Button class="ui grey button" href='http://0.0.0.0:8007/footage/'>
              <video width="100" height="100" controls  > <source src= 'http://0.0.0.0:8007/footage/' type="video/mp4"></source></video>
              </Button>
            </td>
          </tr>
          <tr >
            <td>Dani</td>
            <td>4/9/20</td>
            <td>12:00pm</td>
            <td class="center aligned">
              <Button class="ui grey button" href='http://0.0.0.0:8007/footage/'>
              <video width="100" height="100" controls  > <source src= 'http://0.0.0.0:8007/footage/' type="video/mp4"></source></video>
              </Button>
            </td>
          </tr>
        </tbody>
      </table>
      </div>
    </div>



    );
}
;














/*function Video() {


    return <video width="1280" height="720" controls  > <source src= 'http://0.0.0.0:8007/footage/' type="video/mp4"></source></video>
  }
  
  export default Video*/