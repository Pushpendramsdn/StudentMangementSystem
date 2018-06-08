import React from 'react';
import classes from './Navbar.css';
import {Navbar} from 'react-bootstrap';
const navbar = (props) => {
    return(
    <div>
        <Navbar>
                <Navbar.Header>
                <Navbar.Brand>
                    <a href="#home">Up<span>G</span>rad</a>
                </Navbar.Brand>
                </Navbar.Header>
        </Navbar>
    </div>   
    );
};

export default navbar;