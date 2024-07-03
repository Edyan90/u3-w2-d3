import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useEffect, useState } from "react";
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
    <Container>
      <Card>
        <Card.Img className="" variant="top" src={movie.Poster} style={{ width: "60%" }} />
        <Card.Body>
          <Card.Title>{movie.Title}</Card.Title>
          <Card.Text>{movie.Plot}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </Container>
  );
};
export default MovieDetails;
