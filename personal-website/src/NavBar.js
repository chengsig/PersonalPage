import React, { Component } from 'react';
import "./NavBar.css";
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'reactstrap';


class NavBar extends Component {
    render() {
        return (
            <Navbar color="light" light expand="md">
                <NavLink exact to="/" className="navbar-brand">
                    <h4>Chengsi</h4>
                </NavLink>

                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <a href="https://docs.google.com/document/d/1ARfs7DIyVZD2NrThdPdOWFBgUl7F4phsev2MbfG8_YU/edit?usp=sharing">Resume</a>
                    </NavItem>
                
                    <NavItem>
                        <NavLink to="/experience/">Experience</NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink to="/projects/">Projects</NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink to="/contact/">Contact</NavLink>
                    </NavItem>
                </Nav>

            </Navbar>
        )
    }
}

export default NavBar;