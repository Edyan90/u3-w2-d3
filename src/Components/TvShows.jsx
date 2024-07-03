import { Container } from "react-bootstrap";
import Gallerie from "./Gallerie";
import Footer from "./Footer";
import { Link } from "react-router-dom";
const TvShows = () => {
  return (
    <Container className="text-white">
      <Gallerie subtitle="Trending Now" ricerca="how" />
      <Gallerie subtitle="New Relase" ricerca="big" />
      <Gallerie subtitle="Preview" ricerca="galaxy" />
      <Gallerie subtitle="Old Series" ricerca="anatomy" />
      <Footer />
    </Container>
  );
};
export default TvShows;
