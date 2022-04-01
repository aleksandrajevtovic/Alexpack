import React from "react";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  let navigate = useNavigate();

  return (
    <div>
      <Navigation />
      <div className="contact-section mt-50 mb-100 my-100">
        <Container className="text-center">
          <Row>
            <Col lg={6}>
              <Col lg={{ span: 12, offset: 6 }}>
                <div className="body">
                  {/*insert breadcrumb */}

                  <h1 className="mb-60">CONTACT US</h1>
                  <h3>Thank's for being here!</h3>

                  <p>
                    If you have further questions or want to get in contact with
                    someone directly please email us at{" "}
                    <a href="mailto:support@alexpack.com">
                      support@alexpack.com
                    </a>{" "}
                    or reach out via instagram <a href="">@alexpack</a>.
                  </p>
                  {/* <div>
                  <a href="" className="accent-btn">
                    Return to home &nbsp;&#10230;
                  </a>
                </div> */}
                  <Button
                    className="accent-btn"
                    onClick={() => {
                      navigate("/");
                    }}
                  >
                    Return to home{" "}
                    <img
                      src="/assets/img/longarrow.svg"
                      alt="long-arrow-icon"
                    />
                  </Button>
                  <div className="mt-3">
                    <Button
                      className="underline-btn"
                      onClick={() => {
                        navigate("/shop");
                      }}
                    >
                      <span>Continue shopping</span>
                    </Button>
                  </div>
                </div>
              </Col>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
