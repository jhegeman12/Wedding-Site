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
            axios.get(`http://localhost:3000/rsvp/${this.state.firstName.toLowerCase()}/${this.state.lastName.toLowerCase()}`)
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
                    <p>Please enter your first and last name as shown on the invite and we will pull up your party name.</p>
                <form onSubmit={this.getGuest} className='formRsvp'>
                    <div className='columns'>
                    <input className='rsvpInput column' placeholder="FIRST NAME" onChange={this.handleFirstNameChange} value={this.state.firstName}></input>
                    <input className='rsvpInput2 column' placeholder="LAST NAME" onChange={this.handleLastNameChange} value={this.state.lastName}></input>
                    </div>
                    <button className='formButton' type="submit" value="Submit">SEARCH</button>
                </form>
                <div className='searchResult'>
                    <p className="party">{this.state.party ? "Party: " + this.state.party : ""}</p>
                    {this.state.body.map((guest, i) => {
                    return(
                        <div className='guestBox'>
                            <span className='firstName' key={i}>{guest.firstName.toUpperCase()}</span>
                            <span className='lastName' key={i}> {guest.lastName.toUpperCase()}</span>
        
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
