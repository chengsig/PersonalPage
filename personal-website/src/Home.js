import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardTitle } from 'reactstrap';
import './Home.css';


class Home extends Component {
  render() {
    return (
    <div className="home">
      <div id="intro">
        Hello, my name is Chengsi Gao. I am a Software Engineer based in San Francisco, CA. I like solving problems and building things.
      </div>
      <h6><span className="badge badge-secondary">WashU B.S. Systems Engineering</span></h6>
      <h6><span className="badge badge-secondary">Chartered Financial Analyst</span></h6>
      <a href="mailto:gaochengsi@gmail.com"><button type="button" className="btn btn-outline-secondary btn-small">get in touch</button></a>
    </div>
    );
  }
}

export default Home;