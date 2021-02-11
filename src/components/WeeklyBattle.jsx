import React, { Component } from "react";
import Card from "./Card";
import moment from "moment"

export default class WeeklyBattle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      currentBattle: 0,
      favorites_weekly_id: [],
    };
  }

  handleClick = (event, id) => {
    let favoriteWeekly = this.state.favorites_weekly_id;
    favoriteWeekly.push(id);
    this.setState({
      currentBattle: this.state.currentBattle + 2,
      favorites_weekly_id: favoriteWeekly,
    });
    localStorage.setItem(
      "favorites_weekly_id",
      JSON.stringify(this.state.favorites_weekly_id)
    );
  };

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
    console.log(this.state.currentBattle);
    if (this.state.movies.length === 0) {
      return <h1>LOADING</h1>;
    }
    return (
      <div className='container d-flex flex-column justify-content-center'>
        <h1 className='text-center tabTitle'>Weekly Battle</h1>
        {this.state.movies.length > 1 &&
          this.state.currentBattle < this.state.movies.length && (
            <div className='row'>
              <div
                className='col-6'
                onClick={(event) =>
                  this.handleClick(
                    event,
                    this.state.movies[this.state.currentBattle].id
                  )
                }>
                <Card
                  img={`https://image.tmdb.org/t/p/w300/${
                    this.state.movies[this.state.currentBattle].poster_path
                  }`}
                  title={this.state.movies[this.state.currentBattle].title}
                  description={
                    this.state.movies[this.state.currentBattle].overview
                  }
                  date={
                    this.state.movies[this.state.currentBattle].release_date
                  }
                />
              </div>

              <div
                className='col-6'
                onClick={(event) =>
                  this.handleClick(
                    event,
                    this.state.movies[this.state.currentBattle].id
                  )
                }>
                <Card
                  img={`https://image.tmdb.org/t/p/w300/${
                    this.state.movies[this.state.currentBattle + 1].poster_path
                  }`}
                  title={this.state.movies[this.state.currentBattle + 1].title}
                  description={
                    this.state.movies[this.state.currentBattle + 1].overview
                  }
                  date={
                    this.state.movies[this.state.currentBattle + 1].release_date
                  }
                />
              </div>
            </div>
          )}

        {this.state.currentBattle === this.state.movies.length && (
          <div>
            <h2 className="text-center">Vous avez parcouru tous les films !</h2>
          </div>
        )}
      </div>
    );
  }
}
