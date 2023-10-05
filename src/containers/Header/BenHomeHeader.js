import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import "./BenHomeHeader.scss";
import coccinella from "../../assets/images/coccinella.png";
import { LANGUAGE } from "../../utils";
import { changeLanguageApp } from "../../store/actions";
import { FormattedMessage } from "react-intl";
import { path } from "../../utils";
import Home from "../../routes/Home";
import { Route } from "react-router-dom";
class BenHomeHeader extends Component {
  changeLanguage = (language) => {
    this.props.changeLanguageApp(language);
    console.log("=-=-=-=-=-=-", language);
  };
  render() {
    let language = this.props.language;
    return <div></div>;
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeLanguageApp: (language) => dispatch(changeLanguageApp(language)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BenHomeHeader);
