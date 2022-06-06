import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Footer.css'

const Footer = () => {
  return (
    <Container className="footer mt-5">
      <Row>
        <Col md={3} sm={12}>
          <p className="text-primary text-start">We are social </p>
          <p className="text-start">
            <a href="">FOLLOW US</a>
          </p>
          <div className="text-start">
            <i class="ri-instagram-fill"></i>
            <i class="ri-facebook-circle-fill ms-3"></i>
            <i class="ri-youtube-fill ms-3"></i>
            <div className='mt-2'>
              <img
                src="https://elementor.dostguru.com/cms/bookista/wp-content/uploads/2020/12/logo.png"
                alt=""
              />
            </div>
          </div>
        </Col>
        <Col md={3} sm={12}>
          <p className="text-primary text-start">Links </p>
          <p className="text-start">
            <a href="">ADVERTISERS</a>
          </p>
          <p className="text-start">
            <a href="">PUBLISHERS</a>
          </p>
          <p className="text-start">
            <a href="">INFLUENCERS</a>
          </p>
          <p className="text-start">
            <a href="">AD FORMATS</a>
          </p>
        </Col>
        <Col md={3} sm={12}>
          <p className="text-primary text-start">Documentation </p>
          <p className="text-start">
            <a href="">TERMS & CONDITIONS</a>
          </p>
          <p className="text-start">
            <a href="">PRIVACY POLICY</a>
          </p>
          <p className="text-start">
            <a href="">CANCELLATION POLICY</a>
          </p>
          <p className="text-start">
            <a href="">BLOG</a>
          </p>
        </Col>
        <Col md={3} sm={12}>
          <p className="text-primary text-start">Support</p>
          <p className="text-start">
            <a href="">FAQ</a>
          </p>
          <p className="text-start">
            <a href="">MEDIA KIT</a>
          </p>
          <p className="text-start">
            <a href="">CONTACT US</a>
          </p>
        </Col>
      </Row>
    </Container>
  )
}

export default Footer
