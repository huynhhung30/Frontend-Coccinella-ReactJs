import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import "./UserManage.scss";
import { getUsersList } from "../../services/userService";
class UserManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrUsers: [],
    };
  }

  async componentDidMount() {
    let res = await getUsersList("all");
    if (res && res.status === 200) {
      this.setState({
        arrUsers: res.data,
      });
    }
    console.log("getUsersList", res);
  }

  render() {
    let arrUsers = this.state.arrUsers;
    return (
      <div className="user-container">
        <div className="content">
          <ul className="team">
            {arrUsers &&
              arrUsers.map((item, index) => {
                return (
                  <li className="member co-funder">
                    <div className="thumb">
                      <img src="https://assets.codepen.io/3/internal/avatars/users/default.png?fit=crop&format=auto&height=120&width=120"></img>
                    </div>
                    <div className="description">
                      <h3>{item.codeName}</h3>
                      <p>
                        {item.introduce}
                        <br />
                        <a href="https://codepen.io/chriscoyier/">
                          {item.phone}
                        </a>
                        <button href="https://codepen.io/chriscoyier/">
                          EDIT
                        </button>
                        <button href="https://codepen.io/chriscoyier/">
                          DELETE
                        </button>
                      </p>
                    </div>
                  </li>
                );
              })}

            {/* <li className="member co-funder">
              <div className="thumb">
                <img src="https://assets.codepen.io/2/internal/avatars/users/default.png?height=120&width=120"></img>
              </div>
              <div className="description">
                <h3>Alex Vazquez</h3>
                <p>
                  Alex is a full stack developer. Alex does JavaScript
                  development for CodePen, both front end and back, and just
                  about everything else.
                  <br />
                  <a href="https://codepen.io/quezo/">@quezo</a>
                </p>
              </div>
            </li>
            <li className="member">
              <div className="thumb">
                <img src="https://assets.codepen.io/652/internal/avatars/users/default.png?height=120&width=120"></img>
              </div>
              <div className="description">
                <h3>Marie Mosley</h3>
                <p>
                  Marie wears a lot of hats. She is our documentation lead,
                  customer support maestra, editor, and community manager.
                  <br />
                  <a href="https://codepen.io/mariemosley/">@mariemosley</a>
                </p>
              </div>
            </li>
            <li className="member">
              <div className="thumb">
                <img src="https://assets.codepen.io/39255/internal/avatars/users/default.png?height=120&width=120"></img>
              </div>
              <div className="description">
                <h3>Stephen Shaw</h3>
                <p>
                  Stephen is a designer/developer residing in Houston. He likes
                  to build animations with CSS & JavaScript.
                  <br />
                  <a href="https://codepen.io/shshaw/">@shshaw</a>
                </p>
              </div>
            </li>
            <li className="member">
              <div className="thumb">
                <img src="https://cpwebassets.codepen.io/assets/packs/about-rachelsmith-6878ca76a1d9200e6c296e810050b8cb.jpg?height=120&width=120"></img>
              </div>
              <div className="description">
                <h3>Rachel Smith</h3>
                <p>
                  Rachel is a full stack'er in Australia. Not only a creative
                  and talented designer and developer, but a great technical
                  writer.
                  <br />
                  <a href="https://codepen.io/rachsmith/">@rachsmith</a>
                </p>
              </div>
            </li>
            <li className="member">
              <div className="thumb">
                <img src="https://cpwebassets.codepen.io/assets/packs/about-robertkieffer-77c28f3a6efe082fd1903affae540b8a.jpg?height=120"></img>
              </div>
              <div className="description">
                <h3>Robert Kieffer</h3>
                <p>
                  Robert is a full-stack dev with a penchant for open-source
                  work. He dwells in the murky depthsmurky depths of JS.
                  <br />
                  <a href="https://codepen.io/br/oofa/">@br/oofa</a>
                </p>
              </div>
            </li>
            <li className="member">
              <div className="thumb">
                <img src="https://cpwebassets.codepen.io/assets/packs/about-deevazquez-c8e8b7f9e803f462b7be19ea60b9272f.jpg?height=120&width=120"></img>
              </div>
              <div className="description">
                <h3>Dee Vazquez</h3>
                <p>
                  Dee is a full stack developer who started her career in
                  finance. She can jump from Rails to React to Go, and also
                  manage our finances.
                  <br />
                  <a href="https://codepen.io/deequez/">@deequez</a>
                </p>
              </div>
            </li> */}
          </ul>
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

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
