import React from 'react'
import { Col, Row } from 'react-bootstrap'

const Native = () => {
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
              NATIVE
            </h3>
            <p className='mt-5 mb-4'>
              Ad format with the image and the title, that perfectly fits into
              the content of the site. Native ads are placed in the most visible
              areas of the page and, thus, this format shows good results and
              the level of interaction.
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

export default Native
