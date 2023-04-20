import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "./ModalUser.scss";
class ModalUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
  handleCreateUser = () => {
    let isValid = this.checkValidateInput();
    if (isValid === true) {
      this.props.createNewUser(this.state);
    }
  };

  handleOnchangeInput = (event, id) => {
    let copyState = { ...this.state };

    copyState[id] = event.target.value;
    console.log("-=copyState[id]=-=", copyState[id]);

    console.log("-=-event.target.value=-=", event.target.value);

    this.setState({
      ...copyState,
    });
    console.log("-=-copyState=-=", copyState);
  };
  componentDidMount() {}
  toggle = () => {
    this.props.toggle();
  };

  render() {
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
              <h1 id="message">Get Started</h1>
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
                />
                <label for="password">Password</label>
              </div>
              <a
                className="button-submit"
                onClick={() => {
                  this.handleCreateUser();
                }}
              >
                Create My Account
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);
