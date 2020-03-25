import Link from 'next/link'

function Home() {
  return (
    
          <div >
      <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
      <h1 class="ui header">
        <img src="data:image/png;base64,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"></img>
        WelcomeIN</h1>
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