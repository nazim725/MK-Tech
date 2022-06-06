import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import './Navigation.css'

const Navigation = () => {
  return (
    <div style={{ background: '#F2F2F2' }}>
      <Container>
        <div className="d-flex justify-content-between mt-3">
          <img
            src="https://elementor.dostguru.com/cms/bookista/wp-content/uploads/2020/12/logo.png"
            alt=""
          />
          <div className="nav-button">
            <button>BN</button> / <button>EN</button>
          </div>
        </div>

        {/* ---------- */}

        <Navbar collapseOnSelect expand="lg">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="link" href="#home">
                HOME
              </Nav.Link>
              <Nav.Link className="link" href="#ADVERTISERS">
                ADVERTISERS
              </Nav.Link>
              <Nav.Link className="link" href="#PUBLISHERS">
                PUBLISHERS
              </Nav.Link>
              <Nav.Link className="link" href="#INFLUENCERS">
                INFLUENCERS
              </Nav.Link>
              <Nav.Link className="link" href="#features">
                AD FORMATS{' '}
              </Nav.Link>
              <Nav.Link className="link" href="#BLOG">
                BLOG
              </Nav.Link>
              <Nav.Link className="link" href="#CONTACT US">
                CONTACT US
              </Nav.Link>
            </Nav>
            <Nav className="ms-auto">
              <div className="log-reg-div">
                <button className="login-button">LOGIN</button>{' '}
                <button className="reg-button">SIGN UP</button>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </div>
  )
}

export default Navigation
