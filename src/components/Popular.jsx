import React, { Component } from "react";
import Card from "./Card";

export default class Popular extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
  }

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
    console.log("movie=", this.state.movies);

    return (
      <div className='container d-flex flex-column justify-content-center'>
        <h1 className='text-center'>Popular</h1>
        <div className='row'>
          {this.state.movies.map((film) => {
            return (
              <Card
                img={`https://image.tmdb.org/t/p/w300/${film.poster_path}`}
                title={film.title}
                description={film.overview}
                date={film.release_date}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
