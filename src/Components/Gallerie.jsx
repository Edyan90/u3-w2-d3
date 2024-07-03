import { Component } from "react";

import CarouselCustom from "./CarouselCustom";

class Gallerie extends Component {
  state = {
    movies: [],
    isLoading: true,
  };
  richiestaDati = (e) => {
    fetch("https://www.omdbapi.com/?i=tt3896198&apikey=27c34ce7&s=" + this.props.ricerca)
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error("errore nel reperimento dati");
        }
      })
      .then((data) => {
        console.log(data);
        this.setState({ movies: data.Search, isLoading: false });
      })
      .catch((err) => alert(err));
  };
  componentDidMount() {
    this.richiestaDati();
  }
  render() {
    const { movies } = this.state;
    console.log("sono sul render: " + movies.poster);
    return (
      <section className="my-3">
        <h4 className="mt-4 mb-2">{this.props.subtitle}</h4>

        <CarouselCustom movies={movies} isLoading={this.state.isLoading} />
      </section>
    );
  }
}
export default Gallerie;
