import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  let navigate = useNavigate();
  return (
    <div className="hero">
      <Container fluid>
        <Row>
          <Col lg>
            <Container fluid="md">
              <div className="hero-wrapper">
                <h1>
                  ALEXPACK<span>.</span>
                </h1>
                <h2>made for every lifestyle</h2>
                <p>just add water or sand</p>
                <div className=" buttons-block">
                  <Button
                    className="accent-btn"
                    onClick={() => {
                      navigate("#innovation");
                    }}
                  >
                    EXPLORE MORE
                    <img
                      src="/assets/img/longarrow.svg"
                      alt="long-arrow-icon"
                    />
                  </Button>
                  {/* <a href="" className="accent-btn">
                    EXPLORE MORE
                    <img
                      src="/assets/img/longarrow.svg"
                      alt="long-arrow-icon"
                    />
                  </a> */}
                  <Button
                    className="outline-btn"
                    onClick={() => {
                      navigate("/shop");
                    }}
                  >
                    shop now
                    <img
                      src="/assets/img/longarrowDark.svg"
                      alt="long-arrow-icon"
                    />
                    <img
                      src="/assets/img/longarrow.svg"
                      alt="long-arrow-icon"
                      className="hide"
                    />
                  </Button>
                </div>
              </div>
            </Container>

            <Row className="accent-div large-mt-5">
              <Col sm>
                <div className="customize">
                  <Row>
                    <Col xs={4} className="d-grid align-items-center">
                      <img
                        src="/assets/img/customizeweight.svg"
                        alt="weight"
                        width="50px"
                      />
                    </Col>
                    <Col xs={8}>
                      <Row>
                        <div className="small-title">CUSTOMIZE</div>
                      </Row>
                      <Row>
                        <div className="medium-title">WEIGHT</div>
                      </Row>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col sm>
                <div className="customize">
                  <Row>
                    <Col xs={4} className="d-grid align-items-center">
                      <img
                        src="/assets/img/w-anywhere.svg"
                        alt="workout-anywhere-icon"
                        width="50px"
                      />
                    </Col>
                    <Col xs={8}>
                      <Row>
                        <div className="small-title">WORKOUT</div>
                      </Row>
                      <Row>
                        <div className="medium-title">ANYWHERE</div>
                      </Row>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Col>

          {/* slike */}
          <Col lg className=" d-flex align-items-end">
            <Row>
              <Col className="d-flex align-items-end p-0">
                <div className="picture1">
                  <img
                    className="img-fluid product-card-image"
                    src="/assets/img/alexpackimg1.png"
                    alt="backpack1"
                  />
                </div>
              </Col>
              <Col className=" p-0">
                <Row>
                  <div className="picture2">
                    <img
                      className="img-fluid product-card-image"
                      src="/assets/img/alexpackimg2.png"
                      alt="backpack1"
                    />
                  </div>
                </Row>
                <Row>
                  <div className="picture3">
                    <img
                      className="img-fluid product-card-image"
                      src="/assets/img/alexpackimg3.png"
                      alt="backpack1"
                    />
                  </div>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
