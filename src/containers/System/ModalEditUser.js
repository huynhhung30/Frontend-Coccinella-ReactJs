import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "./ModalEditUser.scss";
import { emitter } from "../../utils/Emitter";
import _ from "lodash";
class ModalEditUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      email: "",
      password: "",
      codeName: "",
      firstName: "",
      lastName: "",
      address: "",
      phone: "",
      gender: true,
      introduce: "",
    };
  }
  componentDidMount() {
    let user = this.props.userInfo;
    if (user && !_.isEmpty(user)) {
      this.setState({
        id: user.id,
        email: user.email,
        password: "hash_code",
        codeName: user.codeName,
        firstName: user.firstName,
        lastName: user.lastName,
        address: user.address,
        phone: user.phone,
        introduce: user.introduce,
      });
    }
  }
  checkValidateInput = () => {
    let arrInput = [
      "email",
      "password",
      "codeName",
      "firstName",
      "lastName",
      "address",
      "phone",
      "introduce",
    ];
    let idValid = true;
    for (let i = 0; i < arrInput.length; i++) {
      if (!this.state[arrInput[i]]) {
        idValid = false;
        alert("Missing: " + arrInput[i]);
        break;
      }
    }
    return idValid;
  };

  handleOnchangeInput = (event, id) => {
    let copyState = { ...this.state };
    copyState[id] = event.target.value;
    this.setState({
      ...copyState,
    });
  };

  toggle = () => {
    this.props.toggle();
  };
  handleSaveUser = async () => {
    let isValid = this.checkValidateInput();
    if (isValid === true) {
      this.props.editUser(this.state);
    }
  };

  render() {
    console.log("userInfo", this.props.userInfo);
    return (
      <Modal
        centered
        size="lg"
        isOpen={this.props.isOpen}
        toggle={() => {
          this.toggle();
        }}
        className={this.props.className}
      >
        <ModalBody className="modal-user">
          <div className="content">
            <form autocomplete="off" id="form">
              <h1 id="message">Edit User</h1>
              <small id="smallMessage"> </small>
              <div className="field">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  id="email"
                  autocomplete="off"
                  onChange={(event) => this.handleOnchangeInput(event, "email")}
                  value={this.state.email}
                  disabled
                />
                <label for="email">Email</label>
              </div>
              <div className="field">
                <input
                  type="text"
                  name="code-name"
                  placeholder="Code Name"
                  id="code-name"
                  autocomplete="off"
                  value={this.state.codeName}
                  onChange={(event) =>
                    this.handleOnchangeInput(event, "codeName")
                  }
                />
                <label for="code-name">Code Name</label>
              </div>

              <div className="field">
                <input
                  type="text"
                  name="first-name"
                  placeholder="First Name"
                  id="first-name"
                  autocomplete="off"
                  value={this.state.firstName}
                  onChange={(event) =>
                    this.handleOnchangeInput(event, "firstName")
                  }
                />
                <label for="first-name">First Name</label>
              </div>
              <div className="field">
                <input
                  type="text"
                  name="last-name"
                  placeholder="Last Name"
                  id="last-name"
                  autocomplete="off"
                  value={this.state.lastName}
                  onChange={(event) =>
                    this.handleOnchangeInput(event, "lastName")
                  }
                />
                <label for="last-name">Last Name</label>
              </div>
              <div className="field">
                <input
                  type="text"
                  name="address"
                  placeholder="Address"
                  id="address"
                  autocomplete="off"
                  value={this.state.address}
                  onChange={(event) =>
                    this.handleOnchangeInput(event, "address")
                  }
                />
                <label for="address">Address</label>
              </div>
              <div className="field">
                <input
                  type="text"
                  name="introduce"
                  placeholder="Introduce"
                  id="introduce"
                  autocomplete="off"
                  value={this.state.introduce}
                  onChange={(event) =>
                    this.handleOnchangeInput(event, "introduce")
                  }
                />
                <label for="introduce">Introduce</label>
              </div>
              <div className="field">
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone"
                  id="phone"
                  autocomplete="off"
                  value={this.state.phone}
                  onChange={(event) => this.handleOnchangeInput(event, "phone")}
                />
                <label for="phone">Phone</label>
              </div>
              <div className="field">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  id="password"
                  autocomplete="new-password"
                  onChange={(event) =>
                    this.handleOnchangeInput(event, "password")
                  }
                  value={this.state.password}
                  disabled
                />
                <label for="password">Password</label>
              </div>
              <a
                className="button-submit"
                onClick={() => {
                  this.handleSaveUser();
                }}
              >
                Save
              </a>
              <p>
                By signing up, I agree to to the Terms of Service and Privacy
                Policy
              </p>
            </form>
          </div>
        </ModalBody>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalEditUser);
