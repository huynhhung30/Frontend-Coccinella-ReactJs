import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import "./BenHome.scss";
import BenHeader from "../Header/BenHeader";

class BenHome extends Component {
  render() {
    return (
      <div>
        <BenHeader />
        Ben Hello World
      </div>
    );
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
