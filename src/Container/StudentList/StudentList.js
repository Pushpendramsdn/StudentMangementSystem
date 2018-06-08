import React, { Component } from 'react';
import { Switch, Route , withRouter} from 'react-router-dom';
import {Col, Table, Row, Button } from 'react-bootstrap';
import Input from '../../Components/Layout/UI/Input/Input';

class StudentList extends Component {
  state = {
      studentName:["Soumya Sarkar", "Nitin Salwan", "Romil Agrawal", "Jazib Rahman", "Abhishek Bhardwaj", "Simran Jeet Singh", "Nishant Sharma"],
      studentData:'',
      student:'',
      assignedQueList:''
    }
    nameCheckedHandler = (event) => {
        if(event.target.checked){
            if(!this.state.studentData){
                let data=[];
                const StudentObject={
                    name: event.target.value,
                    QueIds: this.props.location.state
                }
                data.push(StudentObject);
                this.setState({studentData: data})
            }
          else{
             let data=this.state.studentData;
              const StudentObject={
                name: event.target.value,
                QueIds: this.props.location.state
            }
            data.push(StudentObject);
            this.setState({studentData: data})
    
          }
        }
        else{
            if(this.state.studentData){
                let data= this.state.studentData;

                data.map(user =>{
                    if (user.name==event.target.value)
                    {
                        const removeArrayItem = (arr, itemToRemove) => {
                            return arr.filter(item => item !== itemToRemove)
                          }
                          
                        let filteredAry = removeArrayItem(data, user)
                        this.setState({
                            studentData: filteredAry
                        });
                    }
                }
            )
            }

        }
        
        console.log(this.state.studentData);
    
    }
    onCancelHandler = () => {
        this.props.history.push('/teacherDashboard');
    }
    onSubmitHandler = () =>{
        if(!localStorage.getItem('studentDetails')){
            localStorage.setItem('studentDetails',JSON.stringify(this.state.studentData));
            alert("Question Assigned Successfully");
            this.props.history.push('/');
        }
        else{
            let questiontoAssign = JSON.parse(localStorage.getItem('studentDetails'));
            console.log(typeof(questiontoAssign));
            (this.state.studentData).map(student => {
                questiontoAssign.push(student);
            })
            localStorage.setItem('studentDetails',JSON.stringify(questiontoAssign));
            console.log(questiontoAssign);
            alert("Question Assigned Successfully");
            this.props.history.push('/');
        }
       
    }
  render() {
    //   console.log(this.props.location.state);
    console.log(this.state.studentName);
    let i=0;
    let Students= (this.state.studentName).map(name => {
        i++;
        return (
           
            <Row  style={{padding:'10px 0px', border:'1px solid #ccc'}}>
                <Col md={1}  style={{borderRight:'1px solid #ccc'}}>
                <Row>S. No.</Row>
                <Row>{i}</Row>
                </Col>
                <Col md={10} style={{borderRight: '1px solid #ccc',background:'#f8f8f8'}}>
                <Row style={{lineHeight:'2.75'}}><b>{name}</b></Row>
                </Col>
                <Col md={1}>
                <Input elementType="checkbox" value={name} changed={this.nameCheckedHandler}/>
                </Col>
            </Row>
        );
    })
    return (
        <div style={{width:'60%', margin:'0 auto', height:'500px',textAlign: 'center'}}>
        <Row><h1>Select Students to Assign Question</h1></Row>
            {Students}
        <Row style={{textAlign: 'center', padding:'20px 0'}}>
            <Col md={6}>
            <Button style={{width:'100%'}} onClick={this.onCancelHandler}>Cancel</Button>
            </Col>
            <Col md={6}>
            <Button bsStyle="primary" style={{width:'100%'}} onClick={this.onSubmitHandler}>Submit</Button></Col>
        </Row>
        </div>
    );
  }
}


export default withRouter(StudentList);

