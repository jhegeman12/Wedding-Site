import React from "react"
import axios from "axios"
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { faThList } from "@fortawesome/free-solid-svg-icons";
import { Button, TableFooter } from "@material-ui/core";

class RSVPResponses extends React.Component{

    state = {
        data: []
    }
    
    componentDidMount() {
        axios.get("http://localhost:3000/rsvp")
        .then(res => {
            this.setState({
                "data": res.data
            })
        })
    }

    getAttending = () => {
        axios.get("http://localhost:3000/rsvp/attending")
        .then(res => {
            this.setState({
                "data": res.data
            })
        })
    }

    getDecline = () => {
        axios.get("http://localhost:3000/rsvp/decline")
        .then(res => {
            this.setState({
                "data": res.data
            })
        })
    }

    getNoResponse = () => {
        axios.get("http://localhost:3000/rsvp/no-response")
        .then(res => {
            this.setState({
                "data": res.data
            })
        })
    }
  
    render() {

        const columns = [
            { id: 'firstName', label: 'First Name', minWidth: 170 },
            { id: 'party', label: 'Party', minWidth: 100 },
            {
              id: 'attending',
              label: 'Attending',
              minWidth: 170,
            },
            {
              id: 'meal',
              label: 'Meal',
              minWidth: 170,
            },
        ];

        return (
            <Paper >
                <Button onClick={() => this.getAttending()} style={{margin: "10px"}} variant="contained" color="secondary">Attending</Button>
                <Button onClick={() => this.getDecline()} variant="contained" color="secondary">Decline</Button>
                <Button onClick={() => this.getNoResponse()} style={{margin: "10px"}} variant="contained" color="secondary">No Response</Button>
                <TableContainer >
                    <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>{"Total Count: " + this.state.data.length}</TableRow>
                        <TableRow>
                        {columns.map((column) => (
                            <TableCell
                            key={column.id}
                            align={column.align}
                            style={{ minWidth: column.minWidth }}
                            >
                            {column.label}
                            </TableCell>
                        ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.data.map((row) => {
                        return (
                            <TableRow hover role="checkbox" tabIndex={-1} key={row._id}>
                                <TableCell>{row.firstName + " " + row.lastName}</TableCell>
                                <TableCell>{row.party}</TableCell>
                                <TableCell>{row.attending ? "Yes" : row.declineChecked ? "No" : "No Response"}</TableCell>
                                <TableCell>{row.meal}</TableCell>
                            </TableRow>
                        );
                        })}
                    </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        )
    }
}

export default RSVPResponses
