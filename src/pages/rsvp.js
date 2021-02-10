import React from "react"
import axios from "axios"
import '../components/rsvp.css'
import { faThList } from "@fortawesome/free-solid-svg-icons"

class RSVP extends React.Component{

    state = {
        party: "",
        body: [],
        firstName: "", 
        lastName: ""
    }
    
    handleFirstNameChange = (e) => {
        this.setState({firstName: e.target.value})
    }

    handleLastNameChange = (e) => {
        this.setState({lastName: e.target.value})
    }

    getGuest = (e) => {
            e.preventDefault()
            axios.get(`http://localhost:3000/rsvp/${this.state.firstName}/${this.state.lastName}`)
            .then(response => {
                this.setState({"party": response.data[0].party, "body": response.data})
            })
            .catch(error => {
                console.log(error);
            })
    }
  
    render() {
        return (
            <div className='rsvpPage .container.is-fullhd columns'>
                <div className="formContainer column is-one-third is-offset-one-third">
                <form onSubmit={this.getGuest} className='formRsvp'>
                    <input className='rsvpInput' placeholder="First Name" onChange={this.handleFirstNameChange} value={this.state.firstName}></input>
                    <input className='rsvpInput' placeholder="Last Name" onChange={this.handleLastNameChange} value={this.state.lastName}></input>
                    <button className='formButton' type="submit" value="Submit">Search</button>
                </form>
                <div className='searchResult'>
                    <p className="party">{this.state.party ? "Party: " + this.state.party : ""}</p>
                    {this.state.body.map((guest, i) => {
                    return(
                        <div className='guestBox'>
                            <span className='firstName' key={i}>{guest.firstName}</span>
                            <span className='lastName' key={i}> {guest.lastName}</span>
        
                        </div>
                    )
                })}
                </div>
                </div>
            </div>
        )
    }
}

export default RSVP
