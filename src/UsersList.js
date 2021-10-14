import React, { Component } from "react";
class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: [],
    };
  }

  componentDidMount() {
    this.getAllUsers();
  }

  getAllUsers() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((jsonResults) => {
        console.log(jsonResults);
        this.setState({ userList: jsonResults });
      });
  }

  render() {
    return (
      <div>
        <h1>User List</h1>
        <ul>
          {this.state.userList.map((user) => {
            return <li>{user.name}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default UserList;
