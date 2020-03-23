import Link from 'next/link'

function Video() {

    return <video width="1280" height="720" controls  > <source src= 'http://0.0.0.0:8007/footage/' type="video/mp4"></source></video>
  }
  
  export default Video