import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardTitle } from 'reactstrap';
import './Home.css';


class Home extends Component {
  render() {
    return (
    <section className="col-md-8">
      <div id="intro">
        Hello, my name is Chengsi Gao. I am a Software Engineer based in San Francisco, CA. I like solving problems and building things.
      </div>
    </section>
    );
  }
}

export default Home;