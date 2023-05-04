import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import "./HomeHeader.scss";
import gmail from "../../assets/images/gmail.png";
import facebook from "../../assets/images/facebook.png";
import instagram from "../../assets/images/instagram.png";
import coccinella from "../../assets/images/coccinella.png";
import { LANGUAGE } from "../../utils";
import { changeLanguageApp } from "../../store/actions";
import { FormattedMessage } from "react-intl";
class HomeHeader extends Component {
  changeLanguage = (language) => {
    this.props.changeLanguageApp(language);
    console.log("=-=-=-=-=-=-", language);
  };
  render() {
    let language = this.props.language;
    return (
      <div className="wrap">
        <div className="wrap-top">
          <div className="container">
            <div className="row top">
              <div className="col-sm-6">
                <div className="content-left">
                  <div className="icon-gmail">
                    <img src={gmail} width="35px" height="35px" />
                  </div>
                  <div className="name-gmail">
                    coccinellaseptempunctatasound@gmail.com
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="content-right">
                  <div className="social translate">
                    <div class="radio-group">
                      <input
                        type="radio"
                        id="option-one"
                        name="selector"
                        onClick={() => this.changeLanguage(LANGUAGE.VI)}
                      />
                      <label for="option-one">VN</label>
                      <input
                        type="radio"
                        id="option-two"
                        name="selector"
                        onClick={() => this.changeLanguage(LANGUAGE.EN)}
                        checked
                      />
                      <label for="option-two">ENG</label>
                    </div>
                  </div>
                  <div className="social instagram">
                    <img src={instagram} width="35px" height="35px" />
                  </div>
                  <div className="social facebook">
                    <img src={facebook} width="35px" height="35px" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="wrap-pot">
          <div className="container">
            <div className="row pot">
              <div className="col-sm-4 ">
                <div className="content-left">
                  <div className="logo">
                    <a href="#">
                      <img src={coccinella} width="80px" height="80px" />
                    </a>
                  </div>
                  <div className="title">
                    <h1>
                      <span>"COCCINELLA</span>
                      <span>MAGAZINE"</span>
                    </h1>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="content-mid">
                  <div className="button home">
                    <FormattedMessage id="HOME_HEADER.HOME" />
                  </div>
                  <div className="button contact">
                    <FormattedMessage id="HOME_HEADER.CONTACT" />
                  </div>
                  <div className="button info">
                    <FormattedMessage id="HOME_HEADER.ACCOUNT" />
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="content-right">
                  <label>
                    <input type="text" placeholder="search" required />
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
