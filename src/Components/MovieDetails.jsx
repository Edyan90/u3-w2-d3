import { Container, Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Footer from "./Footer";
const MovieDetails = () => {
  const params = useParams();
  console.log(params.id);
  const [movie, setMovie] = useState({});
  const richiestaDati2 = () => {
    fetch("https://www.omdbapi.com/?apikey=27c34ce7&i=" + params.id)
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error("errore nel reperimento dati");
        }
      })
      .then((data) => {
        setMovie(data);
        console.log(data);
      })
      .catch((error) => alert(error));
  };
  useEffect(() => {
    richiestaDati2();
  }, []);

  return (
    <Container className="text-white">
      <h1>{movie.Title}</h1>
      <Row>
        <Col>
          <div className="d-flex">
            <img src={movie.Poster} alt="Poster" style={{ width: "85%" }} />
          </div>
        </Col>
        <Col>
          <h4>Plot</h4>
          <p>{movie.Plot}</p>
        </Col>
      </Row>
      <Footer />
    </Container>
  );
};
export default MovieDetails;
