import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import BannerAd from '../BannerAd/BannerAd'
import Native from '../Native/Native'
import PopUnder from '../PopUnder/PopUnder'
import Skim from '../Skim/Skim'
import './Versatile.css'
import Zoom from 'react-reveal/Zoom'

const Versatile = () => {
  const [filter, setFilter] = useState('POP-UNDER')
  return (
    <Zoom bottom>
      <section id="about" className="mt-5">
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <div className="d-flex">
                <hr className="line" />
                <h3 className=" text-primary mx-3">VERSATILE AD FORMATS</h3>
                <hr className="line" />
              </div>
            </Col>
            <Col lg="12" md="12" sm={12}>
              <div className=" d-flex versatile-buttons">
                <button
                  className="about_btn about_btn-active"
                  onClick={() => setFilter('POP-UNDER')}
                >
                  POP-UNDER
                </button>
                <button
                  className="about_btn"
                  onClick={() => setFilter('BANNER-AD')}
                >
                  BANNER AD
                </button>
                <button
                  className="about_btn"
                  onClick={() => setFilter('NATIVE')}
                >
                  NATIVE
                </button>

                <button className="about_btn" onClick={() => setFilter('SKIM')}>
                  SKIM
                </button>
              </div>
            </Col>
          </Row>
          <Row>
            {filter === 'POP-UNDER' && <PopUnder />}
            {filter === 'BANNER-AD' && <BannerAd />}
            {filter === 'NATIVE' && <Native />}
            {filter === 'SKIM' && <Skim />}
          </Row>
        </Container>
      </section>
    </Zoom>
  )
}

export default Versatile
