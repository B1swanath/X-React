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
                  <Link className='MPA-show0' to='/partists'>Back</Link>
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
                        <div>
                          <span>1</span>
                          <span>Name</span>
                          <span>Count</span>
                          <span>Add-icon</span>
                          <span>songduration</span>
                          <span>threedot-icon</span>
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