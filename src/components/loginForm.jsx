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

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };

  render() {
    const { account } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="userName"></label>
            <input
              value={account.userName}
              onChange={this.handleChange}
              autoFocus
              id="userName"
              name="userName"
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password"></label>
            <input
              value={account.password}
              id="password"
              name="password"
              type="password"
              className="form-control"
              onChange={this.handleChange}
            />
          </div>
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
