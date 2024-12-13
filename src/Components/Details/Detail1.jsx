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
              <div className='mainC-1 '>

                <div className='MPA0'>
                  <h4>Popular Artists</h4>
                  <Link className='MPA-show0' to='/partists'>Back</Link>
                </div>

                <div className='artists2 d-flex justify-content-between flex-wrap'>
                      <div>
                        <img src={artistdet.Image} alt="" className='my-3' style={{width:'140px', height:'140px', borderRadius:'50%'}} />
                        <p>
                          {artistdet.Name}
                          <br />
                          {artistdet.Tag}
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

export default Detail1