import React, { Component } from 'react';
import './Projects.css';
import warbler from './warbler.png';
import microblog from './microblog.png';


class Projects extends Component {
    render() {
        return (
            <div className="Projects text-center">
                <img src={warbler} alt="warbler"/><br></br>
                <div className="container">
                    <a href="https://pizzawarbler.herokuapp.com/">Warbler </a> 
                    is a twitter clone that allows users to register 
                    and participate in the warbler community.
                    To learn more about the site, visit the repository
                    at <a href="https://github.com/chengsig/warbler"><i class="fab fa-github"></i></a>. <span className="badge badge-info">Flask</span>
                </div>
                <br/>
                <img src={microblog} alt="microblog"/><br></br>
                <div className="container">
                    <a href="https://ca-microblog-frontend.herokuapp.com/">Microblog </a> 
                    is an online blogging site. Users can write posts, add comments to each post and the community can vote on blogs.
                    To learn more about the site, visit the repository
                    at <a href="https://github.com/chengsig/microblog"><i class="fab fa-github"></i></a>. <span className="badge badge-info">React Redux</span>
                </div>
            </div>
        )
    }
}

export default Projects;