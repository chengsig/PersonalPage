import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardTitle } from 'reactstrap';
import './Home.css';
import profilePic from './profilePic.JPG';


class Home extends Component {
  render() {
    return (
      <div className="Container">
        <div className="profile">
          <img id="profilePic" src={profilePic} alt="chengsi profile picture" />
        </div>
        <div className="home">
          <div id="intro" className="jumbotron">
            <h5 className="display-4">Hello, my name is Chengsi Gao.</h5>
            <p className="lead">I am a Software Engineer based in San Francisco, CA. I like solving problems and building things.</p>
            <hr className="my-4"></hr>
            <h6><span className="badge badge-secondary">WashU B.S. Systems Engineering</span></h6>
            <a href="mailto:gaochengsi@gmail.com"><button type="button" className="btn btn-outline-secondary btn-small">get in touch</button></a>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;