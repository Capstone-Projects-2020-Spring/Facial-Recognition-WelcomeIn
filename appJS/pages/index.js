import Link from 'next/link'
import React, { useState } from "react";
import axios from "axios"
//import logo from './images/cloud.PNG';

function Home() {
  
  const [temperature, setTemperature] = useState("");
  const [forecast, setForecast] = useState("");
  const [pic, setPic] = useState("");

  var d = new Date();

  const phillyWoeId = 2471217;
  var month = d.getMonth() + 1;
  var day = d.getDate();
  var year = d.getFullYear();

  var endURL = ""+ phillyWoeId +"/"+ year +"/"+ month+"/"+ day+"/";

  axios.get("https://www.metaweather.com/api/location/" + endURL).then((responseGet)=>{
    console.log(responseGet);
    var temp = responseGet.data[36].the_temp * (9.0/5) + 32.0;
    setTemperature(temp.toFixed(1));
    setForecast(responseGet.data[36].weather_state_name.toLowerCase());
    if(responseGet.data[36].weather_state_name.toLowerCase().includes("cloud")){
      setPic("https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/91789275_3796902540350047_445788270698168320_n.jpg?_nc_cat=105&_nc_sid=8024bb&_nc_ohc=gP6FPoLPhYoAX9GMdnG&_nc_ht=scontent-iad3-1.xx&oh=b2ce54fbd3be5efa69bb47af18069ba2&oe=5EA7C05C");
    }else if(responseGet.data[36].weather_state_name.toLowerCase().includes("rain") || responseGet.data[36].weather_state_name.toLowerCase().includes("shower")){
      setPic("https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/91805606_3796902543683380_8138526403839655936_n.jpg?_nc_cat=108&_nc_sid=8024bb&_nc_ohc=Yh7RICCEdUMAX-U9dUz&_nc_ht=scontent-iad3-1.xx&oh=b846e7f91baf2542ffa275f29a974d35&oe=5EA703D2");
    }else if(responseGet.data[36].weather_state_name.toLowerCase().includes("clear")){
      setPic("https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/91473012_3796902630350038_6098355064940789760_n.jpg?_nc_cat=100&_nc_sid=8024bb&_nc_ohc=Wj8z1CBeJqgAX8NHVHG&_nc_ht=scontent-iad3-1.xx&oh=d01e337cbbb5bb02b7e6e2041d6c2568&oe=5EA74F93");
    }
  });

  var n = d.getHours();
  var greeting = "";

  if (n < 12) {
    greeting = "Good morning";
  } else if (n < 17) {
    greeting = "Good afternoon";
  } else {
    greeting = "Good evening";
  }

  //const logo = require('./images/cloud.PNG');

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

      </div>
      <div>
        <img style={{ float: 'left', width: '60%' }} src="https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/91440986_3796902550350046_4463254156290818048_n.jpg?_nc_cat=108&_nc_sid=8024bb&_nc_ohc=XSUfZwvhiRsAX-1dZ-l&_nc_ht=scontent-iad3-1.xx&oh=b00b74cf690c9c82040bdb4da31fe637&oe=5EA7AFB7"></img>
        <div style={{ float: 'left' }}>
          <img style={{ width: '60%' }} src={pic}></img>
          <div style={{ marginLeft: '40px' }}>
          <h2 style={{paddingTop:'16px'}}>{greeting}, Shakthi!</h2>
            <div>
              <p>The forecast is {(forecast == null) ? <em>Loading...</em> : forecast}.</p>
              <p>The temperature is {(temperature== null) ? <em>Loading...</em> : temperature} °F.</p>
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