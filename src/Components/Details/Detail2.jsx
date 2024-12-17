import React from 'react'
import { PopularAlbums } from '../Data/D-PAS'
import { useParams } from 'react-router-dom'
import { Row, Col} from 'react-bootstrap' 
import Topnav from '../Modules/Topnav'
import Content from '../Modules/Content'
import { Link } from 'react-router-dom'

function Detail2() {
    let { id } = useParams()
    let albumsdet = PopularAlbums.find((item) => item.id == id)
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
              <div className='mainC-1 '>

                <div className='MPA0'>
                  <h4>Popular Albums</h4>
                  <Link className='MPA-show0' to='/palbums'>Back</Link>
                </div>

                <div className='artists2 d-flex justify-content-between flex-wrap'>
                      <div>
                        <img src={albumsdet.Image} alt="" className='my-3' style={{width:'140px', height:'140px', borderRadius:'8px'}} />
                        <p>
                          {albumsdet.Name}
                          <br />
                          {albumsdet.Tag}
                        </p>
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

export default Detail2