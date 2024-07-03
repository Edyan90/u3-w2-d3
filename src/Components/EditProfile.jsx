import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaPencilAlt } from "react-icons/fa";
import netflix from "../assets/netflix.png";
const EditProfile = () => {
  return (
    <Container className="text-light" data-bs-theme="dark">
      <div className="px-5">
        <a className="navbar-brand" href="./index.html">
          <img src={netflix} style={{ width: "150px" }} alt="Netflix Logo" />
        </a>
      </div>
      <Row className="justify-content-center">
        <div style={{ width: "600px" }}>
          <div>
            <h1>Edit Profile</h1>
            <hr />
          </div>
          <Row className="justify-content-center">
            <Col xs={3}>
              <div className="position-relative">
                <img src="./img/assets/avatar.png" alt="perfil" className="img-fluid" style={{ width: "65%" }} />
                <FaPencilAlt className="position-absolute bottom-0 start-0" />
              </div>
            </Col>
            <Col xs={7}>
              <div>
                <Form.Control
                  type="text"
                  placeholder="Eddy Turpo"
                  aria-label="Eddy Turpo"
                  style={{ backgroundColor: "#333333" }}
                />
                <p className="mt-3 mb-1">Language:</p>
                <Form.Select
                  className="form-select-sm bg-black"
                  aria-label=".form-select-sm example"
                  style={{ width: "35%" }}
                >
                  <option value="en" selected>
                    English
                  </option>
                  <option value="it">Italian</option>
                  <option value="es">Spanish</option>
                  <option value="zh">Chinese</option>
                </Form.Select>
              </div>
              <hr />
              <div>
                <h5>Maturity Settings:</h5>
                <a
                  href="sitofarlocco.it"
                  className="border text-decoration-none p-1 text-white px-3"
                  style={{ backgroundColor: "#333333" }}
                >
                  ALL MATURITY RATINGS
                </a>
                <p className="my-2">Show titles of all maturity ratings for this profile.</p>
                <a href="sitofarlocco.it" className="border text-decoration-none p-1 text-white px-4">
                  Edit
                </a>
              </div>
              <hr />
              <div>
                <h4>Autoplay controls</h4>
                <div className="form-check">
                  <Form.Check
                    type="checkbox"
                    id="flexCheckDefault1"
                    label="Autoplay next episode in a series on all devices"
                  />
                </div>
                <div className="form-check">
                  <Form.Check
                    type="checkbox"
                    id="flexCheckDefault2"
                    label="Autoplay previews while browsing on all devices"
                  />
                </div>
              </div>
            </Col>
          </Row>
          <hr />
          <Row className="gap-3">
            <Button className="btn-custom">SAVE</Button>
            <Button className="btn-custom">CANCEL</Button>
            <Button className="btn-custom">DELETE PROFILE</Button>
          </Row>
        </div>
      </Row>
    </Container>
  );
};

export default EditProfile;
