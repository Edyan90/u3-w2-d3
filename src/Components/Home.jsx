import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Gallerie from "./Gallerie";

const Home = () => {
  return (
    <Container as="main" className="pb-5">
      <Container fluid className="bg-dark text-white px-5" data-bs-theme="dark">
        <Row>
          <Col md={6}>
            <Row>
              <Col lg={6}>
                <h2>TV Shows</h2>
              </Col>
              <Col lg={4}>
                <Form.Select className="bg-black" aria-label="Default select example">
                  <option selected>Genres</option>
                  <option value="1">Horror</option>
                  <option value="2">Western</option>
                </Form.Select>
              </Col>
            </Row>
          </Col>
          <Col md={6} className="d-flex justify-content-end pe-1">
            <div className="d-flex col-2 justify-content-center align-items-center pe-0 ps-5">
              <Button variant="outline-light" className="px-2 py-1 me-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-justify-left"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill="white"
                    d="M2 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5"
                  />
                </svg>
              </Button>
              <Button variant="outline-light" className="px-2 py-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-grid"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill="white"
                    d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5z"
                  />
                </svg>
              </Button>
            </div>
          </Col>
        </Row>
        <Gallerie subtitle="Trending Now" ricerca="harry" />
        <Gallerie subtitle="New Relase" ricerca="avengers" />
        <Gallerie subtitle="Preview" ricerca="star" />
        <Gallerie subtitle="Old movies" ricerca="west" />
      </Container>
    </Container>
  );
};

export default Home;
