import React from "react";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";
import { Container, Row, Col } from "react-bootstrap";

const Product = ({product}) => {
  return (
    <div>
      <Navigation />
      <div className="single-product mt-5">
        <Container>
          <Row>
            <Col md={5}>
              <div className="product-slick ">
                <div>
                  <figure>
                    <img
                      src="https://images.unsplash.com/photo-1622560480654-d96214fdc887?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
                      className="img-fluid"
                      alt="..."
                    />
                  </figure>
                </div>
                {/* <div>
                  <img
                    src="https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
                    className="img-fluid"
                    alt="..."
                  />
                </div>
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1522010675502-c7b3888985f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                    className="img-fluid "
                    alt="..."
                  />
                </div> */}
              </div>
            </Col>
            <Col md={6} className="d-grid align-items-center">
              <div className="right-side ">
                <form>
                  <div className="product-panel">
                    <div className="product-title-container">
                      <a href="">
                        <h2 className="product-title">{product.name}</h2>
                      </a>
                    </div>
                    <div className="product-price-container">
                      <div className="price">
                        {/* <span>€&nbsp;26.00 </span> */}
                        <span>{product.price.formatted_with_simbol}</span>
                      </div>
                    </div>
                    <div className="colour-swatches">
                      <ul className="colour-swatches-list">
                        <li className="colour-swatches-item active ">
                          <img
                            className="colour-swatches-img"
                            src="https://images.riverisland.com/is/image/RiverIsland/773002_swatch"
                            alt="Black"
                          />
                        </li>
                        <li className="colour-swatches-item">
                          <a href="">
                            <img
                              className="colour-swatches-img"
                              src="https://images.riverisland.com/is/image/RiverIsland/773004_swatch"
                              alt="White"
                            />
                          </a>
                        </li>
                      </ul>
                    </div>

                    <fieldset className="fieldset-add-to-basket">
                      {/* <!--                 quantity --> */}
                      <div className="bag-product-row-quantity">
                        <button className="line-subtract ui-btn-subtract icon-ui-minus disabled"></button>
                        <input
                          className="bag-product-row-quantity-display"
                          value="1"
                        />
                        <button className="line-add ui-btn-add icon-ui-add"></button>
                      </div>
                      {/* <!--                 add to cart button --> */}
                      <a href="" className="accent-btn d-grid">
                        Add to cart &nbsp;&#10230;
                      </a>
                      <div className="pdp-product-info">
                        <div className="pdp-product-info-item">
                          <button
                            type="button"
                            className="pdp-product-info-button"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasRight"
                            aria-controls="offcanvasRight"
                          >
                            <span className="title">Product info</span>
                          </button>
                        </div>
                        <div className="pdp-product-info-item">
                          <button
                            type="button"
                            className="pdp-product-info-button"
                          >
                            <span className="title">Delivery info</span>
                          </button>
                        </div>
                      </div>
                    </fieldset>
                  </div>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <Footer />
    </div>
  );
};

export default Product;
