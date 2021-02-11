import React, { Component } from "react";

export default class Card extends Component {
  render() {
    return (
      <div className='filmCard mb-3'>
        <img src={this.props.img} className='card-img-top' alt='image' />
        <div className='card-body'>
          <h5 className='card-title'>{this.props.title}</h5>
          <p className='card-text'>{this.props.description}</p>
          <p className='card-text'>
            <small className='text-muted'>{this.props.date}</small>
          </p>
        </div>
      </div>
    );
  }
}
