import React, { Component } from 'react';
import classes from './TeacherDashboard.css'
import {Well, Row, Col, Button} from 'react-bootstrap';
import Input from '../../Components/Layout/UI/Input/Input';
import Question from '../../Components/Question/Question';
import axios from "axios";
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
class TeacherDashBoard extends Component {
  state = {
      queList:[],
      loading: false,
      AssignedQue: '',
      QueId:'',
      selectAllActive: false,
      queDataReadyToSend: false

    }

    authorNewQueHandler = () => {
        this.props.history.push({
            pathname: '/questionBuilder',
            search: '?query=abc',
            state: {queType:"Default"} 
        })
    }
    queCheckboxHandler = (event) =>{
        if(event.target.checked){
            if(!this.state.AssignedQue){
                let questionId=[];
                questionId.push(event.target.value);
                this.setState({AssignedQue: questionId},()=>{
                    this.setState({queDataReadyToSend:true})
                });
            }
            else{
                let questions= this.state.AssignedQue;
                questions.push(event.target.value);
                this.setState({
                    AssignedQue: questions
                },()=>{
                    this.setState({queDataReadyToSend:true})
                });
            }
        }
        else{
            if(this.state.AssignedQue){
                let questions= this.state.AssignedQue;

                questions.map(question =>{
                    if (question===event.target.value)
                    {
                        const removeArrayItem = (arr, itemToRemove) => {
                            return arr.filter(item => item !== itemToRemove)
                          }
                          
                        let filteredAry = removeArrayItem(questions, event.target.value)
                        this.setState({
                            AssignedQue: filteredAry
                        },()=>{
                            if(!this.AssignedQue){
                                this.setState({queDataReadyToSend:false})
                            }
                        });
                    }
                }
            )
            }
        }
       
    }
    componentDidMount(){
        console.log(this.props.location.state);
        const baseAPI = './queList.json';
        this.setState({ loading: true});
        if(!localStorage.getItem('questionData')) {
            axios.get(baseAPI).then(response => {
                 localStorage.setItem('questionData',JSON.stringify(response.data));
                const queData = JSON.parse(localStorage.getItem('questionData'));
                 this.setState({ queList: queData, loading: false });
            }).catch(err => {
                console.log(err);
            })
        } else {
            let queData = JSON.parse(localStorage.getItem('questionData'));
            if(this.props.location.state){
                queData.push(this.props.location.state);
            localStorage.setItem('questionData',JSON.stringify(queData));
            }
            
            this.setState({ queList: queData, loading: false });
        }
        
    }
    onSelectAllHandler = (event) =>{
        let queData='';
        if(event.target.checked)
        {
            if(event.target.value=="Select All")
            {
                queData= JSON.parse(localStorage.getItem('questionData'));
                this.setState({selectAllActive: true, AssignedQue:queData },()=>{
                   this.setState({queDataReadyToSend:true})
                });
            }
            console.log(this.state.AssignedQue);
        }
        else{
            this.setState({selectAllActive: false,AssignedQue:'', queDataReadyToSend:false })
        }
            

    }
    onAssignClickHandler = () => {
            if(this.state.queDataReadyToSend && this.state.AssignedQue){
                this.props.history.push({
                    pathname: '/studentList',
                    search: '?query=abc',
                    state: this.state.AssignedQue 
                });
            }
            else{
                alert("Please select atleast one Question to assign");
            }
       
    }
    onEditClickHandler = (data) => {
        this.props.history.push({
            pathname: '/questionBuilder',
            search: '?query=abc',
            state: data 
        })
    }
  render() {
      let i=0;
     const queListElement = (this.state.queList).map(question => {
        i++;
         return <Question alreadyChecked={this.state.selectAllActive} queChecked={this.queCheckboxHandler} edit={(data) => this.onEditClickHandler(question)} id={question.id} serialNumber={i} title={question.queTitle} type={question.queType} description={question.queDescription}/>
     })
     
    return (
        <div style={{width: "90%", margin:"0 auto"}}>
             <Row className="show-grid" style={{border: '1px solid #ccc'}}>
                <Col xs={3} md={1}>
                    <div className={classes.selectAllCheck}>
                        <Input elementType="checkbox" value="Select All" changed={this.onSelectAllHandler} elementText="Select All"/>
                    </div>
                    
                </Col>
                <Col xs={9} md={11} style={{background: "#f8f8f8", padding:'18px', borderLeft:'1px solid #ccc'}}>
                    <Row>
                        <Col xs={12} md={6}>
                        Select questions to assign
                        </Col>
                        <Col xs={4} md={3}>
                        <Button style={{width:'100%'}} onClick={this.onAssignClickHandler}>Assign</Button>
                        </Col>
                        <Col xs={8} md={3}>
                        <Button bsStyle="primary" style={{width:'100%'}} onClick={this.authorNewQueHandler}>Author New Question</Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
            {queListElement}
            </div>
    );
  }
}



export default withRouter(TeacherDashBoard);
