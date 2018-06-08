import React, { Component } from 'react';
import { Switch, Route , withRouter} from 'react-router-dom';
import {Col, Table, Row, Button } from 'react-bootstrap';
import Input from '../../Components/Layout/UI/Input/Input';
import Que from '../../Components/Que/Que';

class assignedQuestions extends Component {
  state = {
      questionList:'',
      queIds:'',
      ques:'',
      questionsAvailable: false
    }

    componentDidMount(){
        let questions=[];
        if(localStorage.getItem('questionData') && this.props.location.state){
            this.setState({
                questionList: JSON.parse(localStorage.getItem('questionData')),
                queIds: this.props.location.state
            }, () => {
                this.state.queIds.map(id => {
                    this.state.questionList.map(question =>{
                        if(question.id==id){
                            questions.push(question);
                        }
                    })
                })
            })
            this.setState({
                ques:questions
            }, () => {
                this.setState({
                    questionsAvailable: true
                })
            })
        }
        else{
            alert("No Data Found")
        }
       }
  render() {
      console.log(this.state.ques);
      let i=0;
      let questionListToShow=''
      console.log(this.state.questionsAvailable);
      if(this.state.ques){
        questionListToShow = (this.state.ques).map(que=>{
            i++;
            return <Que id={que.id} serialNumber={i} title={que.queTitle} type={que.queType} description={que.queDescription}/>
        })
      }
    
    return (
        <div style={{textAlign:'center'}}>
        <h3><b>Assigned Questions to Students</b></h3>
        {questionListToShow}
        </div>
    );
  }
}


export default withRouter(assignedQuestions);

