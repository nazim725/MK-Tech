import React from 'react'
import { Col, Row } from 'react-bootstrap'
import './BannerAd.css'
import Zoom from 'react-reveal/Zoom'

const BannerAd = () => {
  return (
    <Zoom >
      <div>
        <Row className="">
          <Col md={6} sm={12}>
            <div className="slide_img mt-5">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCex5kzPFH9VBSD_b5PBsDBOcczOB5Zc2ziw&usqp=CAU"
                alt=""
                className=""
              />
            </div>
          </Col>
          <Col md={6} sm={12}>
            <div className="text-start mt-5">
              <h3 className="mb-3" style={{ color: '#FF6F00' }}>
                BANNER AD
              </h3>
              <p className="mb-5 mt-5">
                Choose between the available banner formats. Highly effective ad
                for visibility
              </p>
              <button className="Learn-button mt-5">
                Learn more <i class="ri-edit-box-line"></i>
              </button>
            </div>
          </Col>
        </Row>
      </div>
    </Zoom>
  )
}

export default BannerAd
