import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Features = () => {
  return (
    <div className="features-section py-80" id="features">
      <Container>
        <Row className="mb-3">
          <Col lg={12}>
            <div className="center-heading">
              <h2 className="section-title">Attractive design & features</h2>
            </div>
            <Col lg={6}>
              <Col lg={{ span: 12, offset: 6 }}>
                <div className="center-text">
                  <p>
                    Fusce placerat pretium mauris, vel sollicitudin elit lacinia
                    vitae. Quisque sit amet nisi erat.
                  </p>
                </div>
              </Col>
            </Col>
          </Col>
        </Row>
        <Row className="text-center">
          <Col lg={4} md={6} sm={12} className="d-flex align-items-stretch">
            <div className="services-item bre">
              {/* <i className="far fa-clone"></i>
               */}
              <img
                src="/assets/img/straps-color.svg"
                width="50px"
                alt="long-arrow-icon"
              />
              <img
                src="/assets/img/straps-white.svg"
                width="50px"
                alt="long-arrow-icon"
                className="hideImg"
              />

              <h5 className="services-title">Durable straps</h5>
              <p>
                Durable backpack straps that are not only comfortable and
                sturdy, but removable for when you are ready to turn this
                backpack into the ultimate training pack.
              </p>
            </div>
          </Col>
          <Col lg={4} md={6} sm={12} className="d-flex align-items-stretch">
            <div className="services-item bre">
              {/* <i className="far fa-clone"></i>
               */}
              <img
                src="/assets/img/zipper.svg"
                width="50px"
                alt="long-arrow-icon"
              />
              <img
                src="/assets/img/straps-white.svg"
                width="50px"
                alt="long-arrow-icon"
                className="hideImg"
              />

              <h5 className="services-title">Front side zipper</h5>
              <p>
                A front side zipper that is just as convenient as my fanny pack.
              </p>
            </div>
          </Col>
          <Col lg={4} md={6} sm={12} className="d-flex align-items-stretch">
            <div className="services-item bre">
              {/* <i className="far fa-clone"></i>
               */}
              <img
                src="/assets/img/laptop.svg"
                width="50px"
                alt="long-arrow-icon"
              />
              <img
                src="/assets/img/straps-white.svg"
                width="50px"
                alt="long-arrow-icon"
                className="hideImg"
              />

              <h5 className="services-title">A laptop sleeve</h5>
              <p>
                A front side zipper that is just as convenient as my fanny pack.
              </p>
            </div>
          </Col>
          <Col lg={4} md={6} sm={12} className="d-flex align-items-stretch">
            <div className="services-item bre">
              {/* <i className="far fa-clone"></i>
               */}
              <img
                src="/assets/img/handles.svg"
                width="50px"
                alt="long-arrow-icon"
              />
              <img
                src="/assets/img/straps-white.svg"
                width="50px"
                alt="long-arrow-icon"
                className="hideImg"
              />

              <h5 className="services-title">Six handles</h5>
              <p>
                Six handles to allow for endless training possibilities, the two
                most used handles made with sturdy tubing for optimal holding.
              </p>
            </div>
          </Col>
          <Col lg={4} md={6} sm={12} className="d-flex align-items-stretch">
            <div className="services-item bre">
              {/* <i className="far fa-clone"></i>
               */}
              <img
                src="/assets/img/separatesleeve.svg"
                width="50px"
                alt="long-arrow-icon"
              />
              <img
                src="/assets/img/straps-white.svg"
                width="50px"
                alt="long-arrow-icon"
                className="hideImg"
              />

              <h5 className="services-title">Separate sleeve</h5>
              <p>
                A separate sleeve directly behind the laptop sleeve for when
                using ONE water bladder to keep in a stable position without
                comprising the affects of training with an unstable load.
              </p>
            </div>
          </Col>
          <Col lg={4} md={6} sm={12} className="d-flex align-items-stretch">
            <div className="services-item bre">
              {/* <i className="far fa-clone"></i>
               */}
              <img
                src="/assets/img/waterbladder.svg"
                width="50px"
                alt="long-arrow-icon"
              />
              <img
                src="/assets/img/straps-white.svg"
                width="50px"
                alt="long-arrow-icon"
                className="hideImg"
              />

              <h5 className="services-title">Four water bladders capacity</h5>
              <p>
                Capacity for FOUR water bladders at 15 pounds each, for a total
                capacity of 60 pounds, all in water bladders that are extremely
                compact for when not in use.
              </p>
            </div>
          </Col>
          <Col lg={4} md={6} sm={12} className="d-flex align-items-stretch">
            <div className="services-item bre">
              {/* <i className="far fa-clone"></i>
               */}
              <img
                src="/assets/img/durable.svg"
                width="50px"
                alt="long-arrow-icon"
              />
              <img
                src="/assets/img/straps-white.svg"
                width="50px"
                alt="long-arrow-icon"
                className="hideImg"
              />

              <h5 className="services-title">Military grade material</h5>
              <p>
                Military grade material to make it throwable, droppable, and
                life-proof.
              </p>
            </div>
          </Col>
          <Col lg={4} md={6} sm={12} className="d-flex align-items-stretch">
            <div className="services-item bre">
              {/* <i className="far fa-clone"></i>
               */}
              <img
                src="/assets/img/spacious.svg"
                width="50px"
                alt="long-arrow-icon"
              />
              <img
                src="/assets/img/straps-white.svg"
                width="50px"
                alt="long-arrow-icon"
                className="hideImg"
              />

              <h5 className="services-title">Spacious</h5>
              <p>Plenty of space for clothes, books, or a night out of town.</p>
            </div>
          </Col>
          <Col lg={4} md={6} sm={12} className="d-flex align-items-stretch">
            <div className="services-item bre">
              {/* <i className="far fa-clone"></i>
               */}
              <img
                src="/assets/img/multipurpose.svg"
                width="50px"
                alt="long-arrow-icon"
              />
              <img
                src="/assets/img/straps-white.svg"
                width="50px"
                alt="long-arrow-icon"
                className="hideImg"
              />

              <h5 className="services-title">Multipurpose</h5>
              <p>
                Use it like a dumbbell, barbell, kettlebell. Use it for weighted
                planks, use it for weighted push-ups.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Features;
