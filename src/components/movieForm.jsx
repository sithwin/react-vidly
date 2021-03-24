import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { min } from "lodash";

class MovieForm extends Form {
  state = {
    data: {
      title: "",
      genre: "",
      stock: 0,
      rate: 0.0,
    },
    errors: {},
  };

  schema = {
    title: Joi.string().required().label("Title"),
    genre: Joi.string().required().label("Genre"),
    stock: Joi.number().required().label("Number in Stock"),
    rate: Joi.number().required().min(3).max(10).label("Rate"),
  };

  doSubmit = () => {
    // Call the server
    console.log("Submitted", this.state.data);
  };

  render() {
    return (
      <div>
        <h1>Movie Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title")}
          {this.renderInput("genre", "Genre")}
          {this.renderInput("stock", "Number in Stock", "number")}
          {this.renderInput("rate", "Rate", "number")}
          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default MovieForm;
