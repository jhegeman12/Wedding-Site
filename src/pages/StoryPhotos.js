import React from "react"

import Image from "../components/image"
import '../components/rsvpMessage.css'
import Layout from "../components/layout"

const StoryPhotosPage = () => (
    <div className='containerSuccess .container.is-fullhd columns'>
        <div className="formContainer1 column is-one-third is-offset-one-third">
            <h1 className="header">We will miss you!</h1>
            <br />
            <h1>In the meantime, stay safe and healthy! We hope we will get to see you soon :)</h1>
            <br />
            <h1 className='signature'>Love,
            Joseph & Mikhaila</h1>
            <div className='centerParent'>
                <Link to='IndexPage'>
                    <button className='formButton1'>RETURN HOME</button>
                </Link>
            </div>
        </div>
    </div>
)

export default StoryPhotosPage