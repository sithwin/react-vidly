import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";

class RegisterForm extends Form {
  state = {
    data: {
      userName: "",
      password: "",
    },
    errors: {},
  };

  schema = {
    userName: Joi.string().required().email().label("User Name"),
    password: Joi.string().required().min(6).label("Password"),
    name: Joi.string().required().label("Name"),
  };

  doSubmit = () => {
    // Call the server
    console.log("Submitted");
  };

  render() {
    return (
      <div>
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("userName", "UserName")}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput("name", "Name")}
          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}

export default RegisterForm;
