import React from "react";

class Form extends React.Component {
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = {
      sweet: "",
      quick: "",
      light: "",
      healthy: 0,
    };
  }

  handleChange = (event: { target: { value: any } }) => {
    this.setState({ username: event.target.value });
  };

  render() {
    return (
      <>
        <form>
          <label htmlFor="username">username</label>
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
          />
        </form>

        <h3>Your username is: {this.state.username}</h3>
      </>
    );
  }
}
