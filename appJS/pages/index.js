import Link from 'next/link'
import React, { useState } from "react";
import { Image, Divider, Button, Header, Modal, Input, Form, Segment, Label } from 'semantic-ui-react'
import axios from "axios"

function Home() {
  
  const [temperature, setTemperature] = useState("");
  const [forecast, setForecast] = useState("");

  axios({
    "method": "GET",
    "url": "https://weatherbit-v1-mashape.p.rapidapi.com/current",
    "headers": {
      "content-type": "application/octet-stream",
      "x-rapidapi-host": "weatherbit-v1-mashape.p.rapidapi.com",
      "x-rapidapi-key": "830f214fe3msh7fa9a15365fbc2bp14cb63jsn2a8b9cccfc0b"
    }, "params": {

      "units": "I",
      "lang": "undefined",
      "lon": "-75.165222",
      "lat": "39.9526"
    }
  }).then((responseGet)=>{
    setTemperature(responseGet.data.data[0].temp);
    setForecast(responseGet.data.data[0].weather.description);
  });

  var d = new Date();
  var n = d.getHours();
  var greeting = "";

  if (n < 12) {
    greeting = "Good morning";
  } else if (n < 18) {
    greeting = "Good afternoon";
  } else {
    greeting = "Good evening";
  }

  return (

    <div style={{ paddingLeft: '8px' }}>
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
    <div class="ui container">
    <div class=" ui clearing segment">
    <div>
      <a className="item" style={{textAlign: "right"}}>
        <Modal trigger = {
          <Button style={{textAlign: "right"}}>Login</Button>
        }>
            <Modal.Header>WelcomeIN</Modal.Header>
            <Modal.Content>
                    <Modal.Description>
                        <Header>Log In</Header>
                        <p>
                        <form className="ui form">
                        <div className="field">
                        <label>Email</label>
                        <input name="email" type="text" placeholder="example@gmail.com">
                        </input>
                        <Divider horizontal></Divider>
                        <label>Password</label>
                        <input name="password" type="text" placeholder="Password...">
                        </input>
                        <Divider horizontal></Divider>
                        <button class="small ui button">
                          LOGIN
                        </button>
                        <Divider horizontal>OR</Divider>
                        <Segment>
                        <Segment basic textAlign={"center"}>
                            <p>Don't have an account?</p>
                            <Button style={{textAlign: "center"}}>SIGN UP</Button>
                        </Segment>
                    </Segment>
                    </div>
                </form>
                        </p>
                    </Modal.Description>
                </Modal.Content>
        </Modal>
        </a>
    </div>
    </div>
</div>

      </div>

      <div>
        <img style={{ float: 'left', width: '60%' }} src="https://equalrightscenter.org/wp-content/uploads/house-icon-1.png"></img>
        <div style={{ float: 'left' }}>
          <h2>{greeting}, Charlie!</h2>
          <div style={{ marginLeft: '40px' }}>
            <div>
              <p>The forecast is {(forecast == null) ? <em>Loading...</em> : forecast}.</p>
              <p>The temperature is {(temperature== null) ? <em>Loading...</em> : temperature} degrees.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}


export default Home

{/* <Link href="/footage">
<a>About Us</a>
</Link> */}


// Page.getInitialProps = async ctx => {
//   const res = await fetch('http://0.0.0.0:8007/footage/')
//   console.log(res);
//   return { img }
// }

// How to get video source from server 
//<video> <source src= 'http://0.0.0.0:8007/footage/' autoplay type="video/mp4"></source></video>