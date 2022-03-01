import axios from 'axios';
import React, { Component } from 'react';
class GuestTable extends Component {

   constructor() {
        super();
        this.state = {
            guests : []
        };
   }

    componentDidMount(){
        const requestOptions = {
            method: "GET",
            mode : "no-cors"
        }
        axios.get('http://localhost:8080/api/guests',requestOptions)
        .then(response => response.data).then((data) => {
            this.setState({
                guests:data
            })
        })
    }
    getGuests = () => {
        console.log(this.state.guests);
    }
    createTableData = () => {
        return this.state.guests.map((item,i) => {
            return (
                <tr key={i+ 1}>
                    <td>{i + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td> {item.country} </td>
                    <td> Some Hotel Data</td>
                    <td> Some Hotel Room</td>
                    <td><a className="button is-small is-link" onClick={() => this.getGuests()}>Inspect</a></td>
                </tr>
            )
        })
    }
  render(){
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
                                <p className="title">19</p>
                                <p className="subtitle">Exceptions</p>
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
                                            <td>Guest Hotel </td>
                                            <td>Guest Room</td>
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

export default GuestTable;
  