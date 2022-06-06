import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Review.css'

const Review = () => {
  return (
    <div className="review pt-5 mt-5 pb-5">
      <Container>
        <h2 className="text-center text-white">BOKISITA</h2>
        <Row className="mt-5 pb-5">
          <Col md={4} sm={12}>
            <div className="impression">
              <h2 className="">1 BN+</h2>
              <p>Daily Impressions</p>
            </div>
          </Col>
          <Col md={4} sm={12}>
            <div className="paid">
              <h2 className="">$500K+</h2>
              <p>Paid</p>
            </div>
          </Col>
          <Col md={4} sm={12}>
            <div className="global">
              <h2 className="">8K+</h2>
              <p>Global Publishers</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Review
