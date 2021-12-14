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
  faCamera,
} from "@fortawesome/free-solid-svg-icons"

const Page = posed.div({
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
})

class StoryPhotos extends React.Component {
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
            <div className="container">
               </div>
                <div className="mtn .container.is-fullhd">
                  
                  <div className="columns" data-sal="fade-in" data-sal-delay="500" data-sal-easing="ease" data-sal-duration='1000'>
                    
                    <div className='column is-one-quarter is-offset-one-quarter'>
                    <div className="quote">
                    What we find in a soul mate is not something wild to tame, but something wild to run with.
                    </div>
                    </div>
                    
                    <div className="column"><Image4></Image4></div>
                  </div>
                  
                </div>
                <div data-sal="fade-in" data-sal-delay="300" data-sal-easing="ease" data-sal-duration='1000'>
                <div className="about .container.is-fullhd">
                  <div className="ourStory" >
                    <p className="details">About Us</p>
                    <p className="detailsText">Thanks for checking out this page! We met in the English Master's program in the University of Colorado at Boulder. We met Fall 2018, but began dating Summer 2019.</p>
                  </div>
                  <div>
                    
                  </div>
                </div>
                </div>  
            <div className="info .container.is-fullhd">
            <div className="container" data-sal="fade-in" data-sal-delay="500" data-sal-easing="ease" data-sal-duration='1000'>
                <p className="details">Engagement Photos</p>
    
              </div>   
              </div>   
             <div className='column is-8 is-offset-2'>
              <div className="columns">
                 <div className="column">
                    <p className="detailsSub">Getting Here</p>
                    <p className="detailsText">The two closest airports are Sacramento and Reno. To get from either airport to Palisades, we recommend renting a car, but public transportation options are available and listed below. Once you are in the North Tahoe area (Truckee, Tahoe City, Olympic Valley, Incline Village), the Tahoe Truckee Area Regional Transit (TART) can be used to get to Palisades and explore the North Lake Area.</p>   
                    <p className="acLink"><a rel="noreferrer" href='https://tahoetruckeetransit.com/' target="_blank">  Tahoe Area Regional Transit</a></p>
                    <p className="detailsSub2">To Truckee/North Tahoe Area</p>
                    <p className="detailsText">The California Zephyr Amtrak line runs between Reno and Sacramento, with a stop in Truckee, CA, but it does not start directly from the Sacramento or Reno airports. The North Lake Tahoe Express shuttle runs directly from the Reno International Airport to the North Lake Tahoe area.</p>  
                    <p className="acLink"><a rel="noreferrer" href='https://www.amtrak.com/california-zephyr-train' target="_blank">Amtrak - California Zephyr</a></p>
                    <p className="acLink"><a rel="noreferrer" href='https://www.northlaketahoeexpress.com/' target="_blank">North Lake Tahoe Express</a></p>
                  </div>
                  <div className="column">
                    <p className="detailsSub">Accomodations</p>
                    <p className="detailsText">There is a discounted rate for rooms in the Village at Palisades Tahoe. Please mention the Redovian-Hegeman wedding to receive the discount. If you are not interested in staying at the Palisades lodge, there are many, many hotels in Olympic Valley, Truckee, Tahoe City, and the rest of the North Tahoe Area. For larger groups, there are also many vacation house rentals available on Airbnb and Vrbo.</p>
                    <br></br>
                    <br></br>
                    <p className="acLink"><a rel="noreferrer" href='https://www.palisadestahoe.com/plan-your-visit/lodging' target="_blank">Village at Palisades</a></p><p style={{paddingLeft: "20px"}}></p>
                    <p className="acLink"><a rel="noreferrer" href='https://www.airbnb.com/olympic-valley-ca/stays' target="_blank">Airbnb</a></p>
                    <p className="acLink"><a rel="noreferrer" href='https://www.vrbo.com/vacation-rentals/usa/california/lake-tahoe-ca/north-shore/squaw-valley' target="_blank">Vrbo</a></p>
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

            <div className="reg .container.is-fullhd">
            <div className="container" data-sal="fade-in"></div>
             <div className='column is-8 is-offset-2' data-sal-delay="500" data-sal-easing="ease" data-sal-duration='1000'>
              <div className="columns">
                <div className="column">
                  <p className="regTitle">Registry</p>
                  <p className="regText">While we will love anything on these lists, the most important gift to us is the chance to celebrate our day with you. </p>
                  <br></br>
                  <br></br>
                  <a href='https://www.crateandbarrel.com/gift-registry/danielle-evans-and-tom-settle/r6199513' target='_blank' rel="noreferrer" className="regButton">CRATE & BARREL</a>
                  <a href='https://www.target.com/gift-registry/giftgiver?registryId=66cf6664801247aa8e1f12ec5e5d9bb3&lnk=registry_custom_url' target='_blank' rel="noreferrer" className="regButton">TARGET</a>
                  <a href='https://registry.theknot.com/danielle-evans-tom-settle-august-2021-in/42170338' target='_blank' rel="noreferrer" className="regButton">THE KNOT</a>
                </div>
                <div className="column">
                <p className="regTitle">More Joseph and Mikhaila</p>
                <p className="regText">If you want a little more Mikhaila and Joseph content, we're happy to share our meet-cute and more photos at the link below.</p>
                <br></br>
                <br></br>
                <a href='https://josephandmikhaila.com/StoryPhotos' rel="noreferrer" className="regButton">J & M</a>
                </div>
              </div>
             </div>
            </div>
            <div className="container rsvp">
                  <a href='https://josephandmikhaila.com' className='rsvpButton'>Return Home</a>
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

export default StoryPhotos

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