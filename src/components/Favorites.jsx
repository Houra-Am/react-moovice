import React, { Component } from "react";

export default class Favorites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      favIDs: this.getStorage(),
    };
  }

  getMovies = (id) => {
    fetch(
      `http://api.themoviedb.org/3/movie/${id}?api_key=c72ac9cf5197a1f66ad0d776f5568bc2`
    )
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        const copyMovies = this.state.movies;
        copyMovies.push(response);
        this.setState({
          movies: copyMovies,
        });
      });
  };

  getStorage = () => {
    return (
      //parse --- > from string to array
      JSON.parse(localStorage.getItem("favorites_id"))
    );
  };

  render() {
    return (
      <div>
        <h1>Favorites</h1>
      </div>
    );
  }
}
