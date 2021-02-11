import React, { Component } from "react";
import Card from "./Card"

export default class Favorites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      favIDs: this.getStorage(),
    };
  }

  
componentDidMount(){
  this.state.favIDs.map((id) => {
    this.getMovies(id)
  })
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
      JSON.parse(localStorage.getItem("favorites_id") || "[]"),
      JSON.parse(localStorage.getItem("favorites_weekly_id") || "[]")
    );
  };

 

  render() {
    return (
      <div className='container d-flex flex-column justify-content-center'>
      <h1 className='text-center tabTitle'>Favorites</h1>
      <div className='row'>
        {this.state.favIDs.length === 0 && <h2 className="text-center noFav">Vous n'avez pas encore de favoris !</h2>}
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
