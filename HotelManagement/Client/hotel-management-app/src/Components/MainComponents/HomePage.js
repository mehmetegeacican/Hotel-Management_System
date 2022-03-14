import React from 'react';
import HotelTable from "../Tables/HotelTable";
import GuestTable from "../Tables/GuestTable";
import ReservationsTable from "../Tables/ReservationsTable";
import RoomTable from "../Tables/RoomTable";

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
      case "res-tab":
        this.setState({
          activePanel:  <ReservationsTable/>
        })
        break;
      case "room-tab":
        this.setState({
          activePanel: (
            <RoomTable/>
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
                <li id = "res-tab" onClick={() => this.changeActivePanel("res-tab")}><a>Reservations</a></li>
                <li id = "room-tab" onClick={() => this.changeActivePanel("room-tab")}><a>Rooms</a></li>
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