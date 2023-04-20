import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import "./UserManage.scss";
import { getUsersList, createNewUserService } from "../../services/userService";
import ModalUser from "./ModalUser";
class UserManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrUsers: [],
      isOpenModalUser: false,
    };
  }

  async componentDidMount() {
    await this.getAllUsers();
  }
  getAllUsers = async () => {
    let res = await getUsersList("all");
    if (res && res.status === 200) {
      this.setState({
        arrUsers: res.data,
      });
    }
  };
  createNewUser = async (data) => {
    try {
      let res = await createNewUserService(data);
      if (res && res.status === 200) {
        alert(res.message);
      } else {
        await this.getAllUsers();
      }
      console.log("res", res);
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
                          <button href="https://codepen.io/chriscoyier/">
                            EDIT
                          </button>
                          <button href="https://codepen.io/chriscoyier/">
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
