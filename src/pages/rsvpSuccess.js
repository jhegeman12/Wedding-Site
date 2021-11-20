import React from "react"
import { Link } from "gatsby"

import '../components/rsvpMessage.css'

const Success = () => (
    <div className='containerSuccess .container.is-fullhd columns'>
      <div className="formContainer1 column is-one-third is-offset-one-third">
        <h1 className='header'>Thank you so much!</h1> 
        <br />
        <h1>We are so excited to share our big day with you. Having you there is going to make it all the more special and we cannot wait!</h1> 
        <br />
        <h1 className="signature">Love,
        Joseph & Mikhaila </h1>
        <br />
        <iframe src="https://giphy.com/embed/vTfFCC3rSfKco" width="100%" height="100%" title="success" frameBorder="0" class="giphy-embed"></iframe>
        <div className='centerParent'>
          <Link to='/'>
            <button className='formButton1'>RETURN HOME</button>
          </Link>
        </div>
      </div>
    </div>
)

export default Success
