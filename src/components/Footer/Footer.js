import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  let navigate = useNavigate();
  return (
    <div class="footer footer-bg-dark pt-80 pb-30">
      <Container>
        <Row>
          <Col sm={6}>
            <div class="footer-title-wrapper">
              <h3>CONTACT US</h3>
              <div className="email-wrapp">
              <img src="/assets/img/envelope.svg" alt="" width="30px" />
              <p><a href="mailto:support@alexpack.com">support@alexpack.com</a></p>
              </div>
            </div>
          </Col>
          <Col sm={6}>
            <div class="footer-title-wrapper right">
              <h3>CONNECT</h3>
              <ul>
                <li>
                  <a href="#" class="social-icon">
                    {/* <i class="fab fa-facebook-f"></i> */}
                    <img src="/assets/img/face.svg" alt="" width="30px" />

                  </a>
                </li>
                <li>
                  <a href="#" class="social-icon">
                    <img src="/assets/img/insta.svg" alt="" width="30px" />

                  </a>
                </li>
              </ul>
              
            </div>
          </Col>
        </Row>
        <div className="copyright">
                <Row>
                  <Col lg={4}>
                    <p>
                      © 2022 ALEXPACK. All Rights Reserved. <br></br> Made with
                      <img src="/assets/img/heart1.svg" alt="" width="20px" />
 by Aleksandra
                    </p>
                  </Col>
                  <Col lg={8}>
                    <ul>
                    <li>
                      <Nav.Link href="/contact" className="footer-link">Contact</Nav.Link>
                      </li>
                      <li>
                      <Nav.Link className="footer-link" href="/warranty">Warranty</Nav.Link>
                      </li>
                      <li>
                      <Nav.Link className="footer-link" href="/privacy-policy">Privacy Policy</Nav.Link>
                      </li>
                      <li>
                      <Nav.Link className="footer-link" href="/refund-policy">Refund policy</Nav.Link>
                      </li>
                      <li>
                      <Nav.Link className="footer-link" href="/faq">FAQ</Nav.Link>
                      </li>
                    </ul>
                  </Col>
                </Row>
              </div>
      </Container>
    </div>
  );
};

export default Footer;
