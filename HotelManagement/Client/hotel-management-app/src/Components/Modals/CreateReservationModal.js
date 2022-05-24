import React, { Component } from 'react';
import axios from 'axios';

class CreateReservationModal extends Component {


    constructor(props) {
        super(props);
        this.state = {
            hotels : [],
            rooms: [],
            guests: [],
            room:null,
            guest:null,
            hotel: null
        }
    }

    componentDidMount() {
        const requestOptions = {
            method: "GET",
            mode: "no-cors"
        }
        axios.get('http://localhost:8080/api/rooms', requestOptions)
            .then(response => response.data).then((data) => {
                this.setState({
                    rooms: data
                })
            })
        axios.get('http://localhost:8080/api/hotels', requestOptions)
            .then(response => response.data).then((data) => {
                this.setState({
                    hotels: data
                })
            })
        axios.get('http://localhost:8080/api/guests', requestOptions)
            .then(response => response.data).then((data) => {
                this.setState({
                    guests: data
                })
            })

    }

    changeGuest = (word) => {
        this.setState({
            guest: word
        })
    }

    changeHotel = (word) => {
        this.setState({
            hotel : word
        })
    }

    changeRoom = (word) => {
        this.setState({
            room: word
        })
    }

    saveReservations = (guestName,roomNo) => {
        let theGuest = this.state.guests.filter((item) => item.name == guestName)[0];
        let theRoom = this.state.rooms.filter((item) => item.room_no == roomNo)[0];
        console.log(theGuest,"------",theRoom);
        this.props.save(theGuest,theRoom);
        this.props.close();
    }


    render() {
        return (
            <div className="modal is-active">
                <div className="modal-background"></div>
                <div className="modal-card">
                    <header className="modal-card-head">
                        <p className="modal-card-title">Create Reservation</p>
                        <button className="delete has-text-primary" aria-label="close" onClick={() => this.props.close()} style={{ backgroundColor: "darkred" }}></button>
                    </header>
                    <section className="modal-card-body">
                        <div className="field">
                            <label className="label">Guest</label>
                            <div className="control is-expanded">
                                <div className="select is-fullwidth is-rounded">
                                    <select name="guest" onChange={(e) => this.changeGuest(e.target.value)}>
                                        {this.state.guests.map((item, i) => {
                                            return (
                                                <option value={item.name} key={i + 1}>{item.name}</option>
                                            )
                                        })}
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Hotel</label>
                            <div className="control is-expanded">
                                <div className="select is-fullwidth is-rounded">
                                    <select name="hotel" onChange={(e) => this.changeHotel(e.target.value)}>
                                        {this.state.hotels.map((item, i) => {
                                            return (
                                                <option value={item.hotel_name} key={i + 1}>{item.hotel_name}</option>
                                            )
                                        })}
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Room</label>
                            <div className="control is-expanded">
                                <div className="select is-fullwidth is-rounded">
                                    <select name="room" onChange={(e) => this.changeRoom(e.target.value)}>
                                        {
                                        this.state.rooms.filter((item) => item.hotel.hotel_name == this.state.hotel).map((item, i) => {
                                            return (
                                                <option value={item.room_no} key={i + 1}>{item.room_no}</option>
                                            )
                                        })}
                                    </select>
                                </div>
                            </div>
                        </div>

                    </section>
                    <footer className="modal-card-foot">
                        <button className="button is-info" onClick={() => this.saveReservations(this.state.guest,this.state.room)}>Save changes</button>
                        <button className="button" onClick={() => this.props.close()}>Cancel</button>
                    </footer>
                </div>
            </div>
        );
    }
}

export default CreateReservationModal;