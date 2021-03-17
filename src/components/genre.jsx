import React, { Component } from "react";
import { getGenres } from "../services/fakeGenreService";

class Genre extends Component {
  state = {
    genres: getGenres(),
  };

  render() {
    const { currentGenre, onGenreChange } = this.props;

    return (
      <nav className="navbar navbar-light bg-light">
        <ul class="list-group">
          {this.state.genres.map((genre) => (
            <li
              key={genre._id}
              class={
                genre.name === currentGenre
                  ? "list-group-item active"
                  : "list-group-item"
              }
              style={{ cursor: "pointer" }}
            >
              <a onClick={() => onGenreChange(genre.name)}>{genre.name}</a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

export default Genre;
