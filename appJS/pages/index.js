import Link from 'next/link'

function Home() {
  return (
    
          <div >
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

    <div class="ui labeled button" tabindex="0">
  <div class="ui red button">
    <i class="heart icon"></i> Like
  </div>
  <a class="ui basic red left pointing label">
    1,048
  </a>
</div>
<div class="ui labeled button" tabindex="0">
  <div class="ui basic blue button">
    <i class="fork icon"></i> Forks
  </div>
  <a class="ui basic left pointing blue label">
    1,048
  </a>
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