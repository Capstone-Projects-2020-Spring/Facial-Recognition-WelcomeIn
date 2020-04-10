import React, { useState } from "react";
import Link from 'next/link'

export default photos;

function photos(props) {

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
        
        <h2 align="center">Photo Activity Logs</h2>
        <div class= "ui container">
        <div class="ui relaxed divided list">
            <div class="item">
                <i class="camera icon"></i>
                <div class="content">
                <a class = "header" href='https://mydreamsymbolism.com/wp-content/uploads/2019/06/Dreaming-of-Intruders-Meaning-and-Symbolism-700x400.jpg'>Photo 1</a>
                <div class="description">4/10/20</div>
                <div class="description">10 mins ago</div>
                </div>
            </div>
            <div class="item">
                <i class="camera icon"></i>
                <div class="content">
                <a class = "header" href='http://0.0.0.0:8007/footage/'>Photo 2</a>
                <div class="description">4/10/20</div>
                <div class="description">22 mins ago</div>
                </div>
            </div>
            <div class="item">
                <i class="camera icon"></i>
                <div class="content">
                <a class = "header" href='http://0.0.0.0:8007/footage/'>Photo 3</a>
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