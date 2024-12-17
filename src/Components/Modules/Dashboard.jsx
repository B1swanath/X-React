import React from 'react'
import Topnav from '../Modules/Topnav'
import Content from '../Modules/Content'
import { Col, Row } from 'react-bootstrap'
import Maincontent from '../Modules/Maincontent'

function Dashboard() {
  return (
    <div className='dash'>

      <Topnav />

      <div className='C_main0'>
        <div className='C_main1 container-fluid'>
          <Row>
            <Col md={3}>
              <Content />  
            </Col>
            <Col md={9}>
              <Maincontent />
            </Col>
          </Row>
        </div>
      </div>  
    </div>
  )
}

export default Dashboard
