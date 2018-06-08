import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import {Well, Row, Col, Button} from 'react-bootstrap';
class StudentDashBoard extends Component {
  state = {
      studentDetailsAvailable: false,
      studentData:'',
      questionData:'',
      studenNames:''

    }
    componentDidMount(){
     if(localStorage.getItem('studentDetails')){
         if(localStorage.getItem('questionData')){
             this.setState({
                 studentData: JSON.parse(localStorage.getItem('studentDetails')),
                 questionData: JSON.parse(localStorage.getItem('questionData')) 
             }, () => {
                 this.setState({
                    studentDetailsAvailable: true
                 })
             })

         }
         else{
             this.setState({
                studentDetailsAvailable: false
             })
         }
     }

    }
    onStudentClickHandler = (sName) =>{
        let assignedQuestion='';
        (this.state.studentData).map(student => {
            if(student.name===sName){
                assignedQuestion=student.QueIds;
            }

        })
        console.log(assignedQuestion);
        this.props.history.push({
            pathname: '/AssignedQuestions',
            search: sName,
            state: assignedQuestion 
        })
    }
  render() {
   
    let StudentName=[]; 
    let studentList='';
    
    if(this.state.studentDetailsAvailable){
    (this.state.studentData).map(student => {
            StudentName.push(student.name);
        });
        if(StudentName){
            let i=0;
            studentList= StudentName.map(name=> {
                i++;
              return (
                  <Row  style={{padding:'10px 0px', textAlign:'center', cursor:'pointer'}} onClick={(x) => this.onStudentClickHandler(name)}>
                      <Col md={2}  style={{border:'1px solid #ccc'}}>
                      <Row>S. No.</Row>
                      <Row>{i}</Row>
                      </Col>
                      <Col md={10} style={{borderRight: '1px solid #ccc',background:'#f8f8f8'}}>
                      <Row style={{lineHeight:'2.75'}}><b>{name}</b></Row>
                      </Col>
                  </Row>
              );
            });
        }
      }
   
    return (
        <div style={{width:'60%', margin:'0px 25%'}}>
            {studentList}
        </div>
       
    );
  }
}



export default withRouter(StudentDashBoard);
