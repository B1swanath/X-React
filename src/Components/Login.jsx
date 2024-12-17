import React from 'react';
// import '../App.css';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className='login_main'>
      <div className='login_m1'>
        <Link className='spotify_logo' to='/dashboard'>
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-spotify my-2" viewBox="0 0 16 16">
        <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.669 11.538a.5.5 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686m.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858m.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288"/>
        </svg>
        </Link>

        <h2 className='Head1'>Login to Spotify</h2>

        <div className='login_link'>

        <Link to='https://accounts.google.com/v3/signin/identifier?opparams=%253F&dsh=S-1174256202%3A1733727561883931&access_type=offline&client_id=1046568431490-ij1gi5shcp2gtorls09frkc56d4mjbe2.apps.googleusercontent.com&ddm=1&o2v=2&redirect_uri=https%3A%2F%2Faccounts.spotify.com%2Flogin%2Fgoogle%2Fredirect&response_type=code&scope=profile+email+openid&service=lso&state=AQCqxOebS%2FCS97En5e1vInVz9MHv6scu%2F82x9QRmhR4SOwA%2FqBGnRCwbr0KoJtRNk0ST3kOjqf7TPZXhu0Be9VaYSTO1m%2F3jWQ%2BinVMD0RXbWaxOyt2hbW5LPkdZ4W5IiM8o5gJmOS3%2BP1Kg4xDTAIYhHRDbJsHZHwCQL%2BZRpwB8nVziSRDSJlfMwFoKuGt2TVDxAPfHPmWHCRY0evRrnU15gGb2j3hEKbf489r6UQc2It1QwBT4Uie43qcCZj164nBs%2F4hGctzbZd%2FQpI94iXfq3xaw6KNhKkcfnQI3olRAZ5mKsYZuaJkRimiQ3ZhVXFTbysWCN%2BSMh2B6t7Y946lz4g5U92HHmHbvAYlgaUpjqX9ZGs64DotapI553EHhmMagmQdwmP1TSQT66e1p7UmpUkG6QYERE04HPmhoA1XNsct7Z%2FmlAcirhUwOrO76i%2Bxv%2B4Lwdw8AQTLC6FHKH5LQiFAZGZlM311%2F4nUzgWU0Zw3%2FGBQsyl44OFEiKYfiPdqF3N%2B04pQdJylbOsWj0fu7Qy73UlCt6T5h8JCeIqk8NLvYTw3PfZ73qx6uSxIvzASxr8pu2w%3D%3D&flowName=GeneralOAuthFlow&continue=https%3A%2F%2Faccounts.google.com%2Fsignin%2Foauth%2Fconsent%3Fauthuser%3Dunknown%26part%3DAJi8hAPWKOEbncmWjFEkV9NNWHcPIWCMux7XlX8ojBh53L0zqw8tjoKlh_xpj9kBnS07DVzpLHL8sg-JGlFB_y6QI-vOdTyY66nidRAd13BlYV3km_CCxMWYgscO1TQAan2mJIsYlkFg4vx1RvqRqoygHNBey6UsHdgFQoOPDoNx0pCZyj1XBn_1uSqAaoF4tK6EJApzCtnNEjw6DW8CAsRAJ1J99ioEChpS_vK4JW4n_oqIyssjNUwrdWrH3jniIhJ1IqoD5xZJ2BCyGI9VwZSruHQPh_fXAL_uEQxPb58epZx54Nc6BOV7VxdpkSr_6Udl0ONI-fwqoS_4nRxskOHHTqNI_M_qx1w5-4iP3ih5UZtpQCzNdgaGXPwfvjPV3_Y-jUMafsw-1JTvjd6fYuEDy6EiPu6v9fMKe8tFX-1sQAkcl3OVJ6AHu4O2IcJY-oZbHJxraLvfwg3iWNfMBnbf0486V5bt3tpLWcKsLcjUamgo4FT2biU%26flowName%3DGeneralOAuthFlow%26as%3DS-1174256202%253A1733727561883931%26client_id%3D1046568431490-ij1gi5shcp2gtorls09frkc56d4mjbe2.apps.googleusercontent.com%23&app_domain=https%3A%2F%2Faccounts.spotify.com&rart=ANgoxce7UW6kHzVtHuiwrCia1lpX_ZwCD8ll8rHXgeOmA9OjW9C-w578knGDt-Lju5FmpSkdI4Mk-HMDXAZt1O8LoXwhVTIE9J_wGMmRMF9XlY5wL3rQZ8Y'>
        <button className='btn'>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-google mb-1 me-3" viewBox="0 0 16 16">
        <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z"/>
        </svg>
        Continue with Google</button></Link>                                <br /> 

        <Link to='/facebook'>
        <button className='btn'>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-facebook mb-1 me-3" viewBox="0 0 16 16">
        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
        </svg>
        Continue with Facebook</button></Link>         <br /> 

        <Link to='/apple'>
        <button className='btn'>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-apple mb-1 me-3" viewBox="0 0 16 16">
        <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282"/>
        <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282"/>
        </svg>
        Continue with Apple</button></Link>               <br />

        <Link to='/phone-number'><button className='btn'>Continue with phone number</button></Link> <br />

        </div>

        <hr /> 

        <div className='login_data'>
        <form action="">
            <label className='l-d1' for="fname">Email or username</label>             <br />
            <input type="text" placeholder='Email or username' />                     <br />
            <label className='l-d1' for="fname">Password</label>                      <br />
            <input type="password" placeholder='Password' />                          <br />
            <Link to='/dashboard'><button>Login</button></Link>
        </form>
        </div>

        <Link className='login_forgot' to='/'>Forgot your password?</Link>
        <br /> <br />
        <p className='login_sign'>Don't have an account? <Link className='login_sign2' to='/signup'>Sign up for Spotify</Link></p>
      </div>
    </div>
  )
}

export default Login