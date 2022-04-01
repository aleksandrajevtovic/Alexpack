import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Products = ({products}) => {
  return (
    <div>
      <div className="section-shop-page my-100">
        <Container fluid>
          <Row>
            <div className="body mb-30">
              <h2 className="mb-30">SHOP</h2>
            </div>
            <div className="product-grid">
              <Row>
                <Col lg={4} md={4} sm={6} xs={6}>
                <Link to="/product" className="product-card">
            
                    <div className="product-card-image-holder ">
                      <div className="img1">
                        <img
                          className="img-fluid product-card-image"
                          src="https://images.unsplash.com/photo-1622560480654-d96214fdc887?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
                          alt="backpack1"
                        />
                      </div>
                      <div className="img2">
                        <img
                          className="img-fluid product-card-image"
                          src="https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
                          alt="backpack1"
                        />
                      </div>
                    </div>
                    <div className="attributes">
                      <div className="product-card-badge-info">
                        <img
                          src="https://images.riverisland.com/is/image/RiverIsland/c20160609-RI-PLUS-resp-resp"
                          alt="promo badge"
                          className="product-card-badge-image"
                          width="189"
                          height="18"
                          data-qa="product-badge"
                        />
                      </div>
                      <h5 className="product-card-title">
                        Beige RI monogram trainer socks multipack
                      </h5>
                      <div className="product-card-price-holder">€&nbsp;13.00</div>
                      <div className="product-card-swatches">
                        <ul className="product-card-swatches-list">
                          <li className="product-card-swatches-swatch">
                            <img
                              src="https://images.riverisland.com/is/image/RiverIsland/776163_swatch"
                              alt="Black"
                              className="product-card-swatches-image"
                              width="16"
                              height="16"
                            />
                          </li>
                          <li className="product-card-swatches-swatch">
                            <img
                              src="https://images.riverisland.com/is/image/RiverIsland/776282_swatch"
                              alt="Pink"
                              className="product-card-swatches-image"
                              width="16"
                              height="16"
                            />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </Link>
                </Col>
                
                
              </Row>
            </div>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default Products