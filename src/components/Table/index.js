import { Component } from "react";

import "./index.css";

class Table extends Component {
  state = { users: JSON.parse(localStorage.getItem("Users")) };

  onClickDelete = (e) => {
    const { users } = this.state;
    let deleteElementIndex = users.findIndex(function (each) {
      if (e.id === each.id) {
        return true;
      } else {
        return false;
      }
    });
    users.splice(deleteElementIndex, 1);
    console.log(users);
    this.setState({ users });
    localStorage.setItem("Users", JSON.stringify(users));
  };

  render() {
    const { users } = this.state;
    return (
      <div className="settings_main">
        <button className="add-user-btn" onClick={this.onClickAdd}>
          {" "}
          Add User{" "}
        </button>
        <table className="user-table">
          <thead className="heading-table">
            <td>#</td>
            <td>User</td>
            <td>Last Signed In</td>
            <td>Role</td>
            <td></td>
          </thead>
          <tbody>
            <tr className="table-row">
              <td></td>
              <td>Madhu</td>
              <td>Just Now</td>
              <td>Owner</td>
              <td>
                <img
                  src="https://res.cloudinary.com/dsiyffj0o/image/upload/v1672553435/delete_abm3lj.png"
                  alt="delete"
                  className="delete-icon"
                />
              </td>
            </tr>
            {users
              ? users.map((e) => {
                  return (
                    <tr className="table-row">
                      <td>{e.id}</td>
                      <td>{e.email}</td>
                      <td>Just Now</td>
                      <td>{e.role}</td>
                      <td>
                        <img
                          src="https://res.cloudinary.com/dsiyffj0o/image/upload/v1672553435/delete_abm3lj.png"
                          alt="delete"
                          className="delete-icon"
                          onClick={this.onClickDelete}
                        />
                      </td>
                    </tr>
                  );
                })
              : ""}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
