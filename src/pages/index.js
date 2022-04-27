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
    let countDownDate = new Date("Oct 15, 2022 19:00:00").getTime()

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
               </div>
                <div className="mtn .container.is-fullhd">
                  
                  <div className="columns" data-sal="fade-in" data-sal-delay="500" data-sal-easing="ease" data-sal-duration='1000'>
                    
                    <div className='column is-one-quarter is-offset-one-quarter'><div className="quote">
                    What we find in a soul mate is not something wild to tame, but something wild to run with.
                    </div></div>
                
                    <div className="column"><Image4></Image4></div>
                  </div>
                  
                </div>
                {/* RSVP button 
                <div className="conatiner rsvp">
                  <Link to='/rsvp' className='rsvpButton'>RSVP</Link>
                </div>*/}
              
                <div className='container images'>
                  <div className="bigImg" data-sal="fade-in" data-sal-delay="500" data-sal-easing="ease" data-sal-duration='1000'>
                    <Image/>
                  </div>
                </div>
                
            <div className="info .container.is-fullhd">
            <div className="container" data-sal="fade-in" data-sal-delay="500" data-sal-easing="ease" data-sal-duration='1000'>
                <p className="details">Weekend Details</p>
                <div className="columns">
                  <div className="column">
                    <p className="detailsSub">Welcome</p>
                    <p className="detailsText">Please join us for a welcome ceremony the night before the wedding for casual food and drinks. The welcome will be located at Fireside Pizza in Palisades Village at 7:00 pm the night of October 14, 2022. </p>
                  </div>
                  <div className="column">
                    <p className="detailsSub">Ceremony</p>
                    <p className="detailsText">The wedding ceremony will begin at 3:45 pm on October 15 in the lawn adjacent to the Olympic Valley Lodge. Formal attire is requested (Not black tie. The Groom will be wearing a navy suit with a bow tie, for reference). The ceremony will be held outside, please plan to dress accordingly. We ask that guests not take their own photos during the ceremony. </p>
                  </div>
                  <div className="column">
                    <p className="detailsSub">Reception</p>
                    <p className="detailsText">Please join us for cocktails starting immediately after the ceremony on the sun deck of the Olympic Valley Lodge. The reception will follow inside the lodge with dinner starting around 6. The reception will end promptly at 10 pm. The Palisades Village is within walking distance of the Lodge and home to multiple bars and restaurants for late night drinks and snacks.</p>
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
                  <p className="timelineTime">3:45 PM</p>
                </div>
                <div className="column center">
                  <FontAwesomeIcon icon={faGlassCheers} className="iconFA" />
                  <p className="timelineTitle">Cocktails</p>
                  <p className="timelineTime">4:30 PM</p>
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
              <div className='column is-8 is-offset-2'>
               <div className='columns'>
                <div className='column'><p className='mapTextTitle'>Welcome Ceremony</p><a href='https://www.google.com/maps/dir//Fireside+Pizza+Company/' target='_blank' rel="noreferrer" className='mapDirections'><FontAwesomeIcon icon={faDirections} className="iconFA directions" /><span className='mapLink'>1985 Squaw Valley Rd # 25, Olympic Valley, CA 96146</span></a><iframe title='mapOVC' className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3092.0202692132334!2d-120.2368703846407!3d39.19698817952557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809bd9ec5f912cd9%3A0x503cf512a5f95a8e!2sFireside%20Pizza%20Company!5e0!3m2!1sen!2sus!4v1637450748222!5m2!1sen!2sus"> aria-hidden="false"</iframe></div>
                <div className='column'><p className='mapTextTitle'>Ceremony & Reception</p><a href='https://www.google.com/maps/dir//Olympic+Village+Lodge,+1901+Chamonix+Pl,+Olympic+Valley,+CA+96146' target='_blank' rel="noreferrer" className='mapDirections'><FontAwesomeIcon icon={faDirections} className="iconFA directions" /><span className='mapLink'>1901 Chamonix Pl, Olympic Valley, CA 96146</span></a><iframe title='mapOVC' className='map' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3092.0033952619506!2d-120.2354779!3d39.1973716!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809bd93153d07aa7%3A0x840ba1fced7b1670!2sOlympic%20Village%20Lodge!5e0!3m2!1sen!2sus!4v1637384154321!5m2!1sen!2sus" aria-hidden="false" ></iframe></div>
               </div>
             </div>
             <div className='column is-8 is-offset-2'>
              <div className="columns">
                 <div className="column">
                    <p className="detailsSub">Getting Here</p>
                    <p className="detailsText">The two closest airports are Sacramento and Reno. To get from either airport to Palisades, we recommend renting a car, but public transportation options are available and listed below. Once you are in the North Tahoe area (Truckee, Tahoe City, Olympic Valley, Incline Village), the Tahoe Truckee Area Regional Transit (TART) can be used to get to Palisades and explore the North Lake Area.</p>   
                    <p className="acLink"><a rel="noreferrer" href='https://tahoetruckeetransit.com/' target="_blank">  Tahoe Area Regional Transit</a></p>
                    <br></br>
                    <br></br>
                    <p className="detailsSub2">To Truckee/North Tahoe Area</p>
                    <p className="detailsText">The California Zephyr Amtrak line runs between Reno and Sacramento, with a stop in Truckee, CA, but it does not start directly from the Sacramento or Reno airports. The North Lake Tahoe Express shuttle runs directly from the Reno International Airport to the North Lake Tahoe area. From Sacramento, there is a Greyhound bus line to Truckee. </p>  
                    <p className="acLink"><a rel="noreferrer" href='https://www.amtrak.com/california-zephyr-train' target="_blank">Amtrak - California Zephyr</a></p>
                    <p className="acLink"><a rel="noreferrer" href='https://www.northlaketahoeexpress.com/' target="_blank">North Lake Tahoe Express</a></p>
                    <p className="acLink"><a rel="noreferrer" href='https://www.greyhound.com/en-us/bus-from-sacramento-to-truckee?gclid=Cj0KCQiAi9mPBhCJARIsAHchl1yqzrwmvl4w6Ebbz7WGFrdRwalqtJcep8SG7iPlXbbupi4rauAMdncaApqWEALw_wcB&utm_a=BR&utm_campaign=BRODP_sacramento_ca&utm_content=487423927588&utm_medium=cpc&utm_source=google&utm_term=%2Bgreyhound%20%2Bto%20%2Btruckee&redirecturl=true' target="_blank">Sacramento Greyhound</a></p>
                  </div>
                  <div className="column">
                    <p className="detailsSub">Accomodations</p>
                    <p className="detailsText">There is a discounted rate for rooms in the Village at Palisades Tahoe if you follow the link below. For larger groups there are many vacation house rentals available on Airbnb and Vrbo. If you are not interested in either of those options, there are many hotels at varying prices in Olympic Valley, Truckee, and Tahoe City.</p>
                    <p className="acLink2"><a rel="noreferrer" href='https://book.squawalpine.com/Ecomm/Package/Package/9801138/en-US/?packageid=60460&promocode=RedovianHegeman' target="_blank">Village at Palisades</a></p><p style={{paddingLeft: "20px"}}></p>
                    <p className="acLink2"><a rel="noreferrer" href='https://www.airbnb.com/olympic-valley-ca/stays' target="_blank">Airbnb</a></p>
                    <p className="acLink2"><a rel="noreferrer" href='https://www.vrbo.com/vacation-rentals/usa/california/lake-tahoe-ca/north-shore/squaw-valley' target="_blank">Vrbo</a></p>
                    <br></br>
                    <p className="detailsSub2">COVID Information</p>
                    <p className="detailsText">Unfortunately, it does not appear the pandemic will come to a quick end. For the safety of the Lake Tahoe community and all guests attending, we are requiring that all guests be fully vaccinated and boosted against COVID 19. If there are circumstances where you cannot get vaccinated, please talk to Joseph and Mikhaila. COVID information will likely change between now and October, so please stay up to date with California COVID and travel policies. We will also continue to update this page.</p>
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

            <div className="reg .container.is-fullhd" data-sal="fade-in" data-sal-delay="500" data-sal-easing="ease" data-sal-duration='1000'>
            <div className="container" data-sal="fade-in" data-sal-delay="500" data-sal-easing="ease" data-sal-duration='1000'></div>
             <div className='column is-8 is-offset-2'>
              <div className="columns">
                <div className="column">
                  <p className="regTitle">Registry</p>
                  <p className="regText">While we will love anything on these lists, we understand how much time, money, and effort it will take for many of you to travel for the wedding, so the most important gift to us is the chance to celebrate our day with you. </p>
                  <br></br>
                  <br></br>
                  <a href='https://registry.theknot.com/joseph-hegeman-mikhaila-redovian-october-2022-ca/45414721' target='_blank' rel="noreferrer" className="regButton">THE KNOT</a>
                  <a href='https://www.myregistry.com/wedding-registry/joseph-hegeman-and-mikhaila-redovian-sacramento-ca/3128622/giftlist' target='_blank' rel="noreferrer" className="regButton">MyREGISTRY</a>
                </div>
                <div className="column">
                <p className="regTitle">More Joseph and Mikhaila</p>
                <p className="regText">If you want a little more Mikhaila and Joseph content, we're happy to share more photos and a little bit of our story at the link below.</p>
                <br></br>
                <br></br>
                <br></br>
                <Link to="/StoryPhotos" rel="noreferrer" className="regButton">J & M</Link> 
                </div>
              </div>
             </div>
            </div>
      
            <div className='countdown'>
              <span className='countNumber'>{this.state.days}</span> <span className='countText'>DAYS </span>
              <span className='countNumber'>{this.state.hours}</span> <span className='countText'>HOURS </span>
              <span className='countNumber'>{this.state.minutes}</span> <span className='countText'>MINUTES </span>
              <span className='countNumber'>{this.state.seconds}</span> <span className='countText'>SECONDS </span>
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
