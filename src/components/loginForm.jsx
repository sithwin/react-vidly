import React, { Component } from "react";

class LoginForm extends Component {
  state = {
    account: {
      userName: "",
      password: "",
    },
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted");
  };

  handleChange = (e) => {
    const account = { ...this.state.account };
    account.userName = e.currentTarget.value;
    this.setState({ account });
  };

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="userName"></label>
            <input
              value={this.state.account.userName}
              onChange={this.handleChange}
              autoFocus
              id="userName"
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password"></label>
            <input id="password" type="text" className="form-control" />
          </div>
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
