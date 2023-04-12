import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import background from "../../assets/images/background.png";
import graffiti from "../../assets/images/graffiti.png";
import adminService from "../../services/adminService";
import { handleLogin } from "../../services/userService";

import * as actions from "../../store/actions";
import "./Login.scss";
import { FormattedMessage } from "react-intl";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      isHide: false,
      errMessage: "",
    };
  }
  handleOnchangeemail = (event) => {
    this.setState({
      email: event.target.value,
    });
  };
  handleOnchangePassword = (event) => {
    this.setState({
      password: event.target.value,
    });
  };
  handleOnchangeIsHidePassword = () => {
    if (this.state.isHide === this.state.isHide) {
      this.setState({
        isHide: !this.state.isHide,
      });
    }
  };

  handleLogin = async () => {
    this.setState({
      errMessage: "",
    });

    try {
      let res = await handleLogin(this.state.email, this.state.password);
      console.log(res);
      if (res && res.data && res.data.status != 200) {
        this.setState({
          errMessage: res.data.message,
        });
      } else {
        this.props.userLoginSuccess(res.data.user);
      }
    } catch (error) {
      if (error.response) {
        if (error.response.data) {
          this.setState({
            errMessage: error.response.data.message,
          });
        }
      }
    }
  };
  render() {
    return (
      <div
        className="login-background"
        style={
          {
            // backgroundImage: `url(${graffiti})`,
          }
        }
      >
        <div className="login-container row">
          <div className="login-content">
            <div className="col-12 text-center">SIGN IN</div>
            <div className="col-12 form-group">
              <label>Email:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Email"
                value={this.state.email}
                onChange={(event) => this.handleOnchangeemail(event)}
              ></input>
            </div>
            <div className="col-12 form-group">
              <label>Password:</label>
              <div className="form-password">
                <div className="input-password">
                  <input
                    type={this.state.isHide ? "text" : "password"}
                    className="form-control"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={(event) => this.handleOnchangePassword(event)}
                  ></input>
                </div>
                <div class="checkbox-wrapper-41">
                  <input
                    type="checkbox"
                    value={this.state.password}
                    onChange={() => this.handleOnchangeIsHidePassword()}
                  ></input>
                </div>
              </div>
            </div>
            <div className="message" style={{ color: "#9c2d2d" }}>
              {this.state.errMessage}
            </div>
            <div className="col-12 button">
              {" "}
              <button
                class="button-89"
                onClick={() => {
                  this.handleLogin();
                }}
              >
                Log in
              </button>
            </div>

            <div className="col-12">Forgot your password</div>
            <div className="col-12"></div>
          </div>
          <div
            className="login-image"
            style={{
              backgroundImage: `url(${background})`,
            }}
          ></div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    lang: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    navigate: (path) => dispatch(push(path)),
    // userLoginFail: () => dispatch(actions.userLoginFail()),
    userLoginSuccess: (userInfo) =>
      dispatch(actions.userLoginSuccess(userInfo)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
