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
                    <p className="detailsText">Thanks for checking out this page! We met in the English Master's program at the University of Colorado - Boulder. We met Fall 2018 in a Romantic poetry class, and began dating in late Spring 2019. As you can guess, we both love books and stories, but we have since bonded over so much more.</p>
                  </div>
                  </div>
                </div>
                <div className="picframe">
                  <Image2 alt="Cute engagement photo">
                  <div className="picframe">
                  </div>
                  </Image2>
                </div> 
                <div className='column is-8 is-offset-2'>
                  <p className="detailsText"> Over the summer of 2019, we spent a lot of time together before Mikhaila started working for at CU. We trained for a marathon together (Mikhaila only did a 3/4 marathon), adn shared a love of outdoor adventure activities, books, and a shared vision of partnership idk</p>
                </div>
                <div className="picframe">
                <Red className="picframe"></Red>
                </div> 
                <div className='column is-8 is-offset-2'>
                  <p className="detailsText">In March 2020, as COVID began to shut everything down and Joseph finished up his Master's, Mikhaila was accepted into the Ph. D program at UC - Davis, just outside of Sacramento. At that point, JOseph's Fulbright plans were up in the air, but we both knew what our relationship was, and how much we meant to each other, so we moved to Davis together. We got to California in the midst of a recession, raging wildfires, and of course, COVID lockdowns. But neither of us has regretted the time we've been able to spend together, and in between the apocalyptic smoky air and hours of Netflix, we were able to string together many wonderful moments engaging with each other and the majestic world in the Sierras.</p>
                </div>
                <div className="picframe">
                  <Image3></Image3>
                </div>
                <div className='column is-8 is-offset-2'>
                  <p className="detailsText">For the proposal, Joseph made a bit of a mess of it (although Mikhaila said yes so not that bad). Joseph hadn'tt planned on proposing on Valentine's (so cliche), and even left the ring at home, but the moment felt right during a great day skiing. At the top of Emigrant Gat Palisades, while the sun set on a powder day, Joseph clipped out of his skis, got down on one knee, and asked Mikhaila to be partners forever, and she said yes. When we got home to Davis, Joseph asked again, but with a ring, and Mikhaila said yes again. Since then, we've moved to Sacramento, but Palisades and Tahoe remain close to our hearts. We know many of you will be traveling a long way to attend, and from the bottom of our hearts we appreciate all the time, money, and effort that you will put into attending. We're excited to excited to share with you a place that has so much meaning to us on the day we join our lives in marriage. Because Lake Tahoe means so much us, we would like to acknowledge that our wedding is on land belonging to the Wašišiw (Washo) people. We advocate for their restoration as the caretakers of this land. We ask that all of our guests show respect and care to the Lake Tahoe environment, and we ask that each guest reflect on what they can do to engage with, honor, protect, and celebrate the lives of Indigenous people. </p>
                </div>
                <div className='picframe'>
                  <Engage></Engage>
                </div>
                <div className='column is-8 is-offset-5'>
                  <p className="endText">We'll see you in Tahoe!</p>
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
