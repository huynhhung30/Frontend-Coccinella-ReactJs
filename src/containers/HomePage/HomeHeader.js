import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import "./HomeHeader.scss";
import gmail from "../../assets/images/gmail.png";
import facebook from "../../assets/images/facebook.png";
import instagram from "../../assets/images/instagram.png";
import coccinella from "../../assets/images/coccinella.png";

class HomeHeader extends Component {
  render() {
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
                  <div className="button home">HOME</div>
                  <div className="button contact">CONTACT</div>
                  <div className="button info">ACCOUNT</div>
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
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
