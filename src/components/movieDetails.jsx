import React, { Component } from "react";

class MovieDetails extends Component {
  render() {
    return (
      <div>
        <h1>Movie Details - {this.props.match.params.id}</h1>
        <button>Save</button>
      </div>
    );
  }
}

export default MovieDetails;
