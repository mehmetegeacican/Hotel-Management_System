import axios from 'axios';
import React, { Component } from 'react';
import CreateReservationModal from '../Modals/CreateReservationModal';
import DeleteModal from '../Modals/DeleteModal';

class ReservationsTable extends Component {

    constructor() {
        super();
        this.state = {
            reservations: [],
            createReservationModal: null,
            deleteModal: null
        };
    }

    componentDidMount() {
        const requestOptions = {
            method: "GET",
            mode: "no-cors"
        }
        axios.get('http://localhost:8080/api/reservations', requestOptions)
            .then(response => response.data).then((data) => {
                this.setState({
                    reservations: data
                })
            })
    }

    closeModals = () => {
        // console.log("Modal has been closed");
        this.setState({
            createReservationModal: null,
            deleteModal: null
        })
    }

    openDeleteModal = (id) => {
        // console.log("Delete Modal has been opened");
        this.setState({
            deleteModal: <DeleteModal
                close={this.closeModals}
                delete={this.deleteReservations}
                id={id}
            />
        })
    }

    openCreateModal = () => {
        this.setState({
            createReservationModal : <CreateReservationModal
                                        close = {this.closeModals}
                                        save = {this.saveReservations}
                                    />
        })
    }

    deleteReservations = (id) => {
        const requestOptions = {
            method: "DELETE",
            mode: "no-cors",
        }
        axios.delete(`http://localhost:8080/api/reservations/${id}`, requestOptions)
            .then(response => response.data).then((data) => {
                this.componentDidMount();
                this.closeModals();
            })
    }

    saveReservations = (guest,room) => {
        if(guest && room){
            const requestOptions = {
                method: "POST",
                mode: "no-cors",
                body: {
                    "id": this.state.reservations.length + 1,
                    "guest": guest,
                    "room": room
                }
            }
            axios.post('http://localhost:8080/api/reservations', requestOptions.body)
                .then(response => response.data).then((data) => {
                    this.componentDidMount();
                })
        }
    }

    createTableData = () => {
        return this.state.reservations.map((item, i) => {
            return (
                <tr key={i + 1}>
                    <td>{item.guest.id}</td>
                    <td>{item.guest.name}</td>
                    <td>{item.guest.email}</td>
                    <td> {item.room.hotel.hotel_name} </td>
                    <td> {item.room.room_no}</td>
                    <td><a className="button is-small is-link" onClick={() => console.log("aaa")}>Inspect</a></td>
                    <td><a className="button is-small is-danger" onClick={() => this.openDeleteModal(item.id)}>Delete</a></td>
                </tr>
            )
        })
    }
    render() {
        return (
            <section>
                <section className="hero is-info welcome is-small">
                    <div className="hero-body is-boxed">
                        <div className="container">
                            <h1 className="title">
                                Reservations
                            </h1>
                            <h2 className="subtitle">
                                You can view the reservations and get information from here
                            </h2>
                        </div>
                    </div>
                </section>

                <section className="info-tiles">
                    <div className="tile is-ancestor has-text-centered">
                        <div className="tile is-parent">
                            <article className="tile is-child box">
                                <p className="title">{this.state.reservations.length}</p>
                                <p className="subtitle">Reservations</p>
                            </article>
                        </div>
                        <div className="tile is-parent">
                            <article className="tile is-child box">
                                <p className="title">Add New Reservation</p>
                                <p className="subtitle"><button className="button is-link" onClick={() => this.openCreateModal()}>Add Icon</button></p>
                            </article>
                        </div>
                    </div>
                </section>

                <section className='hero is-halfheight'>
                    <div className='hero-header '>
                        <div className="card events-card">
                            <header className="card-header">
                                <p className="card-header-title">Guests</p>
                            </header>
                            <div>
                                <input className="input is-link" type="text" placeholder="Search Guests"></input>
                            </div>

                            <div className="card-table">
                                <div className="content">
                                    <table className="table is-fullwidth is-striped">
                                        <tbody>
                                            <tr>
                                                <td>Guest Id</td>
                                                <td>Guest Name</td>
                                                <td>Guest Email</td>
                                                <td>Guest Hotel</td>
                                                <td>Guest Room </td>
                                                <td>Inspect</td>
                                                <td>Delete</td>
                                            </tr>
                                            {this.createTableData()}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    {this.state.deleteModal}
                    {this.state.createReservationModal}
                </section>

            </section>

        );
    }
}

export default ReservationsTable;
