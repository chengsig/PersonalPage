import React, { Component } from 'react';
// import './App.css';

class Experience extends Component {
    render() {
        return (
            <div className="experience">
                <div className="container">
                    <div className="table table-borderless">
                        <tbody>
                            <tr>
                                <th scope="row">Languages</th>
                                <td>
                                    <span className="badge badge-light">JavaScript(ES6)</span>
                                    <span className="badge badge-light">Python</span>
                                    <span className="badge badge-light">SQL</span>
                                    <span className="badge badge-light">HTML</span>
                                    <span className="badge badge-light">CSS</span>
                                    <span className="badge badge-light">MATLAB</span>
                                    <span className="badge badge-light">R</span>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">Technologies</th>
                                <td>
                                    <span className="badge badge-light">React</span>
                                    <span className="badge badge-light">Redux</span>
                                    <span className="badge badge-light">Node</span>
                                    <span className="badge badge-light">Express</span>
                                    <span className="badge badge-light">Django</span>
                                    <span className="badge badge-light">Flask</span>
                                    <span className="badge badge-light">PostgreSQL</span>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">Work Experience</th>
                                <td>
                                    <h6>Rithm School</h6>
                                    <span className="badge badge-light">Software Engineer Intern</span>
                                    <span className="badge badge-light">April 2019 - May 2019</span>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row"></th>
                                <td>
                                    <h6>Morningstar Investment Management LLC</h6>
                                    <span className="badge badge-light">Product Analyst</span>
                                    <span className="badge badge-light">November 2016 - December 2018</span>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row"></th>
                                <td>
                                    <h6>Morningstar Inc</h6>
                                    <span className="badge badge-light">Data Analyst</span>
                                    <span className="badge badge-light">April 2015 - November 2016</span>
                                </td>
                            </tr>
                        </tbody>
                    </div>
                </div>
            </div>
        )
    }
}

export default Experience;