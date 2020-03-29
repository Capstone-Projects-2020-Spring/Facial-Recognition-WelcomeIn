import Link from 'next/link'
import React from 'react'
import { Grid, Image, Divider, Button, Header, Modal, Input, Form, Label } from 'semantic-ui-react'

function settings() {
  return (
    <div style={{ paddingLeft: '8px' }}>
      <div >
        <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
        <h1 class="ui header"> WelcomeIN</h1>
        <div class="ui inverted menu">
          <a class="item">
            Home
    </a>
          <Link href="/users">
            <a className="item">
              Authorized Individuals
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

        <div class="ui divider"></div>
        <div className="content">User Settings: </div>
        <div style={{ marginLeft: '20px' }}>
          <Form class="ui form">

            <div style={{ marginRight: '50%', paddingTop: '10px' }} class="field">
              <Label>
                E-Mail
            </Label>
              <div style={{ paddingTop: "10px" }}>
                <Input type="text" name="E-Mail" placeholder="E-Mail"></Input>
              </div>
            </div>

            <div style={{ marginRight: '50%', paddingTop: '10px' }} class="field">
              <Label>
                SMS Number
            </Label>
              <div style={{ paddingTop: "10px" }}>
                <Input type="text" name="Phone Number" placeholder="Phone Number"></Input>
              </div>
            </div>

          </Form>
        </div>
        <button style={{ marginLeft: '90%' }} class="positive ui button">Save Changes</button>
        <div class="ui divider"></div>
        <div className="content">Current Account Settings: </div>
        <div style={{ paddingLeft: '8px', paddingTop: '8px' }}>

       
        <div style={{ marginRight: '50%', paddingTop: '10px' }} class="ui segment">
          <p>Name: Shakthi Panneer</p>
        </div>
        <div style={{ marginRight: '50%', paddingTop: '10px' }} class="ui segment">
        <p>E-Mail: tug40828@temple.edu</p>
        </div>
        <div style={{ marginRight: '50%', paddingTop: '10px' }} class="ui segment">
        <p>SMS Number: 267-475-6761</p>
        </div>
        <div style={{ marginRight: '50%', paddingTop: '10px' }} class="ui segment">
        <p>Address: 15 Hartfeld Road</p>
        </div>

        
        </div>
      </div>
    </div> //ending page
  )


} export default settings