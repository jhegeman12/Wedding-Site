import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import Image2 from "../components/image2"
import Image3 from "../components/image3"
import Image4 from '../components/mtnImg' 
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
  state = { isVisible: false, days: 0, hours: 0, minutes: 0, seconds: 0 }

  countdown = () => {
    let countDownDate = new Date("Aug 21, 2021 15:00:00").getTime()

    const x = setInterval(() => {
      let now = new Date().getTime()
      let distance = countDownDate - now

      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      this.setState({'days': days, 'hours': hours, 'minutes': minutes, 'seconds': seconds})
    }, 1000)
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isVisible: true,
      })
    }, 1000)

    this.countdown()
  }

  render() {
    return (
      <Page pose={this.state.isVisible ? "visible" : "hidden"}>
        <Layout>
          <SEO title="Tom & Danielle's Wedding" />
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
                <div data-sal="fade-in" data-sal-delay="300" data-sal-easing="ease" data-sal-duration='1000'>
                  <div className="ourStory" >
                    <p className="nameTitle">TOM & DANIELLE</p>
                    <p className="descText">
                      Loremipsum dolor sit amet, consectetur adipiscing elit,
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
                </div>
                </div>
                <div className="mtn .container.is-fullhd">
                  
                  <div className="columns" data-sal="fade-in" data-sal-delay="500" data-sal-easing="ease" data-sal-duration='1000'>
                    <div className='column'></div>
                    <div className='column is-one-quarter'><div className="quote">
                      the greatest adventure is not where you go but who you are
                      with.
                    </div></div>
                    
                    <div className="column"><Image4></Image4></div>
                  </div>
                  
                </div>
                  
                <div className='container images'>
                  <div className="bigImg" data-sal="fade-in" data-sal-delay="500" data-sal-easing="ease" data-sal-duration='1000'>
                    <Image />
                  </div>
                    <div className="floatImg" data-sal="fade-in" data-sal-delay="700" data-sal-easing="ease" data-sal-duration='1000'>
                      <Image2 />
                    </div>
                    <div className="floatImg2" data-sal="fade-in" data-sal-delay="900" data-sal-easing="ease" data-sal-duration='1000'>
                      <Image3 />
                    </div>
                </div>
              
            
            <div className="info .container.is-fullhd">
              <div className="container" data-sal="fade-in" data-sal-delay="500" data-sal-easing="ease" data-sal-duration='1000'>
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
            <div className="container.is-fullhd" data-sal="fade-in" data-sal-delay="500" data-sal-easing="ease" data-sal-duration='1000'>
              <div className='columns'>
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
            </div>
            <div className="columns" data-sal="fade-in" data-sal-delay="500" data-sal-easing="ease" data-sal-duration='1000'>
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
            <div className="columns" data-sal="fade-in"  data-sal-easing="ease" data-sal-duration='1000'>
              <div className="column"></div>
              <div className="timeline column is-two-thirds columns">
                <a href='https://registry.theknot.com/danielle-evans-tom-settle-august-2021-in/42170338' target='_blank' rel="noreferrer" className="regButton">THE KNOT</a>
                <a href='https://registry.theknot.com/danielle-evans-tom-settle-august-2021-in/42170338' target='_blank' rel="noreferrer" className="regButton">TARGET</a>
                <a href='https://registry.theknot.com/danielle-evans-tom-settle-august-2021-in/42170338' target='_blank' rel="noreferrer" className="regButton">BED BATH & BEYOND</a>
              </div>
              <div className="column"></div>
            </div>
            <div className='countdown'>
              <span className='countNumber'>{this.state.days}</span> <span className='countText'>DAYS </span>
              <span className='countNumber'>{this.state.hours}</span> <span className='countText'>HOURS </span>
              <span className='countNumber'>{this.state.minutes}</span> <span className='countText'>MINUTES </span>
              <span className='countNumber'>{this.state.seconds}</span> <span className='countText'>SECONDS </span>
            </div>
          </div>
        </Layout>
      </Page>
    )
  }
}

export default IndexPage
