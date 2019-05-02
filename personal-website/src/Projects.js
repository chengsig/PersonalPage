import React, { Component } from 'react';
import './Projects.css';
import warbler from './warbler.png';


class Projects extends Component {
    render() {
        return (
            <div className="Projects text-center">
                <img src={warbler} alt="warbler"/><br></br>
                <div className="container">
                    <a href="https://pizzawarbler.herokuapp.com/">Warbler </a> 
                    is a twitter clone that allows the user to register 
                    and participate in the warbler community.
                    To learn more about the site, visit the repository
                    at <a href="https://github.com/chengsig/warbler"><i class="fab fa-github"></i></a>.
                </div>
                
            </div>
        )
    }
}

export default Projects;