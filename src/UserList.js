import React, { Component } from "react";

class UserList extends React.Component {
    getAllUsers () {
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))
    }
    
  render() {
    return <div>UserList </div>;
  }
}

export default UserList;
