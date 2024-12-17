import React from 'react'
import { PopularArtists } from '../Data/D-PA'
import { useParams } from 'react-router-dom'
import { Row, Col} from 'react-bootstrap' 
import Topnav from '../Modules/Topnav'
import Content from '../Modules/Content'
import { Link } from 'react-router-dom'

function Detail1() {
    let { id } = useParams()
    let artistdet = PopularArtists.find((item) => item.id == id)
  return (
    <div className='dash' >

      <Topnav />

      <div className='C_main0'>
        <div className='C_main1 container-fluid'>

          <Row>

            <Col md={3}>
              <Content />  
            </Col>

            <Col md={9}>
              <div className='mainC-3'>

                <div className='MPA0 d-flex justify-content-end'>
                  <Link className='MPA-show0 mt-3' to='/partists'>Back</Link>
                </div>

                <div className='artists3'>

                      <div className='d-flex'>
                        <img src={artistdet.Image} alt="" className='my-3 me-3' style={{width:'140px', height:'140px', borderRadius:'50%'}} />
                        <p className='det-p1'>
                          <span className='dp1p'>{artistdet.Name}</span>
                          <br />
                          <span>{artistdet.Count}</span>
                        </p> 
                      </div>

                      <div className='artitst3btn'>
                        <Link className='playlogo3'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-play-circle-fill me-4" viewBox="0 0 16 16">
                         <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z"/>
                        </svg>
                        </Link>
                        <button className='btn33o me-4'>Follow</button>
                        <Link className='threedotslogo'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                         <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"/>
                        </svg>
                        </Link>
                      </div>

                      <div className='songlist3'>
                        <h3>Popular</h3>
                        <div className='d-flex justify-content-between' style={{fontSize:'20px'}}>
                          <div className='d-flex' style={{paddingTop: '5px'}} >
                            <p style={{paddingTop: '5px', marginRight: '15px'}}>1</p>
                            <img src={artistdet.SongImage} alt="" className='' style={{width:'40px', height:'40px', borderRadius:'5px', marginRight: '15px'}} />
                            <p style={{paddingTop: '4px'}}>{artistdet.SongName}</p>
                          </div>
                          <div>
                            <p style={{paddingTop: '7px'}}>{artistdet.SongCount}</p>
                          </div>
                          <div>
                            <div className='d-flex'>

                              <Link style={{paddingTop: '5px', marginRight: '15px', color: 'white'}}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
                              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
                              </svg>
                              </Link>

                              <p style={{paddingTop: '7px', marginRight: '15px'}}>{artistdet.Duration}</p>

                              <Link style={{paddingTop: '5px', color: 'white'}}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                              <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"/>
                              </svg>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                </div>
                
              </div>
            </Col>

          </Row>
        </div>
      </div>

    </div>
  )
}

export default Detail1