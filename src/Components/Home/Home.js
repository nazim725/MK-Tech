import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Available from '../Available/Available'
import Navigation from '../Navigation/Navigation'
import Review from '../Review/Review'
import Slide from '../Slide/Slide'
import Versatile from '../Versatile/Versatile'
import './Home.css'

const Home = () => {
  return (
    <div style={{ background: '#F2F2F2' }} className="pt-4">
      <Navigation />
      <Container className="mt-5">
        <Row>
          <Col md={6} sm={12}>
            <h1 className="text-start text-primary mt-5">
              Hand Picked Book <br /> To Your Door
            </h1>

            <h4 className="text-start mt-5">
              The New Novel From Blaine Pearson
            </h4>
          </Col>
          <Col md={6} sm={12}>
            <img
              src="https://suthemes.info/booksy/wp-content/uploads/2017/11/product-07-385x578.jpg"
              alt=""
              height={300}
              width={400}
            />
          </Col>
        </Row>
      </Container>
      <Available />
      <Versatile />
      <Review />
      <Slide />
    </div>
  )
}

export default Home
