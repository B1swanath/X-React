import React from 'react'
import { Link } from 'react-router-dom'

function Topnav() {
  return (
    <div>
      <div className='navbar navbar-expand-lg nav0 '>
      <div className='container-fluid nav1'>

        {/* Spotify-Logo */}
        <Link className='spotify_logo' to='/dashboard'>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" class="bi bi-spotify my-2" viewBox="0 0 16 16">
            <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.669 11.538a.5.5 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686m.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858m.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288"/>
          </svg>
        </Link>

        {/* Search-bar */}
        <form action="">
          {/* Home-Logo */}
          <Link className='Home_logo' to='/dashboard'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" class="bi bi-house-door-fill mb-1" viewBox="0 0 16 16">
            <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5"/>
            </svg>
          </Link>
            <input className='nav-Search_bar' type="text" placeholder=' What do you want to play?  ' />                     
        </form>

        <div className='nav_ls_btn'>
          <Link to='/signup'><button className='nav_signup_btn nav_btn'>Sign up</button></Link>
          <Link to='/'><button className='nav_login_btn nav_btn'>Log in</button></Link>           
        </div>

      </div>
    </div>
    </div>
  )
}

export default Topnav