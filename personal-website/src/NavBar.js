import React, { Component } from 'react';
import "./NavBar.css";
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'reactstrap';
import resume from './chengsi_gao_resume.pdf';


class NavBar extends Component {
    render() {
        return (
            <Navbar color="light" light expand="md">
                <NavLink exact to="/" className="navbar-brand">
                    <h4>Chengsi</h4>
                </NavLink>

                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <a href={resume}>Resume</a>
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