import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import "./HomePage.scss";
import HomeHeader from "./HomeHeader";

class HomePage extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="home-page">
          <HomeHeader />
          <div className="news-page">
            <div className="news-page__section exclusive-story">
              <div className="exclusive-story__marker">COCCINELLA</div>
              <div className="exclusive-story__preview">
                <div className="preview-title">
                  <span className="text--uppercase display--block">
                    Coccinella septempunctata,
                  </span>
                  <span>the seven-spot ladybird</span>
                </div>
                <div className="preview-content-wrapper">
                  <div className="preview-content">
                    <div className="preview-content--left">
                      What are mugglers really like? Do mugglers dream of
                      electric sheep? These and many more questions are
                      discussed with the top authoroties in the field of
                    </div>
                    <div className="preview-content--right">
                      modern muggler studies. Is it possible that mugglers are
                      not too different from ourselves? Can we in fact learn
                      from the fate of our underdeveloped cousins?
                    </div>
                  </div>
                  <div className="preview-content--link">
                    Read the Full story on Page 6.
                  </div>
                </div>
              </div>
            </div>
            <div className="news-page__section stories">
              <div className="story story--main">
                <div className="column column--left">
                  {/* <!--  start: story title        --> */}
                  <div className="story-title">
                    <div className="story-title--first-line">
                      <div className="title-text text--vertical">hurricane</div>
                      <div className="title-text text--normal">
                        Maria Threatens
                      </div>
                    </div>
                    <div className="story-title--second-line">
                      <div className="title-text text--normal">
                        Quidditch Playoffs
                      </div>
                    </div>
                  </div>
                  {/* <!--  end: story title        --> */}

                  {/* <!--  start: story content        --> */}
                  <div className="story-content">
                    <div className="story-column column--first">
                      <div className="paragraph first">
                        <p>
                          At vero eos et accusamus et iusto odio dignissimos
                          ducimus qui blanditiis praesentium voluptatum deleniti
                          atque corrupti quos dolores et quas molestias
                          excepturi sint occaecati.
                        </p>
                      </div>
                      <div className="paragraph">
                        <p className="text--capitalize-first">
                          Cupiditate non provident, similique sunt in culpa qui
                          officia deserunt mollitia animi, id est laborum et
                          dolorum fuga. Et harum quidem rerum facilis est et
                          expedita distinctio. Nam libero tempore, cum soluta
                          nobis est eligendi optio cumque nihil impedit quo
                          minus id quod maxime placeat facere possimus, omnis
                          voluptas assumenda est, omnis dolor repellendus.
                        </p>
                      </div>
                      <div className="paragraph">
                        <p>
                          Temporibus autem quibusdam et aut officiis debitis aut
                          rerum necessitatibus saepe eveniet ut et voluptates
                          repudiandae sint et molestiae non recusandae. Itaque
                          earum rerum hic tenetur a sapiente delectus, ut aut
                          reiciendis voluptatibus maiores alias consequatur aut
                          perferendis doloribus asperiores repellat.
                        </p>
                      </div>
                    </div>
                    <div className="story-column column--second-third">
                      <p className="story-featured-photo">
                        <img
                          src="http://redonion.se/cssgrid/images/tornado508.jpg"
                          alt=""
                        />
                      </p>
                      {/* <!--      start: blockquote        --> */}
                      <div className="blockquote-wrapper">
                        <div className="blockquote-title">
                          <div className="text--superscript">
                            Captain Oliver
                          </div>
                          <div className="text--normal">Wood not worried</div>
                        </div>
                        <div className="blockquote-content">
                          We're prepared for anything. Dealing with bad weather
                          is not a problem. Quidditch is an outdoor sport, and
                          as such, Nature is a part of the game. Playing in
                          rough conditions is in fact something me and my crew
                          are used to.
                        </div>
                      </div>
                      {/* <!--      end: blockquote        --> */}
                      <div className="columns-wrapper">
                        <div className="column first">
                          <div className="paragraph">
                            <p>
                              Veteran Captain Oliver Wood did not seem too
                              anxious about the hurricane threat as he and some
                              of his fellow crew met reporters in the lobby at
                              player hotel this morning. At vero eos et
                              accusamus et iusto.
                            </p>
                          </div>
                          <div className="paragraph">
                            <p>
                              Ducimus qui blanditiis praesentium voluptatum
                              deleniti atque corrupti quos dolores et quas
                              molestias excepturi sint occaecati cupiditate non
                              provident, similique sunt in culpa qui.
                            </p>
                          </div>
                        </div>
                        <div className="column">
                          <div className="paragraph">
                            <p>
                              Harum quidem rerum facilis est et expedita
                              distinctio. Nam libero tempore, cum soluta nobis
                              est eligendi optio cumque nihil impedit quo minus
                              id quod maxime placeat facere possimus, omnis
                              voluptas assumenda est, omnis dolor repellendus.
                            </p>
                          </div>
                          <div className="paragraph">
                            <p>
                              Temporibus autem quibusdam et aut officiis debitis
                              aut rerum necessitatibus saepe eveniet ut et
                              voluptates repudiandae sint et.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!--  end: story content        --> */}
                </div>

                <div className="column column--right">
                  <div className="author">
                    <div className="name">Rita Skeeter</div>
                    <div className="footnote">reports</div>
                  </div>
                  <div className="paragraph">
                    <p className="text--capitalize-first">
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                      qui blanditiis praesentium voluptatum deleniti atque
                      corrupti quos dolores et quas molestias excepturi sint
                      occaecati cupiditate non provident.
                    </p>
                  </div>
                  <div className="paragraph">
                    <p>
                      Similique sunt in culpa qui officia deserunt mollitia
                      animi, id est laborum et dolorum fuga. Et harum quidem
                      rerum facilis est et expedita distinctio. Nam libero
                      tempore, cum soluta nobis est eligendi optio cumque nihil
                      impedit quo minus id quod maxime placeat facere possimus,
                      omnis voluptas assumenda est, omnis dolor repellendus.
                    </p>
                  </div>
                  <div className="paragraph">
                    <p>
                      Temporibus autem quibusdam et aut officiis debitis aut
                      rerum necessitatibus saepe eveniet ut et voluptates
                      repudiandae sint et molestiae non recusandae. Itaque earum
                      rerum hic tenetur a sapiente delectus, ut aut reiciendis
                      voluptatibus maiores alias consequatur aut perferendis
                      doloribus asperiores repellat.
                    </p>
                  </div>
                  <div className="paragraph">
                    <p>
                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                      aut odit aut fugit, sed quia consequuntur magni dolores
                      eos qui ratione voluptatem sequi nesciunt. Neque porro
                      quisquam est, qui dolorem ipsum quia dolor sit amet,
                      consectetur, adipisci velit, sed quia non numquam eius
                      modi tempora incidunt ut labore et dolore magnam aliquam
                      quaerat voluptatem.
                    </p>
                  </div>
                  <div className="paragraph">
                    <p>Corrupti quos dolores.</p>
                  </div>
                </div>
              </div>
              <div className="story-divider"></div>
              <div className="story story--secondary">
                <div className="columns-wrapper">
                  <div className="column first">
                    <p className="story-title--secondary">
                      Ministry Secretary Denies Job Crisis
                    </p>
                    <div className="story-featured-photo">
                      <img
                        src="http://redonion.se/cssgrid/images/mics500.jpg"
                        alt=""
                      />
                    </div>
                    <div className="caption">
                      <div className="caption_content">
                        “THERE IS ENOUGH MAGIC FOR ALL”
                      </div>
                      <div className="page-number">page 12</div>
                    </div>
                  </div>
                  <div className="column second">
                    <div className="story-title--third">
                      <div className="first-part">
                        <small>ALBUS SEVERUS POTTER</small> Scandal
                      </div>
                      <div className="second-part">
                        In Polyjuice
                        <small>
                          Potter was discovered trying to enter girls dorm under
                          the influence of polyjuice.
                        </small>
                      </div>
                    </div>
                    <div className="story-content--third">
                      <img
                        src="http://redonion.se/cssgrid/images/potions200.jpg"
                        alt=""
                      />
                      <div className="paragraph">
                        <p className="text--capitalize-first">
                          A Hogwarts spokesperson says the incident will not be
                          taken lightly, since it was only a few months ago
                          young Potter was involved in a similar incident.
                          Parents of the Hufflepuff girls are now putting
                          preassure on the school to assure the safety of their
                          children.
                        </p>
                      </div>
                      <div className="paragraph">
                        <p>
                          An anonymous source says the Potter boy has been
                          harassing girls and bullying his fellow students since
                          he started at Hogwarts. The source also says that
                          because of his family name, professors and staff are
                          too scared to act. Neither one of the boy's parents
                          wanted to comment the event.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- end: stories   -->

  <!--  start: weather section    --> */}
            <div className="news-page_section weather">
              <div className="section-divider" title="Weather"></div>
              <div className="columns-wrapper column--weathers">
                <div className="column column--weather">
                  <div className="weather_value text_shadow--hot">
                    27 <span className="weater_value_measurement">*C</span>{" "}
                  </div>
                  <div className="weather_city">Adua</div>
                </div>
                <div className="column column--weather">
                  <div className="weather_value">
                    19 <span className="weater_value_measurement">*C</span>{" "}
                  </div>
                  <div className="weather_city">Hogsmeade</div>
                </div>
                <div className="column column--weather">
                  <div className="weather_value">
                    18 <span className="weater_value_measurement">*C</span>{" "}
                  </div>
                  <div className="weather_city">Idris</div>
                </div>

                <div className="column column--weather">
                  <div className="weather_value text_shadow--hot">
                    24 <span className="weater_value_measurement">*C</span>{" "}
                  </div>
                  <div className="weather_city">King's Landing</div>
                </div>

                <div className="column column--weather">
                  <div className="weather_value text_shadow--cold">
                    -84 <span className="weater_value_measurement">*C</span>{" "}
                  </div>
                  <div className="weather_city">Luna</div>
                </div>

                <div className="column column--weather">
                  <div className="weather_value">
                    12 <span className="weater_value_measurement">*C</span>{" "}
                  </div>
                  <div className="weather_city">Stormwind</div>
                </div>
              </div>
            </div>
            {/* <!--  end: weather section    --> */}

            {/* <!--  start: footer story    --> */}
            <div className="news-page_section story--footer">
              <div className="story-title--footer">AURORS OUT OF CONTROL?</div>
              <div className="story_excerpt_and_number">
                <div className="story_page_number">
                  <div>page</div>
                  <div className="number">7</div>
                </div>
                <div className="story_excerpt">
                  <div>THE FULL STORY</div>
                  <div className="text--lowercase">violence investigated</div>
                </div>
              </div>
            </div>
            {/* <!--  end: footer story    -->
  <!-- start: table of topics --> */}
            <div className="news-page_section news-topics">
              <div className="columns-wrapper">
                <div className="column column_topic">
                  <div className="topic">World</div>
                  <div className="badge_number">7</div>
                </div>
                <div className="column column_topic">
                  <div className="topic">Ministry</div>
                  <div className="badge_number">12</div>
                </div>
                <div className="column column_topic">
                  <div className="topic">Sport</div>
                  <div className="badge_number">4</div>
                </div>
                <div className="column column_topic">
                  <div className="topic">Business</div>
                  <div className="badge_number">2</div>
                </div>
                <div className="column column_topic">
                  <div className="topic">Amusements</div>
                  <div className="badge_number">3</div>
                </div>
                <div className="column column_topic">
                  <div className="topic">Magic</div>
                  <div className="badge_number">6</div>
                </div>
                <div className="column column_topic">
                  <div className="topic">Jobs</div>
                  <div className="badge_number">13</div>
                </div>
                <div className="column column_topic">
                  <div className="topic">Adventure</div>
                  <div className="badge_number">14</div>
                </div>
              </div>
            </div>
            {/* <!-- end: table of topics --> */}
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
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
