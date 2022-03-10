import React, { useEffect, useState } from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import Offcanvas from 'react-bootstrap/Offcanvas'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  let navigate = useNavigate();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <header class="header">
        <Navbar
          expand="lg"
          variant="light"
          fixed="top"
          className="white-bg"
          collapseOnSelect
        >
          <Container fluid>
            <Navbar.Brand href="/" className="ps-4">
              Logo
            </Navbar.Brand>

            <div className="d-flex">
              <Link
                to="/"
                className="nav-link d-lg-none"
                // aria-controls="emptybag"
                // onClick={handleShow}
              >
                <img src="/assets/img/bag.svg" alt="" width="30px" />
                <span class="cart-counter sm">0</span>
              </Link>
              <Navbar.Toggle aria-controls="emptybag"                 aria-labelledby="emptybagLabel"
 onClick={handleShow} />

              <Button
                aria-controls="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
                className="navbar-toggler"
                onClick={handleShow}
              >
                <img src="/assets/img/navmenuicon.svg" alt="" width="30px" />
                {/* <span className="navbar-toggler-icon"></span>
                 */}
              </Button>
            </div>
            <div className="navbar-nav justify-content-center flex-grow-1 d-none-lg">
              <Nav.Link href="#innovation">Innovation</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#howtouse">How to use</Nav.Link>
              <Link to="/about" className="nav-link">
                About
              </Link>
              <Link to="/buy-now" className="nav-link">
                Buy Now
              </Link>
            </div>
            <div className="navbar-nav d-none-lg pe-4">
              <Link to="/" className="nav-link">
                <img src="/assets/img/facebook-dark.svg" alt="" width="25px" />
              </Link>
              <Link to="/" className="nav-link">
                <img src="/assets/img/instagram-dark.svg" alt="" width="25px" />
              </Link>
              <Link to="/" className="nav-link">
                <img src="/assets/img/bag.svg" alt="" width="25px" />
                <span class="cart-counter">0</span>
              </Link>
            </div>
            <Navbar.Offcanvas
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
              placement="start"
              show={show}
              onHide={handleClose}
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id="offcanvasNavbarLabel"></Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className="text-center">
                <div className="navbar-nav ">
                  <Nav.Link href="#innovation" className="link-canvas-custom">
                    Innovation
                  </Nav.Link>
                  <Nav.Link href="#features" className="link-canvas-custom">
                    Features
                  </Nav.Link>
                  <Nav.Link href="#howtouse" className="link-canvas-custom">
                    How to use
                  </Nav.Link>
                  <Nav.Link
                    href="/about"
                    className="nav-link link-canvas-custom"
                  >
                    About
                  </Nav.Link>
                  <Nav.Link
                    href="/buy-now"
                    className="nav-link link-canvas-custom"
                  >
                    Buy Now
                  </Nav.Link>
                  <div className="nav-icons d-flex justify-content-center">
                    <Nav.Link to="/" className="nav-link pe-3">
                      <img
                        src="/assets/img/facebook-dark.svg"
                        alt=""
                        width="35px"
                      />
                    </Nav.Link>
                    <Nav.Link to="/" className="nav-link">
                      <img
                        src="/assets/img/instagram-dark.svg"
                        alt=""
                        width="35px"
                      />
                    </Nav.Link>
                  </div>
                </div>
              </Offcanvas.Body>
            </Navbar.Offcanvas>




            {/* emptybag */}
            <Offcanvas
              id="emptybag"
              aria-labelledby="emptybagLabel"
              placement="end"
              show={show}
              onHide={handleClose}
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id="emptybagLabel"></Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className="text-center">
                gfgf
              </Offcanvas.Body>
            </Offcanvas>
          </Container>
        </Navbar>
      </header>
    </>
  );
};

export default Navigation;
