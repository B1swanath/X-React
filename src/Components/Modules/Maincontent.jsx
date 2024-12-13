import React from 'react'
import { PopularArtists } from '../Data/D-PA'
import { PopularAlbums } from '../Data/D-PAS'
import { Link } from 'react-router-dom'

function Maincontent() {
  const PAdisplay = PopularArtists.slice(0,5)
  const PASdisplay = PopularAlbums.slice(0,5)
  return (
    <div className='mainC-1'>

      <div className='mainC-2'>
      <div className='MPA0'>
        <h4>Popular Artists</h4>
        <Link className='MPA-show0' to='/partists'>Show All</Link>
      </div>

      <div className="artist0 d-flex justify-content-between flex-wrap"> 
        {
          PAdisplay.map((a)=>{
            return(
              <div>
                <img src={a.Image} alt="" className='my-3' style={{width:'140px', height:'140px', borderRadius:'50%'}} />
                <p>
                  {a.Name}
                  <br />
                  {a.Tag}
                </p>
              </div>
            )
          })
        }
      </div>
      </div>

      <div className='my-5'>
      <div className='MPA0'>
        <h4>Popular Albums</h4>
        <Link className='MPA-show0' to='/palbums'>Show All</Link>
      </div>

      <div className="artist0 d-flex justify-content-between flex-wrap"> 
        {
          PASdisplay.map((a)=>{
            return(
              <div>
                <img src={a.Image} alt="" className='my-3' style={{width:'140px', height:'140px', borderRadius:'8px'}} />
                <p>
                  {a.Name}
                  <br />
                  {a.Tag}
                </p>
              </div>
            )
          })
        }
      </div>
      </div>

    </div>
  )
}

export default Maincontent


