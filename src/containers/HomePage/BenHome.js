import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import "./BenHome.scss";
import HomeHeader from "./HomeHeader";

class BenHome extends Component {
  render() {
    return <React.Fragment>Ben Hello World</React.Fragment>;
  }
}

const mapStateToProps = (state) => {
  return {
    // isLoggedIn: state.user.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(BenHome);
