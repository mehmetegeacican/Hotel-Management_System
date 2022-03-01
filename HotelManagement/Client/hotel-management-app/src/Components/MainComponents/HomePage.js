import React from 'react';
import HotelTable from "../Tables/HotelTable";
import GuestTable from "../Tables/GuestTable";

class HomePage extends React.Component {

  constructor(){
    super();
    this.state = {
      activePanel : ( 
      <HotelTable/>
      )
    };
  }
  changeActivePanel = (id) => {

    let navEls = document.querySelectorAll("#nav li");
    navEls.forEach((navEl) => {
      if (navEl.id === id) {
        navEl.classList.add("is-active");
      } else {
        if (navEl.classList.contains("is-active")) {
          navEl.classList.remove("is-active");
        }
      }
    });
    switch(id) {
      case "hotel-tab":
        this.setState({
          activePanel : <HotelTable/>
        })
        break;
      case "guest-tab":
        this.setState({
          activePanel: <GuestTable/>
        })
        break;
      case "room-tab":
        this.setState({
          activePanel: (
            <h1> This is rooms table</h1>
          )
        })
        break;
      case "payment-tab":
        this.setState({
          activePanel: (
            <h2> This is payments table </h2>
          )
        })
        break;
    };
    
  }
  render(){
    return (
      <section>
            <div className="tabs is-boxed is-centered main-menu" id="nav">
              <ul>
                <li className="is-active" id = "hotel-tab" onClick={() => this.changeActivePanel("hotel-tab")}><a>Hotels</a></li>
                <li id = "guest-tab" onClick={() => this.changeActivePanel("guest-tab")}><a>Guests</a></li>
                <li id = "room-tab" onClick={() => this.changeActivePanel("room-tab")}><a>Rooms</a></li>
                <li id = "payment-tab" onClick={() => this.changeActivePanel("payment-tab")}><a>Payments</a></li>
              </ul>
            </div>
            <div className='tab-content'>
                  {this.state.activePanel}
            </div>
      </section>
    );
  }
}

export default HomePage;