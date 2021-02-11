import React, { Component } from "react";
import Card from "./Card";

export default class PopularBattle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      currentBattle: 0,
    };
  }
  onClick = (e) => {
      this.setState({currentBattle: currentBattle + 1})
  };

  componentDidMount() {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=c72ac9cf5197a1f66ad0d776f5568bc2"
    )
      .then((response) => response.json())
      .then((popular) => {
        console.log("popular", popular);
        this.setState({
          movies: popular.results,
        });
      })
      .catch((error) => console.error(error));
  }

  render() {
    if (this.state.movies.length === 0) {
      return <h1>LOADING</h1>;
    }
    const film1 = this.state.movies[0];
    const film2 = this.state.movies[1];
    console.log(film1);
    return (
      <div>
        <div className="container d-flex flex-column justify-content-center">
          <h1 className="text-center">Popular</h1>
          <div className="row">
            <Card
              img={`https://image.tmdb.org/t/p/w300/${film1.poster_path}`}
              title={film1.title}
              description={film1.overview}
              date={film1.release_date}
              onClick={}
            />
            <Card
              img={`https://image.tmdb.org/t/p/w300/${film2.poster_path}`}
              title={film2.title}
              description={film2.overview}
              date={film2.release_date}
            />
          </div>
        </div>
      </div>
    );
  }
}
