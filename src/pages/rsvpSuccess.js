import React from "react"
import { Link } from "gatsby"

import '../components/rsvpMessage.css'

const Success = () => (
    <div className='containerSuccess .container.is-fullhd columns'>
      <div className="formContainer1 column is-one-third is-offset-one-third">
        <h1>Success!</h1>
        <div className='centerParent'>
          <Link to='/'>
            <button className='formButton1'>RETURN HOME</button>
          </Link>
        </div>
      </div>
    </div>
)

export default Success
