import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"

import Image4 from '../components/mtnImg'  
import Image2 from '../components/image2' 
import Image3 from '../components/image3' 
import Red from '../components/red' 
import Engage from '../components/engage' 
import SEO from "../components/seo"
import "../components/StoryPhotos.css"
import "../components/mystyles.scss"
import posed from "react-pose"
import BackgroundImage from 'gatsby-background-image'
import { graphql, Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faCamera,
} from "@fortawesome/free-solid-svg-icons"
import Final from "../components/final"

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
                
                <div className="about .container.is-fullhd" data-sal="fade-in" data-sal-delay="300" data-sal-easing="ease" data-sal-duration='1000'>
                  <div className='column is-8 is-offset-2'>
                  <div className="ourStory" >
                    <p className="details">Our Story</p>
                    <p className="detailsText">Thanks for checking out this page! We met in the English Master's program in the University of Colorado at Boulder. We met Fall 2018, but began dating Summer 2019.</p>
                  </div>
                  </div>
                </div>
                <div className="picframe">
                  <Image2 className="picframe"></Image2>
                </div> 
                <div className='column is-8 is-offset-2'>
                  <p className="detailsText"> Over the summer, we trained for a marathon together (Mikhaila only did a 3/4 marathon), adn shared a love of outdoor adventure activities, books, and a shared visino of partnership idk</p>
                </div>
                <div className="picframe">
                  <Image3></Image3>
                </div> 
                <div className='column is-8 is-offset-2'>
                  <p className="detailsText">Does Mikhaila love him? I love him awful</p>
                </div>
                <div className="picframe">
                  <Staticimage className="picframe"
                  src="../images/red.jpg">
                  </Staticimage>
                </div>
                <div className='column is-8 is-offset-2'>
                  <p className="detailsText">More filler text</p>
                </div>
                <div className='picframe'>
                  <Engage></Engage>
                </div>
                <div className='column is-8 is-offset-4'>
                  <p className="detailsText">We'll see you in Tahoe!</p>
                </div>
                <div className="picframe">
                <Final></Final>
                </div>
                <br></br>
                <div className="rsvp .container.is-fullhd" data-sal="fade-in" data-sal-delay="300" data-sal-easing="ease" data-sal-duration='1000'>
                  <Link to='/' className='rsvpButton'>Return Home</Link>
                </div>
                <div className="countdown .container.is-fullhd">
                  <br></br>
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
