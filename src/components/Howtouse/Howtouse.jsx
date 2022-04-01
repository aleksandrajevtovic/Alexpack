import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Howtouse = () => {
  return (
    <div className="usage-area py-80" id="howtouse">
      <Container>
        <div className="container-inner-wrap">
          <Row className="align-items-center">
          <div className="center-heading">
              <h2 className="section-title section-title-dark">How to use</h2>
            </div>
            <Col xl={5} lg={5}>
              <div className="usage-content-wrap">
                <div className="usage-thumb d-flex justify-content-center">
                  <a href="#">
                    <img
                      src="/assets/img/man-working-out.jpg"
                      alt="A guy working out with a backpack"
                      className="img-fluid"
                    />
                    <span className="ripple "></span>
                  </a>
                </div>
              </div>
            </Col>
            <Col xl={7} lg={7}>
              <Row className="usage-item-wrap mb-30">
                <Col md={6}>
                  <div className="usage-item-box mb-30">
                    <div className="usage-item-icon">
                      <img src="/assets/img/barbell.svg" alt="" />
                    </div>
                    <div className="usage-item-content">
                      <h4>Use it as a barbell</h4>
                    </div>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="usage-item-box mb-30">
                    <div className="usage-item-icon">
                      <img src="/assets/img/dumbbell.svg" alt="" />
                    </div>
                    <div className="usage-item-content">
                      <h4>Use it as a dumbbell</h4>
                    </div>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="usage-item-box mb-30">
                    <div className="usage-item-icon">
                      <img src="/assets/img/kettlebell.svg" alt="" />
                    </div>
                    <div className="usage-item-content">
                      <h4>Use it as a kettlebell</h4>
                    </div>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="usage-item-box mb-30">
                    <div className="usage-item-icon">
                      <img src="/assets/img/abworkout.svg" alt="" />
                    </div>
                    <div className="usage-item-content">
                      <h4>
                        Use it for weighted planks, push-ups, pull-ups, ab
                        excercises
                      </h4>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>

            {/* </div> */}
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Howtouse;
