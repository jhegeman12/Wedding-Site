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
  faPizzaSlice,
  faRing,
  faGlassCheers,
  faUtensils,
  faPlaceOfWorship,
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
    let countDownDate = new Date("Oct 15, 2022 16:00:00").getTime()

    setInterval(() => {
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
          <SEO title="Joseph & Mikhaila's Wedding" />
          <div className=".container.is-fullhd">
            <div >
              <BackgroundImage className="cover" fluid={this.props.data.indexImage.childImageSharp.fluid}>
              <div className="coverText">
                <div className="coverTitle">
                  <span>Joseph </span>
                  <span>& </span>
                  <span>Mikhaila</span>
                </div>
                <p className="coverDesc">ARE GETTING MARRIED OCTOBER 15, 2022</p>
              </div>
              </BackgroundImage>
            </div>
            <div className="container">
              {/* <div className="about">
                <div data-sal="fade-in" data-sal-delay="300" data-sal-easing="ease" data-sal-duration='1000'>
                  <div className="ourStory" >
                    <p className="nameTitle">Joseph & Mikhaila</p>
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
                  </div>
              
            
            <div className="info .container.is-fullhd">
              <div className="container" data-sal="fade-in" data-sal-delay="500" data-sal-easing="ease" data-sal-duration='1000'>
                <p className="details">Weekend Details</p>
                <div className="columns">
                  <div className="column">
                    <p className="detailsSub">Welcome Ceremony</p>
                    <p className="detailsText">
                    We will be getting married in the lawn adjacent to the Olympic Valley Lodge at Palisades Ski Resort in Olympic Valley, California. Palisades and the mountains hold a special place for us, as we got engaged at the top of Emigrant Gap lift. Our close friend Robert McComb will be the ceremony officiant, and the ceremony will begin at 4 pm. 
                    </p>
                  </div>
                  <div className="column">
                    <p className="detailsSub">Ceremony</p>
                    <p className="detailsText">
                    Please join us for cocktail hour starting immediately after the ceremony on the sun deck of the Olympic Valley Lodge. The reception will follow inside the lodge at 6:30 PM. The reception will end promptly at 10 pm. The Palisades Village is within walking distance of the Lodge and home to multiple bars and restaurants for late night drinks and food.  
                    </p>
                    <p className="detailsText">
                    There is free parking at the lodge.
                    </p>
                  </div>
                  <div className="column">
                    <p className="detailsSub">Reception</p>
                    <p className="detailsText">
                    We ask that our guests adhere to a formal dress code for the wedding. We recommend bringing a jacket, as the weather can drop to less than 50 after sunset. Although uncommon, it has snowed at this time of year before so please keep an eye on the weather! 
                    </p>

                  </div>
                  
                </div>
                
              </div>   
              </div>   
              <div className='columns'>
              <div className='column'></div>
              <div className="timeline column is-three-fifths columns">
                <div className="column center">
                  <FontAwesomeIcon icon={faPizzaSlice} className="iconFA" />
                  <p className="timelineTitle">Welcome Ceremony</p>
                  <p className="timelineTime">Friday - 10/14</p>
                  <p className="timelineTime">7:00 PM</p>
                </div>
                <div className="column center">
                  <FontAwesomeIcon icon={faRing} className="iconFA" />
                  <p className="timelineTitle">Ceremony Begins</p>
                  <p className="timelineTime">Saturday - 10/15</p>
                  <p className="timelineTime">4:00 PM</p>
                </div>
                <div className="column center">
                  <FontAwesomeIcon icon={faGlassCheers} className="iconFA" />
                  <p className="timelineTitle">Cocktails</p>
                  <p className="timelineTime">4:45 PM</p>
                </div>
                <div className="column center">
                  <FontAwesomeIcon icon={faPlaceOfWorship} className="iconFA" />
                  <p className="timelineTitle">Reception</p>
                  <p className="timelineTime">5:30 PM</p>
                </div>
                <div className="column center">
                  <FontAwesomeIcon icon={faUtensils} className="iconFA" />
                  <p className="timelineTitle">Dinner</p>
                  <p className="timelineTime">6:00 PM</p>
                </div>
                <div className="column center">
                  <FontAwesomeIcon icon={faMusic} className="iconFA" />
                  <p className="timelineTitle">Dance</p>
                  <p className="timelineTime">7:00 PM</p>
                </div>
              </div>
              <div className='column'></div>
              </div>
            <div className="info .container.is-fullhd">
            <div className="container" data-sal="fade-in" data-sal-delay="500" data-sal-easing="ease" data-sal-duration='1000'>
              <div className= 'columns'>
                 <div className="column">
                    <p className="detailsSub">Getting Here</p>
                    <p className="detailsText">
                    The two closest airports are Sacramento and Reno. To get from either airport to Palisades, we recommend renting a car, but public transportation options are listed below. Once you are in the North Tahoe are (Truckee, Tahoe City, Olympic Valley, Incline Village), the Tahoe Truckee Area REgional Transit (TART) can be used to get to Palisades and explore the North Lake Area.</p>   
                    <br></br>
                    <p className="detailsSub2">
                      To Truckee/North Tahoe Area</p>
                    <br></br>
                    <p className="detailsText">
                    The California Zephyr Amtrak line runs between Reno and Sacramento, with a stop in Truckee, CA, but it does not start directly from the Sacramento or Reno airports. The North Lake Tahoe Express shuttle runs directly from the Reno International Airport to the North Lake Tahoe area.  
                    <p className="acLink"><a rel="noreferrer" href='https://www.amtrak.com/california-zephyr-train' target="_blank">Amtrak - California Zephyr</a></p>
                    <br></br>
                    </p>
                  </div>
                  <div className="column">
                    <p className="detailsSub">Accomodations</p>
                    <p className="detailsText">
                    There is a discounted rate for rooms in the Village at Palisades Tahoe. Please mention the Redovian-Hegeman wedding to receive the discount. If you are not interested in staying at the Palisades lodge, there are many Airbnb and Vrbo rentals available in the area. 
                    <br></br>
                    <br></br>
    
                    <p className="acLink"><a rel="noreferrer" href='https://www.palisadestahoe.com/plan-your-visit/lodging' target="_blank">Village at Palisades</a></p><p style={{paddingLeft: "20px"}}></p>
                    <p className="acLink"><a rel="noreferrer" href='https://www.airbnb.com/olympic-valley-ca/stays' target="_blank">Airbnb</a></p>
                    <p className="acLink"><a rel="noreferrer" href='https://www.vrbo.com/vacation-rentals/usa/california/lake-tahoe-ca/north-shore/squaw-valley' target="_blank">Vrbo</a></p>
                    </p>
                  <div className='column'><p className='mapTextTitle'>Ceremony Location</p><a href='https://www.google.com/maps/dir//Olympic+Village+Lodge,+1901+Chamonix+Pl,+Olympic+Valley,+CA+96146' target='_blank' rel="noreferrer" className='mapDirections'><FontAwesomeIcon icon={faDirections} className="iconFA directions" /><span className='mapLink'>1901 Chamonix Pl, Olympic Valley, CA 96146</span></a><iframe title='mapOVC' className='map' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3092.0033952619506!2d-120.2354779!3d39.1973716!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809bd93153d07aa7%3A0x840ba1fced7b1670!2sOlympic%20Village%20Lodge!5e0!3m2!1sen!2sus!4v1637384154321!5m2!1sen!2sus" aria-hidden="false" ></iframe></div>
                  </div>
                 </div>
                </div>
              </div>
      
            {/* Bridal Party 
            <div className="info .container.is-fullhd">
            <div className=" container" data-sal="fade-in" data-sal-delay="500" data-sal-easing="ease" data-sal-duration='1000'>
                <p className="details">Weddign Party</p>
                <div className="columns">
                  <div className="column">
                    <p className="detailsSub">Maids of Honor</p>
                    <p className='nameContainer'><span className='nameText'>Giuliana Kafaf</span></p>
                    <p className='nameContainer'><span className='nameText'>Juliane Wiese</span></p>
                    
                  </div>
                  <div className="column">
                    <p className="detailsSub">Best Men</p>
                    <p className='nameContainer'><span className='nameText'>Nick Hegeman</span></p>
                    <p className='nameContainer'><span className='nameText'>Mike Hegeman</span></p>
                    
                  </div>
                  
                </div>
                
              </div>  
              </div> */}


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
      fluid(quality: 100, maxWidth: 2048) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`;
