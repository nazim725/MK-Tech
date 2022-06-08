import React from 'react'
import { Col, Row } from 'react-bootstrap'
import './PopUnder.css'
import Zoom from 'react-reveal/Zoom'

const PopUnder = () => {
  return (
    <Zoom >
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
              POP-UNDER
            </h3>
            <p className=''>
              This is one of the most popular ads. After user’s click, this ad
              opens landing page in behind. So, the user experience is not
              hampered much.
            </p>
            <button className="Learn-button">
              Learn more <i class="ri-edit-box-line"></i>
            </button>
          </div>
        </Col>
      </Row>
    </div>
    </Zoom>
  )
}

export default PopUnder
