import React, { Component } from 'react';
import axios from 'axios';

class CreateGuestModal extends Component {
    
    
    constructor(props){
        super(props);
        this.state = {
            hotels: [],
            email: "",
            name: "",
            country: ""
        }
   }

   componentDidMount(){
    const requestOptions = {
        method: "GET",
        mode : "no-cors"
    }
    axios.get('http://localhost:8080/api/hotels',requestOptions)
    .then(response => response.data).then((data) => {
        this.setState({
            hotels:data
        })
    })
 }
   
  displayHotels = () => {
          return(
            <div className="select is-fullwidth">
                <select name="hotels">
                    {this.state.hotels.map((item,i) => {
                        return(
                            <option value={item.hotel_name} key = {i+1}>{item.hotel_name}</option>
                        )
                    })}
                </select>
            </div>
          )
  }

  onChangeHandleEmail = (word) => {
        this.setState({
            email: word
        })
  }
  onChangeHandleName = (word) => {
    this.setState({
        name: word
    })
  }
  changeCountry = (word) => {
      this.setState({
          country:word
      })
  }

  saveGuest = () => {
      this.props.save(this.state.name,this.state.email,this.state.country);
      console.log("Saved");
      this.props.close();
  }
  

  render(){
    return (
        <div className="modal is-active">
            <div className="modal-background"></div>
            <div className="modal-card">
                <header className="modal-card-head">
                <p className="modal-card-title">Modal title</p>
                <button className="delete has-text-primary" aria-label="close" onClick={() => this.props.close()} style={{backgroundColor:"darkred"}}></button>
                </header>
                <section className="modal-card-body">
                    <div className="field">
                        <label className="label">Name</label>
                        <div className="control">
                            <input className="input" type="text" placeholder="Enter the New Guests Name Here" onChange={(event) => this.onChangeHandleName(event.target.value)}/>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Email</label>
                        <div className="control">
                            <input 
                                className="input"
                                type="text" 
                                placeholder="Enter the New Guests Email Here" 
                                onChange={(event) => this.onChangeHandleEmail(event.target.value)}
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Country</label>
                        <div className="control is-expanded">
                            <div className="select is-fullwidth is-rounded">
                                <select name="country" onChange={(e) => this.changeCountry(e.target.value)}>
                                    <option value="Argentina">Argentina</option>
                                    <option value="Bolivia">Bolivia</option>
                                    <option value="Brazil">Brazil</option>
                                    <option value="Chile">Chile</option>
                                    <option value="UK">UK</option>
                                    <option value="USA">USA</option>
                                    <option value="Russia">Russia</option>
                                    <option value="Ukraine">Ukraine</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Hotel</label>
                        <div className="control is-expanded">
                            <div className="select is-fullwidth">
                                {this.displayHotels()}
                            </div>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Room</label>
                        <div className="control is-expanded">
                            <div className="select is-fullwidth">
                                <select name= "room" >
                                    <option value = "none"> Room will be added </option>
                                </select> 
                            </div>
                        </div>
                    </div>
                    
                    
                </section>
                <footer className="modal-card-foot">
                <button className="button is-info" onClick={() => this.saveGuest()}>Save changes</button>
                <button className="button" onClick={() => this.props.close()}>Cancel</button>
                </footer>
            </div>
        </div>
    );
  }
}

export default CreateGuestModal;