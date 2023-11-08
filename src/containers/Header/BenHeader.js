import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../store/actions";
import Navigator from "../../components/Navigator";
import "./BenHeader.scss";
import ben from "../../assets/images/ben.png";
import latte from "../../assets/images/latte.png";
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
                  <div className="ben-logo-mid">
                    <img src={ben} />
                  </div>
                  <div className="ben-logo-bottom">contact</div>
                </div>
                <div className="title-menu">
                  <p>home</p>
                  <p>services</p>
                  <p>about us</p>
                  <div>
                    <img src={hector} />
                  </div>
                </div>
              </div>
              <div className="image-menu">
                <img src={cub} />
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
