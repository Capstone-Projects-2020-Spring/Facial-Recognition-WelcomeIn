import React, { useState } from "react";
import Link from 'next/link'

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
        <div class= "ui container">
        <div class="ui relaxed divided list">
            <div class="item">
                <i class="film icon"></i>
                <div class="content">
                  <a class = "header" href='http://0.0.0.0:8007/footage/'>Video 1</a>
                  <div class="description">4/10/20</div>
                <div class="description">10 mins ago</div>
                </div>
            </div>
            <div class="item">
                <i class="film icon"></i>
                <div class="content">
                <a class = "header" href='http://0.0.0.0:8007/footage/'>Video 2</a>
                <div class="description">4/10/20</div>
                <div class="description">22 mins ago</div>
                </div>
            </div>
            <div class="item">
                <i class="film icon"></i>
                <div class="content">
                <a class = "header" href='http://0.0.0.0:8007/footage/'>Video 1</a>
                <div class="description">4/10/20</div>
                <div class="description">34 mins ago</div>
                </div>
            </div>
            </div>
            </div>
        </div>



    );
}
;














/*function Video() {


    return <video width="1280" height="720" controls  > <source src= 'http://0.0.0.0:8007/footage/' type="video/mp4"></source></video>
  }
  
  export default Video*/