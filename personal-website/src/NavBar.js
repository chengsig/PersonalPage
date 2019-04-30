import React, { Component } from 'react';
import "./NavBar.css";
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'reactstrap';


class NavBar extends Component {
    render() {
        return (
            <Navbar color="light" light expand="md">
                <NavLink exact to="/" className="navbar-brand">
                    <h2>Chengsi</h2>
                    <p><a href="mailto:gaochengsi@gmail.com">gaochengsi@gmail.com</a></p>
                </NavLink>

                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink to="/resume/">Resume</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/contact/">Contact</NavLink>
                    </NavItem>
                </Nav>

            </Navbar>
        )
    }
}

export default NavBar