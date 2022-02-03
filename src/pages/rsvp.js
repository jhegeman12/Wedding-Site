import React from "react"
import axios from "axios"
import { navigate } from "gatsby";
import '../components/rsvp.css'
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { FormLabel } from "@material-ui/core";

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

    handleAttendanceChange = (i) => {
        document.getElementById(`rsvp${i}`).style.display = 'block'
        this.setState(state => {
            const body = state.body.map((guest, j) => {
                if (j === i) {
                    if (guest.declineChecked) {
                        const newGuest = {
                            _id: guest._id,
                            attending: true,
                            date: guest.date,
                            firstName: guest.firstName,
                            lastName: guest.lastName,
                            meal: guest.meal,
                            party: guest.party,
                            veggieChecked: guest.veggieChecked,
                            chickenChecked: guest.chickenChecked,
                            attendingChecked: !guest.attendingChecked,
                            declineChecked: false
                        }
                        return newGuest
                    } else {
                        const newGuest = {
                            _id: guest._id,
                            attending: true,
                            date: guest.date,
                            firstName: guest.firstName,
                            lastName: guest.lastName,
                            meal: guest.meal,
                            party: guest.party,
                            veggieChecked: guest.veggieChecked,
                            chickenChecked: guest.chickenChecked,
                            attendingChecked: !guest.attendingChecked,
                            declineChecked: guest.declineChecked
                        }
                        return newGuest
                    }
                    
                      
                } else {
                    return guest
                }
            })

            return {
                body
            }
        })
    }

    handleDeclineChange = (i) => {
        document.getElementById(`rsvp${i}`).style.display = 'none'
        this.setState(state => {
            const body = state.body.map((guest, j) => {
                if (j === i) {
                    if (guest.attendingChecked) {
                        const newGuest = {
                            _id: guest._id,
                            attending: false,
                            date: guest.date,
                            firstName: guest.firstName,
                            lastName: guest.lastName,
                            meal: guest.meal,
                            party: guest.party,
                            veggieChecked: guest.veggieChecked,
                            chickenChecked: guest.chickenChecked,
                            attendingChecked: false,
                            declineChecked: !guest.declineChecked
                        }
                        return newGuest
                    } else {
                        const newGuest = {
                            _id: guest._id,
                            attending: false,
                            date: guest.date,
                            firstName: guest.firstName,
                            lastName: guest.lastName,
                            meal: guest.meal,
                            party: guest.party,
                            veggieChecked: guest.veggieChecked,
                            chickenChecked: guest.chickenChecked,
                            attendingChecked: guest.attendingChecked,
                            declineChecked: !guest.declineChecked
                        }
                        return newGuest
                    }
                    
                      
                } else {
                    return guest
                }
            })

            return {
                body
            }
        })
    }

    handleVeggieChange = (i, food) => {
        this.setState(state => {
            const body = state.body.map((guest, j) => {
                if (j === i) {
                    if (guest.chickenChecked) {
                        const newGuest = {
                            _id: guest._id,
                            attending: guest.attending,
                            date: guest.date,
                            firstName: guest.firstName,
                            lastName: guest.lastName,
                            meal: food,
                            party: guest.party,
                            veggieChecked: !guest.veggieChecked,
                            chickenChecked: false,
                            attendingChecked: guest.attendingChecked,
                            declineChecked: guest.declineChecked
                        }
                        return newGuest
                    } else {
                        const newGuest = {
                            _id: guest._id,
                            attending: guest.attending,
                            date: guest.date,
                            firstName: guest.firstName,
                            lastName: guest.lastName,
                            meal: food,
                            party: guest.party,
                            veggieChecked: !guest.veggieChecked,
                            chickenChecked: guest.chickenChecked,
                            attendingChecked: guest.attendingChecked,
                            declineChecked: guest.declineChecked
                        }
                        return newGuest
                    }
                    
                      
                } else {
                    return guest
                }
            })

            return {
                body
            }
        })
    }

    handleChickenChange = (i, food) => {
        this.setState(state => {
            const body = state.body.map((guest, j) => {
                if (j === i) {
                    if (guest.veggieChecked) {
                        const newGuest = {
                            _id: guest._id,
                            attending: guest.attending,
                            date: guest.date,
                            firstName: guest.firstName,
                            lastName: guest.lastName,
                            meal: food,
                            party: guest.party,
                            veggieChecked: false,
                            chickenChecked: !guest.chickenChecked,
                            attendingChecked: guest.attendingChecked,
                            declineChecked: guest.declineChecked
                        }
                        return newGuest
                    } else {
                        const newGuest = {
                            _id: guest._id,
                            attending: guest.attending,
                            date: guest.date,
                            firstName: guest.firstName,
                            lastName: guest.lastName,
                            meal: food,
                            party: guest.party,
                            veggieChecked: guest.veggieChecked,
                            chickenChecked: !guest.chickenChecked,
                            attendingChecked: guest.attendingChecked,
                            declineChecked: guest.declineChecked
                        }
                        return newGuest
                    }
                    
                      
                } else {
                    return guest
                }
            })

            return {
                body
            }
        })
    }

    submitForm = (e) => {
        document.getElementById('searchError2').style.display = "none"

        for (let i = 0; i < this.state.body.length; i++) {
            if ((this.state.body[i].attendingChecked && !this.state.body[i].veggieChecked && !this.state.body[i].chickenChecked) || (!this.state.body[i].attendingChecked && !this.state.body[i].declineChecked)) {
                document.getElementById('searchError2').style.display = "block"
                break
            } else {
                console.log(this.state.body);
                axios.post(`https://tomanddanielle-rsvp.herokuapp.com/rsvp/`, {
                    firstName: this.state.body[i].firstName,
                    lastName: this.state.body[i].lastName,
                    attending: this.state.body[i].attending,
                    meal: this.state.body[i].meal,
                    date: Date.now(),
                    party: this.state.body[i].party,
                    veggieChecked: this.state.body[i].veggieChecked,
                    chickenChecked: this.state.body[i].chickenChecked,
                    attendingChecked: this.state.body[i].attendingChecked,
                    declineChecked: this.state.body[i].declineChecked
                })
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                })

            }
            if (i === this.state.body.length - 1) {
                let attending = 0
                for (let i = 0; i < this.state.body.length; i ++) {
                    if(this.state.body[i].attending) {
                        attending++
                    }
                }

                if (attending === this.state.body.length) {
                    navigate('/rsvpSuccess')
                } else if (attending > 0) {
                    navigate('/rsvpSuccess')
                } else {
                    navigate('/rsvpDecline')
                }
            }
        }
    }

    getGuest = (e) => {
            e.preventDefault()
            document.getElementById('searchError').style.display = 'none'

            axios.get(`https://tomanddanielle-rsvp.herokuapp.com/rsvp/${this.state.firstName.toLowerCase()}/${this.state.lastName.toLowerCase()}`)
            .then(response => {
                this.setState({"party": response.data[0].party, "body": response.data})
            })
            .catch(error => {
                console.log(error);
                document.getElementById('searchError').style.display = 'block'
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
                    <p id="searchError">Whoops! Can't find your name. Make sure it is spelled exactly the same as the invite!</p>
                    <button className='formButton' type="submit" value="Submit">SEARCH</button>
                </form>
                <div className='searchResult'>
                    <p className="party">{this.state.party ? this.state.party + " (Party of " + this.state.body.length + ")" : ""}</p>
                    {this.state.body.map((guest, i) => {

                        return(
                            <div key={i} className='guestBox'>
                                <p>
                                    <span className='firstName'>{guest.firstName.toUpperCase()}</span>
                                    <span className='lastName'> {guest.lastName.toUpperCase()}</span>
                                </p>
                                
                                {/* <FormControlLabel className='attending' control={<Checkbox checked={this.state.body[i].attending} onClick={() => this.handleAttendanceChange(i)} icon={<FavoriteBorder />} checkedIcon={<Favorite />} ></Checkbox>} label="ATTENDING?"></FormControlLabel> */}
                                
                                <div className="group">
                                    <FormLabel>RSVP</FormLabel>
                                    <FormGroup>
                                        <FormControlLabel
                                            control={<Checkbox name="attending" checked={this.state.body[i].attendingChecked} onChange={() => this.handleAttendanceChange(i)} />}
                                            label="Attending"
                                        />
                                        <FormControlLabel
                                            control={<Checkbox name="decline" checked={this.state.body[i].declineChecked} onChange={() => this.handleDeclineChange(i)} />}
                                            label="Regretfully Declines"
                                        />
                                    </FormGroup>
                                </div>
                                <div className="group2" id={"rsvp" + i} style={{display: this.state.body[i].attendingChecked ? "block" : "none"}}>
                                    <FormLabel>Dinner Option</FormLabel>
                                    <FormGroup>
                                        <FormControlLabel
                                            control={<Checkbox name="veggie" checked={this.state.body[i].veggieChecked} onChange={() => this.handleVeggieChange(i, "veggie")} />}
                                            label="Veggie"
                                        />
                                        <FormControlLabel
                                            control={<Checkbox name="chicken" checked={this.state.body[i].chickenChecked} onChange={() => this.handleChickenChange(i, "chicken")} />}
                                            label="Chicken"
                                        />
                                    </FormGroup>
                                </div>
                                <div className="group2" id={"rsvp" + i} style={{display: this.state.body[i].attendingChecked ? "block" : "none"}}>
                                    <p>Feel free to enter a quote about love you'd like to share</p>
                                    <input className='rsvpInput3 column' placeholder="If music be the food of love, play on"></input>
                                </div>
                            </div>
                        )
                })}
                <p id="searchError2">Please make each person in the party has an RSVP and a meal checked!</p>
                <div className={this.state.party ? 'submitGroup' : 'none'}>
                    <button onClick={() => this.submitForm()} className='formButtonSubmit' type="submit" value="Submit">SUBMIT</button>
                </div>
                </div>
                </div>
            </div>
            )
    }
}

export default RSVP
