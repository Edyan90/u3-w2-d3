import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col xs={12} md={6}>
          <Row>
            <Col className="mb-2">
              <FaFacebook className="footer-icon me-2 " style={{ color: "white" }} />
              <FaInstagram className="footer-icon me-2 " style={{ color: "white" }} />
              <FaTwitter className="footer-icon me-2 " style={{ color: "white" }} />
              <FaYoutube className="footer-icon" style={{ color: "white" }} />
            </Col>
          </Row>
          <Row className="row-cols-1 row-cols-sm-2 row-cols-md-4">
            <Col>
              <div className="footer-links">
                <p>
                  <a className="text-decoration-none text-light" href="sitofasullo.it" alt="footer link">
                    Audio and Subtitles
                  </a>
                </p>
                <p>
                  <a className="text-decoration-none text-light" href="sitofasullo.it" alt="footer link">
                    Media Center
                  </a>
                </p>
                <p>
                  <a className="text-decoration-none text-light" href="sitofasullo.it" alt="footer link">
                    Privacy
                  </a>
                </p>
                <p>
                  <a className="text-decoration-none text-light" href="sitofasullo.it" alt="footer link">
                    Contact us
                  </a>
                </p>
              </div>
            </Col>
            <Col>
              <div className="footer-links">
                <p>
                  <a className="text-decoration-none text-light" href="sitofasullo.it" alt="footer link">
                    Audio Description
                  </a>
                </p>
                <p>
                  <a className="text-decoration-none text-light" href="sitofasullo.it" alt="footer link">
                    Investor Relations
                  </a>
                </p>
                <p>
                  <a className="text-decoration-none text-light" href="sitofasullo.it" alt="footer link">
                    Legal Notices
                  </a>
                </p>
              </div>
            </Col>
            <Col>
              <div className="footer-links">
                <p>
                  <a className="text-decoration-none text-light" href="sitofasullo.it" alt="footer link">
                    Help Center
                  </a>
                </p>
                <p>
                  <a className="text-decoration-none text-light" href="sitofasullo.it" alt="footer link">
                    Jobs
                  </a>
                </p>
                <p>
                  <a className="text-decoration-none text-light" href="sitofasullo.it" alt="footer link">
                    Cookie Preferences
                  </a>
                </p>
              </div>
            </Col>
            <Col>
              <div className="footer-links">
                <p>
                  <a className="text-decoration-none text-light" href="sitofasullo.it" alt="footer link">
                    Gift Cards
                  </a>
                </p>
                <p>
                  <a className="text-decoration-none text-light" href="sitofasullo.it" alt="footer link">
                    Terms of Use
                  </a>
                </p>
                <p>
                  <a className="text-decoration-none text-light" href="sitofasullo.it" alt="footer link">
                    Corporate Information
                  </a>
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="mb-2">
              <Button className="btn-sm footer-button rounded-0 mt-3" type="button">
                Service Code
              </Button>
            </Col>
          </Row>
          <Row>
            <Col className="mb-2 mt-2 copyright">© 1997-2023 Netflix, Inc.</Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
