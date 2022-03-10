import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";

const Bag = () => {
  let navigate = useNavigate();

  return (
    <div>
      <Navigation />
      <div className="empty-bag text-center">
        <Container>
          <Row>
            <Col>
              <div className="body">
                <div className="icon">
                  <img src="/assets/img/sadbag.svg" />
                </div>
                <h3>Your bag is empty</h3>
                <p>Let's change that!</p>
                <div className="wrapper-btn">
                  <Button
                    className="accent-btn dark"
                    onClick={() => {
                      navigate("/shop");
                    }}
                  >
                    Return to shop
                    <img
                      src="/assets/img/longarrow.svg"
                      alt="long-arrow-icon"
                    />
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default Bag;
