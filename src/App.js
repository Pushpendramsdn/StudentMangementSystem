import React, { Component } from 'react';
import './App.css';
import Layout from './Components/Layout/Layout';
import Modal from './Components/Layout/UI/Modal/Modal';
import { Switch, Route , withRouter} from 'react-router-dom';
import TeacherDashboard from './Container/TeacherDashboard/TeacherDashboard';
import QuestionBuilder from './Container/QuestionBuilder/QuestionBuilder';
import axios from "axios";
import { connect } from 'react-redux';
import StudentList from './Container/StudentList/StudentList';
import StudentDashboard from './Container/StudentDashboard/Studentdashboard';
import AssignedQuestions from './Container/AssigndQuestions/AssigndQuestions';
import {Form, FormGroup, FormControl, Col, Checkbox, Button, ControlLabel, Navbar, NavItem, Nav, NavDropdown,MenuItem } from 'react-bootstrap';

class App extends Component {
  state = {
    modalActive: true,
    teacherActive: false,
    studentActive:false,
    loading:false,
    queList:''
    }
    
    onCancelHandler = () => {
        this.setState({modalActive:false})
    }
    onLoginHandler = () => {
      if(this.state.teacherActive){
        this.props.history.push("/teacherDashboard");
        this.setState({modalActive:false})
      }
      else{
        this.props.history.push("/studentDashboard");
        this.setState({modalActive:false})
      } 
    // this.props.history.push("/searchResults");
        // this.setState({modalActive:false})
    }
    userSelectionHandler = (element) => {
        if(element=="Teacher"){
            if(!this.state.teacherActive){
                this.setState({
                    teacherActive:true,
                    studentActive: false
                })
            }
        }
        else{
            if(!this.state.studentActive){
                this.setState({
                    teacherActive:false,
                    studentActive: true
                }) 
            }
        }
    }
  render() {
    let loginModal='';
       if(this.state.modalActive){
           loginModal=<Modal 
                        cancelClicked={this.onCancelHandler} 
                        loginClicked={this.onLoginHandler} 
                        userChecked={this.userSelectionHandler}
                        teacherStatus={this.state.teacherActive}
                        studentStatus={this.state.studentActive}/>
       }
    return (
    <Layout>
      {loginModal}
        <Switch>
            <Route path='/teacherDashboard' component={TeacherDashboard}/>
            <Route path='/questionBuilder' component={QuestionBuilder}/>
            <Route path='/studentList' component={StudentList}/>
            <Route path='/studentDashboard' component={StudentDashboard}/>
            <Route path='/AssignedQuestions' component={AssignedQuestions}/>
        </Switch>
    </Layout>
    );
  }
}


export default withRouter(App);

