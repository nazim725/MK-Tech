import React from 'react'
import { Col, Row } from 'react-bootstrap'

const Skim = () => {
  return (
    <div>
      <Row className="">
        <Col md={6} sm={12}>
          <div className="slide_img mt-5">
            <img
              src="https://elementor.dostguru.com/cms/bookista/wp-content/uploads/2021/06/PngItem_2453012.png"
              alt=""
              className=""
            />
          </div>
        </Col>
        <Col md={6} sm={12}>
          <div className="text-start mt-5">
            <h3 className="mb-3" style={{ color: '#FF6F00' }}>
              SKIM
            </h3>
            <p className="mt-4 mb-4">
              SKIM" is a link that a publisher inserts on a specific site
              element, and after clicking on it, an advertisement appears to the
              user. SKIM gives 100% control of your sold traffic amount, higher
              CR to advertisers and CPM rates to publishers.
            </p>
            <button className="Learn-button mt-5">
              Learn more <i class="ri-edit-box-line"></i>
            </button>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Skim
