import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Available.css'

const Available = () => {
  return (
    <div className="mt-5">
      <Container>
        <div className="d-flex">
          <hr className="line" />
          <h3 className=" text-primary mx-3">AVAILABLE FOR EVERYONE</h3>
          <hr className="line" />
        </div>

        <Row>
          <p className="mt-4">BOOK FESTIVAL All books are flat 50% OFF</p>
          <Col md={4} sm={12}>
            <div className="available-Logo">
              <div className="mt-4">
                <i class="ri-volume-down-fill"></i>
              </div>
            </div>

            <h2 className="mt-5">Text1</h2>
            <button className="hello-button">Hello 1</button>
          </Col>
          <Col md={4} sm={12}>
            <div className="available-Logo">
              <div className="mt-4">
                <i class="ri-send-plane-fill"></i>
              </div>
            </div>

            <h2 className="mt-5">Text1</h2>
            <button className="hello-button">Hello 1</button>
          </Col>
          <Col md={4} sm={12}>
            <div className="available-Logo">
              <div className="mt-4">
                <i class="ri-base-station-line"></i>
              </div>
            </div>

            <h2 className="mt-5">Text1</h2>
            <button className="hello-button">Hello 1</button>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Available
