import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Innovation = () => {
  let navigate = useNavigate();

  return (
    <div class="innovation-section py-80" id="innovation">
      <Container className="img-l-text-r-section">
        <Row className="no-gutters align-items-center">
          <Col md={6} xl={7} className="thumb1">
            <img
              src="/assets/img/blue-backpack-front.jpg"
              alt="feature thumb 1"
              class="img-fluid"
            />
          </Col>
          <Col md={6} xl={5}>
            <div className="position-left-sec">
              <div class="">
                <div class=" text-lg-left description">
                  <h3 class="display-3 font-weight-400 mb-3">
                    A breakthrough in workout eqipment
                  </h3>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Elementum enim elit eget urna, auctor non tempor, ipsum.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Elementum enim elit eget urna, auctor non tempor, ipsum.
                  </p>
                  <Button
                    className="simple-btn"
                    onClick={() => {
                      navigate("/shop");
                    }}
                  >
                    <span>
                      Buy now{" "}
                      <img
                        src="/assets/img/longarrowRed.svg"
                        alt=""
                        class="ml-5"
                      />
                    </span>
                  </Button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="no-gutters align-items-center mt-5">
          <Col md={6} xl={5}>
            <div class="position-right-sec">
              <div class="">
                <div class=" text-lg-left description b-shadow">
                  <h3 class="display-3 font-weight-400 mb-3">
                    A revolution in design
                  </h3>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Elementum enim elit eget urna, auctor non tempor, ipsum.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Elementum enim elit eget urna, auctor non tempor, ipsum.
                  </p>
                  <Button
                    className="simple-btn"
                    onClick={() => {
                      navigate("/shop");
                    }}
                  >
                    <span>
                      Buy now{" "}
                      <img
                        src="/assets/img/longarrowRed.svg"
                        alt=""
                        class="ml-5"
                      />
                    </span>
                  </Button>
                </div>
              </div>
            </div>
          </Col>
          <Col md={6} xl={7} className="thumb2 order-1-custom ">
            <img
              src="/assets/img/blue-backpack-detail.jpg"
              alt="feature thumb 2"
              class="img-fluid"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Innovation;
