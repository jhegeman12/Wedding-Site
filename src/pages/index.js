import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import Image2 from "../components/image2"
import Image3 from "../components/image3"
import SEO from "../components/seo"
import "../components/index.css"
import "../components/mystyles.scss"
import posed from "react-pose"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faChurch,
  faCocktail,
  faUtensils,
  faLandmark,
  faMusic,
} from "@fortawesome/free-solid-svg-icons"

const Page = posed.div({
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
})

class IndexPage extends React.Component {
  state = { isVisible: false }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isVisible: true,
      })
    }, 1000)
  }

  render() {
    return (
      <Page pose={this.state.isVisible ? "visible" : "hidden"}>
        <Layout>
          <SEO title="Home" />
          <div className=".container.is-fullhd">
            <div className="cover ">
              <div className="coverText">
                <div className="coverTitle">
                  <span>TOM </span>
                  <span className="and">&</span>
                  <span> DANIELLE</span>
                </div>
                <p className="coverDesc">ARE GETTING MARRIED AUGUST 21, 2021</p>
              </div>
            </div>
            <div className="container">
              <div className="about">
                <div className="columns">
                  <div className="column">
                    <p className="nameTitle">TOM SETTLE</p>
                    <p className="descText">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum. Lorem ipsum
                      dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                  </div>
                  <div className="column">
                    <p className="nameTitle">DANIELLE EVANS</p>
                    <p className="descText">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum. Lorem ipsum
                      dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                  </div>
                </div>
                <div className="about">
                  <div className="columns">
                    <div className="column"></div>
                    <div className="quote column is-one-quarter">
                      the greatest adventure is not where you go but who you are
                      with.
                    </div>
                  </div>
                </div>
                <div className="columns">
                  <div className="column">
                    <Image />
                  </div>
                  <div className="column">
                    <div className="floatImg">
                      <Image2 />
                    </div>
                    <div className="floatImg2">
                      <Image3 />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="info .container.is-fullhd">
              <div className="container">
                <p className="details">WEDDING DETAILS</p>
                <div className="columns">
                  <div className="column">
                    <p className="detailsSub">CEREMONY</p>
                    <p className="detailsText">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                  </div>
                  <div className="column">
                    <p className="detailsSub">RECEPTION</p>
                    <p className="detailsText">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                  </div>
                  <div className="column">
                    <p className="detailsSub">ACCOMODATION</p>
                    <p className="detailsText">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="columns">
              <div className="column"></div>
              <div className="timeline column is-two-thirds columns">
                <div className="column center">
                  <FontAwesomeIcon icon={faChurch} className="iconFA" />
                  <p className="timelineTitle">Ceremony Begins</p>
                  <p className="timelineTime">2:30 PM</p>
                </div>
                <div className="column center">
                  <FontAwesomeIcon icon={faCocktail} className="iconFA" />
                  <p className="timelineTitle">Cocktail Hour</p>
                  <p className="timelineTime">5:30 PM</p>
                </div>
                <div className="column center">
                  <FontAwesomeIcon icon={faLandmark} className="iconFA" />
                  <p className="timelineTitle">Reception</p>
                  <p className="timelineTime">6:30 PM</p>
                </div>
                <div className="column center">
                  <FontAwesomeIcon icon={faUtensils} className="iconFA" />
                  <p className="timelineTitle">Dinner</p>
                  <p className="timelineTime">7:00 PM</p>
                </div>
                <div className="column center">
                  <FontAwesomeIcon icon={faMusic} className="iconFA" />
                  <p className="timelineTitle">Dance</p>
                  <p className="timelineTime">8:00 PM</p>
                </div>
              </div>
              <div className="column"></div>
            </div>
            <div className="columns">
              <div className="column"></div>
              <div className="timeline column is-two-thirds columns">
                <div className="column">
                  <p className="regTitle">REGISTRY</p>
                  <p className="regText">
                    Everything we put on our registery are things we'll love,
                    but honestly, the most important gift you can bring us is
                    having you and your dancing shoes at our celebration. We are
                    pumped to spend out special day with you and are very
                    blessed to have you in our lives.
                  </p>
                </div>
                <div className="column"></div>
              </div>
              <div className="column"></div>
            </div>
          </div>
        </Layout>
      </Page>
    )
  }
}

export default IndexPage
