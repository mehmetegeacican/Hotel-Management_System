import React, { Component } from 'react';
import axios from 'axios';

class RoomTable extends Component {
    constructor() {
        super();
        this.state = {
            rooms: []
        };
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
    }

    createTableData = () => {
        return this.state.rooms.map((item, i) => {
            return (
                <tr key={i + 1}>
                    <td>{item.id}</td>
                    <td>{item.hotel.hotel_name}</td>
                    <td>{item.room_no}</td>
                    <td>{item.type}</td>
                    <td><a className="button is-small is-info" onClick={() => this.getRooms()}>Inspect</a></td>
                </tr>
            )
        })
    }
    getRooms = () => {
        console.log(this.state.rooms);
    }

    render() {
        return (
            <section>

                <section className="hero is-link welcome is-small">
                    <div className="hero-body is-boxed">
                        <div className="container">
                            <h1 className="title">
                                Rooms
                            </h1>
                            <h2 className="subtitle">
                                You can view the rooms and get information from here
                            </h2>
                        </div>
                    </div>
                </section>

                <section className="info-tiles">
                    <div className="tile is-ancestor has-text-centered">
                        <div className="tile is-parent">
                            <article className="tile is-child box">
                                <p className="title">{this.state.rooms.length}</p>
                                <p className="subtitle">Rooms</p>
                            </article>
                        </div>
                        <div className="tile is-parent">
                            <article className="tile is-child box">
                                <p className="title">59k</p>
                                <p className="subtitle">Products</p>
                            </article>
                        </div>
                        <div className="tile is-parent">
                            <article className="tile is-child box">
                                <p className="title">3.4k</p>
                                <p className="subtitle">Open Orders</p>
                            </article>
                        </div>
                        <div className="tile is-parent">
                            <article className="tile is-child box">
                                <p className="title">19</p>
                                <p className="subtitle">Exceptions</p>
                            </article>
                        </div>
                    </div>
                </section>

                <section className='hero is-halfheight'>
                    <div className='hero-header'>
                        <div className="card events-card">
                            <header className="card-header">
                                <p className="card-header-title is-vcentered">Rooms</p>
                            </header>
                            <br />
                            <div>
                                <input className="input is-link" type="text" placeholder="Search Hotel"></input>
                            </div>
                            <div className="card-table">
                                <div className="content">
                                    <table className="table is-fullwidth is-striped">
                                        <tbody>
                                            <tr>
                                                <td width="5%"><i className="fa fa-bell-o"></i></td>
                                                <td>Room Hotel</td>
                                                <td>Room Number</td>
                                                <td>Room Type</td>
                                                <td>Inspect</td>
                                            </tr>
                                            {this.createTableData()}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </section>

        );
    }
}

export default RoomTable;
