import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"

import Image4 from '../components/mtnImg' 
import SEO from "../components/seo"
import "../components/index.css"
import "../components/mystyles.scss"
import posed from "react-pose"
import BackgroundImage from 'gatsby-background-image'
import { graphql, Link } from 'gatsby'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faChurch,
  faCocktail,
  faUtensils,
  faLandmark,
  faMusic,
  faDirections,
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
            <div >
              <BackgroundImage className="cover" fluid={this.props.data.indexImage.childImageSharp.fluid}>
              <div className="coverText">
                <div className="coverTitle">
                  <span>TOM </span>
                  <span className="and">&</span>
                  <span> DANIELLE</span>
                </div>
                <p className="coverDesc">ARE GETTING MARRIED AUGUST 21, 2021</p>
              </div>
              </BackgroundImage>
            </div>
            <div className="container">
              {/* <div className="about">
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
                </div> */}
                </div>
                <div className="mtn .container.is-fullhd">
                  
                  <div className="columns" data-sal="fade-in" data-sal-delay="500" data-sal-easing="ease" data-sal-duration='1000'>
                    
                    <div className='column is-one-quarter is-offset-one-quarter'><div className="quote">
                      the greatest adventure is not where you go but who you are
                      with.
                    </div></div>
                    
                    <div className="column"><Image4></Image4></div>
                  </div>
                  
                </div>
                  
                {/* RSVP button */}
                <div className="conatiner rsvp">
                  <Link to='/rsvp' className='rsvpButton'>RSVP</Link>
                </div>
                <div className='container images'>
                  <div className="bigImg" data-sal="fade-in" data-sal-delay="500" data-sal-easing="ease" data-sal-duration='1000'>
                    <Image />
                  </div>
                    {/* <div className="floatImg" data-sal="fade-in" data-sal-delay="700" data-sal-easing="ease" data-sal-duration='1000'>
                      <Image2 />
                    </div>
                    <div className="floatImg2" data-sal="fade-in" data-sal-delay="900" data-sal-easing="ease" data-sal-duration='1000'>
                      <Image3 />
                    </div> */}
                </div>
              
            
            <div className="info .container.is-fullhd">
              <div className="container" data-sal="fade-in" data-sal-delay="500" data-sal-easing="ease" data-sal-duration='1000'>
                <p className="details">WEDDING DETAILS</p>
                <div className="columns">
                  <div className="column">
                    <p className="detailsSub">CEREMONY</p>
                    <p className="detailsText">
                    We will be getting married at our home parish, Our Lady of Mount Carmel (OLMC). OLMC has been very special to us as it’s where we met and where we’ve grown in our relationship and faith together. Father Richard will be the celebrant and mass will begin at 3 PM. 
                    </p>
                  </div>
                  <div className="column">
                    <p className="detailsSub">RECEPTION</p>
                    <p className="detailsText">
                    After mass, please join us for cocktail hour starting at 5:30 PM at The Bluff’s at Conner Prairie. The reception will follow, starting at 6:30 PM. 
                    </p>
                  </div>
                  <div className="column">
                    <p className="detailsSub">ACCOMODATIONS</p>
                    <p className="detailsText">
                    We have set aside blocks of rooms at hotels near the church and venue for out of town guests. Please mention the Evans-Settle wedding to book a room in our block, or visit the links below.
                    <br></br>
                    <br></br>
                    <p style={{fontStyle: 'italic'}}>These blocks will remain open until <span style={{fontWeight: '700'}}>July 19th, 2021.</span></p>
                    <p className="acLink"><a rel="noreferrer" href='https://www.marriott.com/event-reservations/reservation-link.mi?id=1606330854530&key=GRP&app=resvlink' target="_blank">Hotel Carmichael</a></p><p style={{paddingLeft: "20px"}}><FontAwesomeIcon icon={faDirections} style={{fontSize: '20px'}} className="iconFA directions" />  - 1 Carmichael Square, Carmel, IN 46032</p>
                    <p className="acLink"><a rel="noreferrer" href='http://hiltongardeninn.hilton.com/en/gi/groups/personalized/I/INDCAGI-ESWEDD-20210818/index.jhtml' target="_blank">Hilton Garden Inn</a></p><p style={{paddingLeft: "20px"}}><FontAwesomeIcon icon={faDirections} style={{fontSize: '20px'}} className="iconFA directions" />  - 13090 N Pennsylvania St, Carmel, IN 46032</p>
                    <p className="acLink"><a rel="noreferrer" href='https://www.marriott.com/event-reservations/reservation-link.mi?id=1609773039533&key=GRP&app=resvlink' target="_blank">Springhill Suites</a></p><p style={{paddingLeft: "20px"}}><FontAwesomeIcon icon={faDirections} style={{fontSize: '20px'}} className="iconFA directions" />  - 11855 N Meridian St, Carmel, IN 46032</p>
                    </p>
                  </div>
                </div>
                
              </div>   
              </div>   
              <div className='columns'>
              <div className='column'></div>
              <div className="timeline column is-three-fifths columns">
                <div className="column center">
                  <FontAwesomeIcon icon={faChurch} className="iconFA" />
                  <p className="timelineTitle">Ceremony Begins</p>
                  <p className="timelineTime">3:00 PM</p>
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
              <div className='column'></div>
              </div>
            <div className='column is-8 is-offset-2'>
              <div className='columns'>
                <div className='column'><p className='mapTextTitle'>CEREMONY DETAILS</p><a href='https://www.google.com/maps/dir//Our+Lady+of+Mt+Carmel+Church,+14598+Oak+Ridge+Rd,+Carmel,+IN+46032' target='_blank' rel="noreferrer" className='mapDirections'><FontAwesomeIcon icon={faDirections} className="iconFA directions" /><span className='mapLink'>14598 Oak Ridge Rd, Carmel, IN 46032</span></a><iframe title='mapOLMC' className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2425.861609612291!2d-86.14923737690404!3d39.99964312905682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8814ac2769a68d0f%3A0x50600322e0884fb2!2sOur%20Lady%20of%20Mt%20Carmel%20Church!5e0!3m2!1sen!2sus!4v1603729405448!5m2!1sen!2sus" aria-hidden="false" ></iframe></div>
                <div className='column'><p className='mapTextTitle'>RECEPTION DETAILS</p><a href='https://www.google.com/maps/dir//The+Bluffs+at+Conner+Prairie,+13080+Allisonville+Rd,+Fishers,+IN' target='_blank' rel="noreferrer" className='mapDirections'><FontAwesomeIcon icon={faDirections} className="iconFA directions" /><span className='mapLink'>13080 Allisonville Rd, Fishers, IN 46038</span></a><iframe title='mapBluffs' className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3057.36148524516!2d-86.03446368430305!3d39.97802639012645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8814b35916e2a8cd%3A0xf57c0df294806781!2sThe%20Bluffs%20at%20Conner%20Prairie!5e0!3m2!1sen!2sus!4v1603733162678!5m2!1sen!2sus" aria-hidden="false" ></iframe></div>
              </div>
            </div>
            
            {/* Bridal Party */}
            <div className="info .container.is-fullhd">
            <div className=" container" data-sal="fade-in" data-sal-delay="500" data-sal-easing="ease" data-sal-duration='1000'>
                <p className="details">BRIDAL PARTY</p>
                <div className="columns">
                  <div className="column">
                    <p className="detailsSub">BRIDESMAIDS</p>
                    <p className='nameContainer'><span className='nameText'>Paige Evans - </span><span className='nameSubText'>Maid of Honor</span></p>
                    <p className='nameContainer'><span className='nameText'>Grace O'Hair - </span><span className='nameSubText'>Maid of Honor</span></p>
                    <p className='nameContainer'><span className='nameText'>Elizabeth Settle</span></p>
                    <p className='nameContainer'><span className='nameText'>Melissa Settle</span></p>
                    <p className='nameContainer'><span className='nameText'>Emily Henkel</span></p>
                    <p className='nameContainer'><span className='nameText'>Kristina Wieschhaus</span></p>
                    <p className='nameContainer'><span className='nameText'>Abbi Brabender</span></p>
                    <p className='nameContainer'><span className='nameText'>Carlie Witsken</span></p>
                    <p className='nameContainer'><span className='nameText'>Emily Trinca</span></p>
                    
                  </div>
                  <div className="column">
                    <p className="detailsSub">GROOMSMEN</p>
                    <p className='nameContainer'><span className='nameText'>Charlie Hicks - </span><span className='nameSubText'>Best Man</span></p>
                    <p className='nameContainer'><span className='nameText'>James Molin</span></p>
                    <p className='nameContainer'><span className='nameText'>Luke Titus</span></p>
                    <p className='nameContainer'><span className='nameText'>Peter St. Amand</span></p>
                    <p className='nameContainer'><span className='nameText'>Adam Kaufman</span></p>
                    <p className='nameContainer'><span className='nameText'>Jack McGrath</span></p>
                    <p className='nameContainer'><span className='nameText'>Carl Nickander</span></p>
                    <p className='nameContainer'><span className='nameText'>Patrick Hamilton</span></p>
                    <p className='nameContainer'><span className='nameText'>Rhys Ivory-Ganja</span></p>
                    
                  </div>
                  
                </div>
                
              </div>  
              </div> 


            <div className="columns" data-sal="fade-in" data-sal-delay="500" data-sal-easing="ease" data-sal-duration='1000'>
              <div className="column"></div>
              <div className="timeline column is-two-thirds columns">
                <div className="column">
                  <p className="regTitle">REGISTRY</p>
                  <p className="regText">
                  While everything on our registry are things we'll love, the most important gift we can receive is the chance to celebrate with you. We are so excited to share our special day with you and feel very blessed to have you in our lives!
                  </p>
                </div>
                <div className="column"></div>
              </div>
              <div className="column"></div>
            </div>
            <div className="columns" data-sal="fade-in"  data-sal-easing="ease" data-sal-duration='1000'>
              <div className="column"></div>
              <div className="timeline column is-two-thirds columns">
                <a href='https://www.crateandbarrel.com/gift-registry/danielle-evans-and-tom-settle/r6199513' target='_blank' rel="noreferrer" className="regButton">CRATE & BARREL</a>
                <a href='https://www.target.com/gift-registry/giftgiver?registryId=66cf6664801247aa8e1f12ec5e5d9bb3&lnk=registry_custom_url' target='_blank' rel="noreferrer" className="regButton">TARGET</a>
                <a href='https://registry.theknot.com/danielle-evans-tom-settle-august-2021-in/42170338' target='_blank' rel="noreferrer" className="regButton">THE KNOT</a>
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

export const pageQuery = graphql`
query {
  indexImage: file(relativePath: { eq: "cover.jpg"}) {
    childImageSharp {
      fluid(quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`;
