import React from "react"
import axios from "axios"
import '../components/rsvp.css'
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import { RepeatOneSharp, ThreeSixtySharp } from "@material-ui/icons";
import { faThList } from "@fortawesome/free-solid-svg-icons";

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
        this.setState(state => {
            const body = state.body.map((guest, j) => {
                if (j === i) {
                    const newGuest = {
                        _id: guest._id,
                        attending: !guest.attending,
                        date: guest.date,
                        firstName: guest.firstName,
                        lastName: guest.lastName,
                        meal: guest.meal,
                        party: guest.party,
                        veggieChecked: guest.veggieChecked,
                        chickenChecked: guest.chickenChecked
                    }
                    return newGuest
                      
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
                            chickenChecked: false
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
                            chickenChecked: guest.chickenChecked
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
                            chickenChecked: !guest.chickenChecked
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
                            chickenChecked: !guest.chickenChecked
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
        for (let i = 0; i < this.state.body.length; i++) {
            axios.post(`http://localhost:3000/rsvp/`, {
                _id: this.state.body[i]._id,
                attending: this.state.body[i].attending,
                meal: this.state.body[i].meal,
                veggieChecked: this.state.body[i].veggieChecked,
                chickenChecked: this.state.body[i].chickenChecked
            })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            })
        }
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
                            <div key={i} className='guestBox'>
                                <span className='firstName'>{guest.firstName.toUpperCase()}</span>
                                <span className='lastName'> {guest.lastName.toUpperCase()}</span>
                                
                                <FormControlLabel className='attending' control={<Checkbox checked={this.state.body[i].attending} onClick={() => this.handleAttendanceChange(i)} icon={<FavoriteBorder />} checkedIcon={<Favorite />} ></Checkbox>} label="ATTENDING?"></FormControlLabel>
                                <FormGroup className='group'>
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
                        )
                })}
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
