import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import { paginate } from "../utli/paginate";

import Pagination from "./common/pagination";
import ListGroup from "./common/listGroup";
import { getGenres } from "../services/fakeGenreService";
import MoviesTable from "./movieTable";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    currentPage: 1,
    pageSize: 4,
  };

  componentDidMount() {
    const genres = [{ name: "All Genres" }, ...getGenres()];
    this.setState({ movies: getMovies(), genres: genres });
  }

  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies });
  };

  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleGenreSelect = (item) => {
    this.setState({ selectedItem: item, currentPage: 1 });
  };

  render() {
    const { length: count } = this.state.movies;
    const {
      pageSize,
      currentPage,
      movies: allMovies,
      selectedItem,
    } = this.state;
    if (count === 0) return <p>THere are no movies in the databases</p>;

    const filtered =
      selectedItem && selectedItem._id
        ? allMovies.filter((m) => m.genre._id === selectedItem._id)
        : allMovies;
    const filteredMovies = paginate(filtered, currentPage, pageSize);

    return (
      <div className="row">
        <div className="col-3"></div>
        <ListGroup
          items={this.state.genres}
          onItemSelect={this.handleGenreSelect}
          selectedItem={selectedItem}
        />
        <div className="col">
          <p>Showing {filtered.length} movies in the database.</p>
          <MoviesTable
            movies={filteredMovies}
            onDelete={this.onDelete}
            onLike={this.onLike}
          />
          <Pagination
            itemsCount={filtered.length}
            currentPage={currentPage}
            pageSize={pageSize}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default Movies;
