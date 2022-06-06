import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Slider from 'react-slick'
import './Slide.css'

export default class Slide extends Component {
  constructor(props) {
    super(props)
    this.next = this.next.bind(this)
    this.previous = this.previous.bind(this)
  }
  next() {
    this.slider.slickNext()
  }
  previous() {
    this.slider.slickPrev()
  }
  render() {
    const settings = {
      dots: true,
      dotsClass: 'slick-dots',
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    }

    return (
      <div className="Slider pb-5">
        <h2 className="mt-5 text-center text-primary">BOKISTA</h2>
        <Slider ref={(c) => (this.slider = c)} {...settings}>
          <Row key={1} className="d-flex slide">
            <Col className="col-4">
              <div className="slider-img">
                <img
                  src="https://elementor.dostguru.com/cms/bookista/wp-content/uploads/2021/06/PngItem_2453012.png"
                  alt=""
                />
              </div>
            </Col>
            <Col className="col-8">
              <div>
                <h4 className="text-start text-primary">Best Of enimies</h4>
                <p className="text-start text-primary">
                  Integer eget dapibus ante. Vivamus sit amet faucibus arcu.
                  Nulla efficitur odio dolor, et elementum dolor sagittis sit
                  amet. Phasellus faucibus, ex id mattis pellentesque.
                </p>
              </div>
            </Col>
          </Row>
          <Row key={2} className="slide d-flex">
            <Col className="col-4">
              <div className="slider-img">
                <img
                  src="https://elementor.dostguru.com/cms/bookista/wp-content/uploads/2021/06/12.jpg"
                  alt=""
                />
              </div>
            </Col>
            <Col className="col-8">
              <div>
                <h4 className="text-start text-primary">Penguin Classics</h4>
                <p className="text-start text-primary">
                  Aenean at augue sem. Morbi ut ipsum neque. Sed tempor lacus
                  non ultrices lacinia. Aliquam pulvinar dolor est, non congue
                  quam congue ut. Nulla vestibulum accumsan iaculis
                </p>
              </div>
            </Col>
          </Row>
          {/* <Row key={3} className="slide d-flex">
            <Col className="col-4">
              <div className="slider-img">
                <img
                  src="https://elementor.dostguru.com/cms/bookista/wp-content/uploads/2021/06/11.jpg"
                  alt=""
                />
              </div>
            </Col>
            <Col className="col-8">
              <div>
                <h4 className="text-start text-primary">Penguin Classics</h4>
                <p className="text-start text-primary">
                  Suspendisse ac aliquam nisl. Morbi a lorem nisi. Proin nec
                  arcu ac dolor consequat , at tristique libero. Integer
                  volutpat eleifend. Etiam rhoncus nisi ut velit vulputate
                  posuere.
                </p>
              </div>
            </Col>
          </Row> */}
        </Slider>
        <div style={{ textAlign: 'center' }}>
          <button className="slide-button me-3" onClick={this.previous}>
            <span className="fw-bold fs-3" style={{ color: '#644F9C' }}>
              {' '}
              &#60;
            </span>
          </button>
          <button className="slide-button" onClick={this.next}>
            <span className="fw-bold fs-3" style={{ color: '#644F9C' }}>
              &#62;
            </span>
          </button>
        </div>
      </div>
    )
  }
}
