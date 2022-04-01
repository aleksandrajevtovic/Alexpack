import React from "react";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <Navigation />
      <div className="section-contact-page my-100">
        <Container>
          <Row>
            <Col lg={6}>
              <div className="body">
                <h2 className="mb-60">ABOUT US</h2>
                <h3>How alexpack made my dreams come true</h3>

                <p>
                  There's nothing better than lifting weights outdoors and in
                  the sun. Our #alexpack was designed just for that. We started
                  out as an idea: I was on vacation with no weights, and stuffed
                  a suitcase with everything I could to get a squat session in.{" "}
                </p>
                <p>
                  It then turned into a Kickstarter campaign. <br></br>And then
                  turned into a movement.
                </p>
              </div>
            </Col>
            <Col lg={6}>
              <div className="img-about-wrap">
                <img
                  src="https://images.unsplash.com/photo-1600019248002-f4c4898f739b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGJhY2twYWNrJTIwd29ya291dHxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60"
                  alt="about img"
                  className="img-fluid"
                />
              </div>
            </Col>
            <Col lg={6} className="mt-100">
              <div className="itm-media-object mt40 tilt-3d">
                <div className="media">
                  <div className="img-ab- base">
                    <img
                      src="/assets/img/health.svg"
                      alt="icon"
                      className="layer"
                    />
                  </div>
                  <div className="media-body">
                    <h4>Empack transformed my health</h4>
                    <p>
                      What I love the most about Evolved Motion and the creation
                      of this Alexpack is that it transformed my unhealthy
                      addiction to lifting weights into a new type of therapy
                      and freedom of movement.
                    </p>
                  </div>
                </div>
                <div className="media mt40">
                  <div className="img-ab- base">
                    <img
                      src="/assets/img/practical.svg"
                      alt="icon"
                      className="layer"
                    />
                  </div>
                  <div className="media-body">
                    <h4>PRACTICAL EQUIPMENT</h4>
                    <p>
                      Let’s face it. Working out can be tough. Where to do it,
                      when to do it and of course the time to do it. Plus,
                      there’s all the workout equipment, the travel and the
                      thought of being stuck inside the gym. There is a need for
                      a practical way to workout that fits every lifestyle.
                    </p>
                  </div>
                </div>
              </div>
            </Col>

            <Col lg={6} className="mt-100">
              <div className="itm-media-object mt40 tilt-3d">
                <div className="media">
                  <div className="img-ab- base">
                    <img src="/assets/img/body.svg" alt="icon" className="layer" />
                  </div>
                  <div className="media-body">
                    <h4>explore your body</h4>
                    <p>
                      I was able to explore my body in new ways, continue being
                      the Meathead I forever will be, all while changing my
                      connection with Mother Earth.
                      <br></br>That is my hope for you as well.
                    </p>
                  </div>
                </div>
                <div className="media mt40">
                  <div className="img-ab- base">
                    <img
                      src="/assets/img/innovative.svg"
                      alt="icon"
                      className="layer"
                    />
                  </div>
                  <div className="media-body">
                    <h4>INNOVATIVE MIND</h4>
                    <p>
                      Changing the way we think about fitness and the equipment
                      you’ve been stuck with for years. It’s the FIRST AND ONLY
                      backpack designed to serve as a weight training pack.
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="section-contact">
        <Container>
          <Row>
            <Col>
              <h3>Thank's for being here! </h3>
              <p>
                If you have further questions or want to get in contact with
                someone directly please email us at{" "}
                <a href="mailto:support@alexpack.com">support@alexpack.com</a>
                or reach out via instagram <a href="/alexpack">@alexpack</a>.
              </p>
              <p>
                You can shop our products <Link to="/shop">here</Link>.
              </p>
              <p>HAVE FUN!</p>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default About;
