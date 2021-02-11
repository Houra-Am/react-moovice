import React, { Component } from "react";
import Card from "./Card";
import moment from "moment";

export default class Weekly extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    const LAST_WEEK = moment().add(-1, "w").format("YYYY-MM-DD");
    const TODAY = moment().format("YYYY-MM-DD");
    fetch(
      `http://api.themoviedb.org/3/discover/movie?primary_release_date.gte=${LAST_WEEK}&primary_release_date.lte=${TODAY}&api_key=c72ac9cf5197a1f66ad0d776f5568bc2`
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
      <div className="container d-flex flex-column justify-content-center">
        <h1 className="text-center tabTitle">Weekly</h1>
        <div className="row">
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
