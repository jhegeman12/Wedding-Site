import React from "react"
import axios from "axios"
import '../components/rsvp.css'
import { faThList } from "@fortawesome/free-solid-svg-icons"

class RSVP extends React.Component{

    state = {
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
                this.setState({"body": response.data})
            })
            .catch(error => {
                console.log(error);
            })
    }
  
    render() {
        return (
            <div className='rsvpPage'>
                <form onSubmit={this.getGuest}>
                    <input onChange={this.handleFirstNameChange} value={this.state.firstName}></input>
                    <input onChange={this.handleLastNameChange} value={this.state.lastName}></input>
                    <input type="submit" value="Submit" />
                </form>
                <div>{this.state.body.map((guest, i) => {
                    return(
                    <h1 key={i}>{guest.firstName}</h1>
                    )
                })}</div>
            </div>
        )
    }
}

export default RSVP
