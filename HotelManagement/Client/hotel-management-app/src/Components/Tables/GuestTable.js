import axios from 'axios';
import React, { Component } from 'react';
import CreateGuestModal from '../Modals/CreateGuestModal';
import DeleteModal from '../Modals/DeleteModal';
import UpdateGuestModal from '../Modals/UpdateGuestModal';



class GuestTable extends Component {

    constructor(props) {
        super(props);
        this.state = {
            guests: [],
            createGuestModal: null,
            deleteModal: null,
            updateGuestModal: null
        };

    }

    componentDidMount() {
        const p1 = new Promise((resolve, reject) => {
            setTimeout(() => {
                this.getGuests();
                resolve(10);
            }, 1 * 5);

        });
        const p2 = new Promise((resolve, reject) => {
            setTimeout(() => {
                //   this.setState({
                //     guests: this.props.guests
                //   })
                // //   console.log(this.props.guests,"Component Mount", this.state.guests);
                //   resolve(20);
            }, 2 * 10);
        });
        Promise.all([p1, p2])
    }

    getGuests = () => {
        const requestOptions = {
            method: "GET",
            mode: "no-cors"
        }
        axios.get('http://localhost:8080/api/guests', requestOptions)
            .then(response => response.data).then((data) => {
                this.setState({
                    guests: data
                })
            })
    }

    postGuests = (name, email, country) => {
        const requestOptions = {
            method: "POST",
            mode: "no-cors",
            body: {
                "id": this.state.guests.length + 1,
                "name": name,
                "email": email,
                "country": country
            }
        }
        axios.post('http://localhost:8080/api/guests', requestOptions.body)
            .then(response => response.data).then((data) => {
                this.componentDidMount();
            })
    }

    deleteGuests = (id) => {
        const requestOptions = {
            method: "DELETE",
            mode: "no-cors",
        }
        axios.delete(`http://localhost:8080/api/guests/${id}`, requestOptions)
            .then(response => response.data).then((data) => {
                this.componentDidMount();
                this.closeModals();
            })
    }

    updateGuests = (id, name, email, country) => {
        console.log(id, name, email, country);
        const requestOptions = {
            method: "PUT",
            mode: "no-cors",
            body: {
                "id": id,
                "name": name,
                "email": email,
                "country": country
            }
        }
        axios.put(`http://localhost:8080/api/guests/${id}`, requestOptions.body)
            .then(response => response.data).then((data) => {
                this.componentDidMount();
            })
    }

    closeModals = () => {
        // console.log("Modal has been closed");
        this.setState({
            createGuestModal: null,
            deleteModal: null,
            updateGuestModal: null
        })
    }

    openAddMenu = () => {
        // console.log("Modal menu has been opened");
        this.setState({
            createGuestModal:
                <CreateGuestModal
                    close={this.closeModals}
                    save={this.postGuests}
                />
        })
    }

    openDeleteModal = (id) => {
        // console.log("Delete Modal has been opened");
        this.setState({
            deleteModal: <DeleteModal
                close={this.closeModals}
                delete={this.deleteGuests}
                id={id}
            />
        })
    }

    openUpdateModal = (id, name, email, country) => {
        this.setState({
            updateGuestModal: <UpdateGuestModal
                close={this.closeModals}
                save={this.updateGuests}
                id={id}
                name={name}
                email={email}
                country={country}
            />
        })
    }



    createTableData = () => {
        return this.state.guests.map((item, i) => {
            return (
                <tr key={i + 1}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td> {item.country} </td>
                    <td><a className="button is-small is-link" onClick={() => this.openUpdateModal(item.id, item.name, item.email, item.country)}>Inspect</a></td>
                    <td><a className="button is-small is-danger" onClick={() => this.openDeleteModal(item.id)}>Delete</a></td>
                </tr>
            )
        })
    }

    render() {

        return (
            <section>
                <section className="hero is-link welcome is-small">
                    <div className="hero-body is-boxed">
                        <div className="container">
                            <h1 className="title">
                                Guests
                            </h1>
                            <h2 className="subtitle">
                                You can view the guests and get information from here
                            </h2>
                        </div>
                    </div>
                </section>

                <section className="info-tiles">
                    <div className="tile is-ancestor has-text-centered">
                        <div className="tile is-parent">
                            <article className="tile is-child box">
                                <p className="title">{this.state.guests.length}</p>
                                <p className="subtitle">Users</p>
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
                                <p className="title">Add New Guest</p>
                                <p className="subtitle"><button className="button is-link" onClick={() => this.openAddMenu()}>Add Icon</button></p>
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
                                                <td>Guest Country</td>
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
                    {this.state.createGuestModal}
                    {this.state.deleteModal}
                    {this.state.updateGuestModal}
                </section>

            </section>

        );
    }
}


export default GuestTable;
