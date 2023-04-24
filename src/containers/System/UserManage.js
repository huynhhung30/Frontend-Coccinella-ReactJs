import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import "./UserManage.scss";
import {
  getUsersList,
  createNewUserService,
  deleteUserService,
  editUserService,
} from "../../services/userService";
import ModalUser from "./ModalUser";
import ModalEditUser from "./ModalEditUser";

import { emitter } from "../../utils/Emitter";

class UserManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrUsers: [],
      isOpenModalUser: false,
      isOpenModalEditUser: false,
      userInfo: {},
    };
  }

  async componentDidMount() {
    await this.getAllUsers();
  }
  getAllUsers = async () => {
    let res = await getUsersList("all", 5, 1);
    console.log("res", res);
    if (res && res.data && res.data.data && res.data.status === 200) {
      this.setState({
        arrUsers: res.data.data,
      });
    }
  };
  createNewUser = async (data) => {
    try {
      let res = await createNewUserService(data);
      if (res && res.data && res.data.status === 200) {
        alert(res.data.message);
        await this.getAllUsers();
        this.setState({
          isOpenModalUser: false,
        });
        emitter.emit("EVENT_CLEAR_DATA", { id: "your_id" });
      } else {
        console.log(res);
        alert(res.data.message);
      }
    } catch (e) {
      console.log("e", e);
    }
  };
  handleCreateUser = () => {
    this.setState({
      isOpenModalUser: true,
    });
  };
  handleToggleUserModal = () => {
    this.setState({
      isOpenModalUser: !this.state.isOpenModalUser,
    });
  };
  handleToggleEditUserModal = () => {
    this.setState({
      isOpenModalEditUser: !this.state.isOpenModalEditUser,
    });
  };
  handleDeleteUser = async (user) => {
    alert("handleDeleteUser");
    try {
      let res = await deleteUserService(user.id);
      if (res && res.data && res.data.status === 200) {
        alert(res.data.message);
        await this.getAllUsers();
      } else {
        alert(res.data.message);
      }
    } catch (e) {
      console.log("e", e);
    }
  };
  handleEditUser = async (user) => {
    this.setState({
      isOpenModalEditUser: true,
      userInfo: user,
    });
  };
  editUser = async (user) => {
    try {
      let res = await editUserService(user);
      console.log("=-=-=-", res);
      if (res && res.data.status === 201) {
        alert(res.data.message);
        await this.getAllUsers();
        this.setState({
          isOpenModalEditUser: false,
        });
      } else {
        console.log(res);
        alert(res.data.message);
      }
    } catch (e) {
      console.log("e", e);
    }
  };

  render() {
    let arrUsers = this.state.arrUsers;
    return (
      <div className="user-container">
        <div className="user-list">
          <div className="mx-1">
            <button
              className="btn btn-primary"
              onClick={() => this.handleCreateUser()}
            >
              button
            </button>
          </div>
          {arrUsers &&
            arrUsers.map((item, index) => {
              return (
                <div className="content">
                  <ul className="team">
                    <li className="member co-funder">
                      <div className="thumb">
                        <img src={item.avatar}></img>
                      </div>
                      <div className="description">
                        <h3>{item.codeName}</h3>
                        <p>
                          {item.introduce}
                          <br />
                          <a href="https://codepen.io/chriscoyier/">
                            {item.phone}
                          </a>
                          <button
                            href="https://codepen.io/chriscoyier/"
                            onClick={() => {
                              this.handleEditUser(item);
                            }}
                          >
                            EDIT
                          </button>
                          <button
                            href="https://codepen.io/chriscoyier/"
                            onClick={() => this.handleDeleteUser(item)}
                          >
                            DELETE
                          </button>
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              );
            })}
        </div>
        <ModalUser
          isOpen={this.state.isOpenModalUser}
          toggle={this.handleToggleUserModal}
          createNewUser={this.createNewUser}
        />
        {this.state.isOpenModalEditUser && (
          <ModalEditUser
            isOpen={this.state.isOpenModalEditUser}
            toggle={this.handleToggleEditUserModal}
            userInfo={this.state.userInfo}
            editUser={this.editUser}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
