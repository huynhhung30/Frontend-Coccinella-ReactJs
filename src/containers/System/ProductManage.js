import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import "./ProductManage.scss";
class ProductManage extends Component {
  state = {};

  componentDidMount() {}

  render() {
    return (
      <div class="wrapper">
        <nav>
          <input class="toggle" id="nav" type="checkbox" />
          <label class="label" for="nav">
            <p>Menu</p>
            <span class="hum"></span>
            <ul class="list">
              <li class="list__home">
                <a href="#0">Home</a>
              </li>
              <li class="list__about">
                <a href="#0">About</a>
              </li>
              <li class="list__clients">
                <a href="#0">
                  <span>Clients</span>
                </a>
                <ul class="list__clientsItems">
                  <li>
                    <a href="#0">Burger King</a>
                  </li>
                  <li>
                    <a href="#0">Southwest Airlines</a>
                  </li>
                  <li>
                    <a href="#0">Levi Strauss</a>
                  </li>
                </ul>
              </li>
              <li class="list__strauss">
                <a href="#0">
                  <span>Services</span>
                </a>
                <ul class="list__straussItem">
                  <li>
                    <a href="#0">Print Design</a>
                  </li>
                  <li>
                    <a href="#0">Web Design</a>
                  </li>
                  <li>
                    <a href="#0">Mobile App Development</a>
                  </li>
                </ul>
              </li>
              <li class="list__contact">
                <a href="#0">Contact</a>
              </li>
            </ul>
          </label>
        </nav>
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

export default connect(mapStateToProps, mapDispatchToProps)(ProductManage);
