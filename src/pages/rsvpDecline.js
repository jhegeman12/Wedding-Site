import { Link } from "gatsby"
import React from "react"

import '../components/rsvpMessage.css'

const Decline = () => (
    <div className='containerSuccess .container.is-fullhd columns'>
        <div className="formContainer1 column is-one-third is-offset-one-third">
            <h1>Sad!</h1>
            <div className='centerParent'>
                <Link to='/'>
                    <button className='formButton1'>RETURN HOME</button>
                </Link>
            </div>
        </div>
    </div>
)

export default Decline
