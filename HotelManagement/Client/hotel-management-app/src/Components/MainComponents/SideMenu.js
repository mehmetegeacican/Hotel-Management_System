import React, { Component } from 'react';

class SideMenu extends Component {
    render() {
        return (

            <aside className="menu is-hidden-mobile">
                <p className="menu-label">
                    Administration
                </p>
                <ul className="menu-list">
                    <li><a className="is-active">Dashboard</a></li>
                    <li><a>Hotels</a></li>
                    <li><a>Guests</a></li>
                </ul>

                <p className="menu-label">
                    Payment Administration
                </p>
                <ul className="menu-list">
                    <li><a>Payments</a></li>
                    <li><a>Transfers</a></li>
                    <li><a>Balance</a></li>
                    <li><a>Reports</a></li>
                </ul>
            </aside>
        );
    }
}

export default SideMenu;