import { Button, Col, Container, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Footer from "./Footer";
const NotFound = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Row className="justify-content-center mt-5" style={{ height: `63.2vh` }}>
        <Col xs={12} md={8} className="text-center">
          <h1 className="display-3 text-primary">ERROR 404</h1>
          <p className="lead">La pagina che stavi cercando non esiste</p>
          <div className="d-flex justify-content-center gap-2 mt-5">
            <Link to="/" className="btn btn-success">
              Torna sulla Home
            </Link>
            questo è il metodo per cambiare pagina in maniera programmatica
            <Button onClick={() => navigate("/")}>Torna alla home</Button>
          </div>
        </Col>
      </Row>
      <Footer />
    </Container>
  );
};

export default NotFound;
