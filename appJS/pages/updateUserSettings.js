import Link from 'next/link'
import React from 'react'
import { Grid, Image, Divider, Button, Header, Modal, Input, Form, Label } from 'semantic-ui-react'


function updateUserSettings() {

    return (
   
    <div >

    <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />

    <h1 style={{ paddingLeft: '8px', paddingTop: '16px' }} class="ui header">Update User Settings</h1>

    <div class="ui divider"></div>

    

    <div style={{ marginRight: '50%', paddingLeft: '16px'}} >

    <Form class="ui form">

<div style={{marginRight: '50%', paddingTop: '10px' }}>
        <Label>
        Name
        </Label>
            <div style={{paddingTop: "10px"}}>
        <Input type="text" name="Name" placeholder="Name"></Input>
                </div>
            </div>

        </Form>

        <Form class="ui form">

            <div style={{marginRight: '50%', paddingTop: '10px' }}>
                <Label>
                    E-Mail
                </Label>
                <div style={{paddingTop: "10px"}}>
                    <Input type="text" name="E-Mail" placeholder="E-Mail"></Input>
                </div>
            </div>

        </Form>

        <Form class="ui form">

            <div style={{marginRight: '50%', paddingTop: '10px' }}>
                <Label>
                    SMS
                </Label>
                <div style={{paddingTop: "10px"}}>
                    <Input type="text" name="Phone Number" placeholder="Phone Number"></Input>
                </div>
            </div>

        </Form>

        <Form class="ui form">

            <div style={{marginRight: '50%', paddingTop: '10px' }}>
                <Label>
                    Home Address
                </Label>
                <div style={{paddingTop: "10px"}}>
                    <Input type="text" name="Home Address" placeholder="Home Address"></Input>
                </div>
            </div>

        </Form>


    </div>
    </div>
 

    )
     
} export default updateUserSettings


{/* <div class="ui divider"></div>
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
</div> */}