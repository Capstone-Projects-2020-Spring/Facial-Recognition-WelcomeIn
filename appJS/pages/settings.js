import Link from 'next/link'
import React, { useState, useEffect } from "react";
import { Grid, Image, Divider, Button, Header, Modal, Input, Form, Label } from 'semantic-ui-react'
import axios from "axios"

function settings() {
  
  const [list, setArray] = useState([]);
  const CancelToken = axios.CancelToken;
  const source = CancelToken.source();

  useEffect(() => {
      axios.get("http://10.0.0.142:8007/userpersonalsettings/").then((responseGet) => setArray(responseGet.data));
  }, []);

  var name = list.name;
  var email = list.email;
  var sms = list.smsnumber;
  var address = list.houseaddress;

  return (
    <div style={{ paddingLeft: '8px' }}>
      <div class=" ui clearing segment">
        <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
        <h1 class="ui header">WelcomeIN</h1>
        <div class="ui inverted menu">
        <Link href="/index">
            <a className="item">
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
            <a className="active item">
               Settings
          </a>
          </Link>

        </div>
        <div style={{ paddingTop: '16px' }} class="ui center aligned grid">
          <h2 class="ui icon header">
            <i class="settings icon"></i>
            <div class="content">
              Settings
    <div class="sub header">Manage your account settings and set e-mail preferences.</div>
            </div>
          </h2>
        </div>

        <div class="ui divider"></div>
        <div class="sub header"> Notification Settings: </div>
        <div style={{ paddingLeft: '40%' }} class="ui padded left aligned grid">

          <div class="white row" >

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

          <div class="white row" >
            <div class="ui toggle checkbox">
              <input type="checkbox" name="public"></input>
              <label>Receive Notifications via SMS</label>
            </div>
          </div>

          <div class="white row" >
            <div class="ui toggle checkbox">
              <input type="checkbox" name="public"></input>
              <label>Receive Notifications via E-Mail</label>
            </div>
          </div>

        </div>

        <button style={{ marginLeft: '90%' }} class="positive ui button">Save Changes</button>
        <div class="ui divider"></div>
        <div className="content">Current Account Settings: </div>
        <div style={{ paddingLeft: '8px', paddingTop: '8px' }}>

       
        <div style={{ marginRight: '50%', paddingTop: '10px' }} class="ui segment">
          <p>Name: {name}</p>
        </div>
        <div style={{ marginRight: '50%', paddingTop: '10px' }} class="ui segment">
        <p>E-Mail: {email}</p>
        </div>
        <div style={{ marginRight: '50%', paddingTop: '10px' }} class="ui segment">
        <p>SMS Number: {sms}</p>
        </div>
        <div style={{ marginRight: '50%', paddingTop: '10px' }} class="ui segment">
        <p>Address: {address}</p>
        </div>

        <Link href="updateUserSettings"><button style={{ marginLeft: '90%' }} class="positive ui button">Update Information</button></Link>

        
        </div>
      </div>
    </div> //ending page
  )


} export default settings
