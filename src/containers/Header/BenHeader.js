import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../store/actions";
import Navigator from "../../components/Navigator";
import "./BenHeader.scss";
import ben from "../../assets/images/ben.png";
import vinyl from "../../assets/images/vinyl.png";
import cub from "../../assets/images/cub.png";
import hector from "../../assets/images/hector1.png";
class BenHeader extends Component {
  render() {
    const { processLogout } = this.props;

    return (
      <React.Fragment>
        <div className="ben-header">
          <input type="checkbox" id="burger-toggle"></input>
          <label for="burger-toggle" className="burger-menu">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </label>
          <div className="menu">
            <div className="menu-inner">
              <div className="gallery">
                <div className="ben-logo">
                  <div className="ben-logo-top"></div>
                  <div className="ben-logo-bottom">
                    <img src={ben} />
                  </div>
                </div>
                <div className="title-menu">
                  <div className="text home">home</div>
                  <div className="text services">services</div>
                  <div className="text about">about us</div>
                  <div className="text contact">contact</div>
                </div>
              </div>
              <div className="image-menu">
                <img src={vinyl} />
              </div>
            </div>
          </div>
        </div>
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
