import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {
    render() {
        return (
            <div className="Contact">
                <div id="getintouch" className="jumbotron">
                    <h5 className="display-4">Get In Touch</h5>
                    <p>I am currently looking for Full-Stack, Front-End, or Back-End opportunities in the Bay Area, as well as potential projects or making new connections.</p>
                    <a href="mailto:gaochengsi@gmail.com">gaochengsi@gmail.com</a>
                </div>
            </div>
        )
    }
}

export default Contact;