import React, { Component } from 'react';
import classes from './Layout.css';
import Navbar from './UI/Navbar/Navbar';
import Modal from './UI/Modal/Modal';
class  Layout extends Component {
    render(){
        return (
        <div>
           <Navbar /> 
           <main className={classes.content}>
                {this.props.children}
            </main>
        </div>
        );
    };
};

export default Layout;