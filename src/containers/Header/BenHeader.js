import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../store/actions";
import Navigator from "../../components/Navigator";
import "./BenHeader.scss";
import ben from "../../assets/images/ben.png";
class BenHeader extends Component {
  render() {
    const { processLogout } = this.props;

    return (
      <React.Fragment>
        <nav>
          <div class="navbar">
            <div class="nav-container">
              <input class="checkbox" type="checkbox" name="" id="" />

              <div class="hamburger-lines">
                <div class="hamburger-menu">
                  <span class="line line1"></span>
                  <span class="line line2"></span>
                  <span class="line line3"></span>
                </div>
                <div class="menu-text">MENU</div>
              </div>
              <div class="contact">
                <a href="#" target="_blank">
                  CONTACT
                </a>
              </div>
              <div class="menu-items">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">about</a>
                </li>
                <li>
                  <a href="#">blogs</a>
                </li>
                <li>
                  <a href="#">portfolio</a>
                </li>
                <li>
                  <a href="#">contact</a>
                </li>
                <div class="ben-logo">
                  <img src={ben} />
                </div>
              </div>
            </div>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processLogout: () => dispatch(actions.processLogout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BenHeader);
