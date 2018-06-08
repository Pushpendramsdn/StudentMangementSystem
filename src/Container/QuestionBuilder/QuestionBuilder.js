import React,
{
    Component
}

from 'react';
import {
    Row,
    Col,
    Button
}

from 'react-bootstrap';
import Input from '../../Components/Layout/UI/Input/Input';
import MCQ from '../../Components/MultipleChoiceQuestion/MultipleChoiceQuestion';
import SubmissionQue from '../../Components/SubmissionTypeQuestion/SubmissionTypeQuestion';
import PassageQue from '../../Components/PassageTypeQuestion/PassageTypeQuestion';
import {
    connect
}

from 'react-redux';
import {
    withRouter
}

from 'react-router-dom';
class QuestionBuilder extends Component {
    state= {
        mcqActive: true, submissionActive: false, passageActive: false, title: '', description: '', instruction: '', optionA: '', optionB: '', optionC: '', optionD: '', idealAns: '', queInstance: '', checkOptA: false, checkOptB: false, checkOptC: false, checkOptD: false, CorrectAns: '', editQuestion: '', dataReadyToSend: false
    }
    queTypeHandler=(queType)=> {
        if(queType=='Multiple choice question') {
            this.setState( {
                mcqActive: true, submissionActive: false, passageActive: false
            }
            );
        }
        else if(queType=='Submission type question') {
            this.setState( {
                mcqActive: false, submissionActive: true, passageActive: false
            }
            );
        }
        else {
            this.setState( {
                mcqActive: false, submissionActive: false, passageActive: true
            }
            );
        }
    }
    onCancelHandler=()=> {
        this.props.history.push('/teacherDashboard')
    }
    onAuthorClickHandler=()=> {
        alert("Author Successfull");
        if(this.state.mcqActive) {
            this.setState( {
                queInstance: {
                    "id": new Date(), "queTitle": this.state.title, "queType": "MCQ(Quiz)", "queDescription": this.state.description, "queInstruction": this.state.instruction, "optA": this.state.optionA, "optB": this.state.optionB, "optC": this.state.optionC, "optD": this.state.optionD, "correctAns": this.state.CorrectAns
                }
            }
            , function () {
                this.props.history.push( {
                    pathname: '/teacherDashboard', search: '?query=abc', state: this.state.queInstance
                }
                )
            }
            .bind(this));
        }
        else if(this.state.submissionActive) {
            this.setState( {
                queInstance: {
                    "id": new Date(), "queTitle": this.state.title, "queType": "Submission", "queDescription": this.state.description, "queInstruction": this.state.instruction
                }
            }
            , function () {
                this.props.history.push( {
                    pathname: '/teacherDashboard', search: '?query=abc', state: this.state.queInstance
                }
                )
            }
            .bind(this));
        }
        else if(this.state.passageActive) {
            this.setState( {
                queInstance: {
                    "id": new Date(), "queTitle": this.state.title, "queType": "Passage(text)", "queDescription": this.state.description, "queInstruction": this.state.instruction, "queIdealAns": this.state.idealAns
                }
            }
            , function () {
                console.log(this.state.queInstance);
                this.props.history.push( {
                    pathname: '/teacherDashboard', search: '?query=abc', state: this.state.queInstance
                }
                )
            }
            .bind(this));
        }
    }
    getTitleHandler=(event)=> {
        console.log(event.target.value);
        this.setState( {
            title: event.target.value
        }
        );
    }
    getDescription=(event)=> {
        this.setState( {
            description: event.target.value
        }
        );
    }
    getInstructions=(event)=> {
        this.setState( {
            instruction: event.target.value
        }
        );
    }
    getIdealAnswer=(event)=> {
        this.setState( {
            idealAns: event.target.value
        }
        );
    }
    optionCheckBoxHandler=(event)=> {
        if(event.target.value=="A") {
            this.setState( {
                checkOptA: true, checkOptB: false, checkOptC: false, checkOptD: false, CorrectAns: event.target.value
            }
            );
        }
        else if(event.target.value=="B") {
            this.setState( {
                checkOptA: false, checkOptB: true, checkOptC: false, checkOptD: false, CorrectAns: event.target.value
            }
            );
        }
        else if(event.target.value=="C") {
            this.setState( {
                checkOptA: false, checkOptB: false, checkOptC: true, checkOptD: false, CorrectAns: event.target.value
            }
            );
        }
        else if(event.target.value=="D") {
            this.setState( {
                checkOptA: false, checkOptB: false, checkOptC: false, checkOptD: true, CorrectAns: event.target.value
            }
            );
        }
    }
    mcqOptionsHandler=(event)=> {
        if(event.target.placeholder==="Type your option A here ...") {
            this.setState( {
                optionA: event.target.value
            }
            );
        }
        else if(event.target.placeholder==="Type your option B here ...") {
            this.setState( {
                optionB: event.target.value
            }
            );
        }
        else if(event.target.placeholder==="Type your option C here ...") {
            this.setState( {
                optionC: event.target.value
            }
            );
        }
        else {
            this.setState( {
                optionD: event.target.value
            }
            );
        }
    }
    componentDidMount() {
        if(this.props.location.state.queType=='MCQ(Quiz)') {
            this.setState( {
                mcqActive: true, submissionActive: false, passageActive: false
            }
            );
        }
        else if(this.props.location.state.queType=='Submission') {
            this.setState( {
                mcqActive: false, submissionActive: true, passageActive: false
            }
            );
        }
        else if(this.props.location.state.queType=='Passage(text)') {
            this.setState( {
                mcqActive: false, submissionActive: false, passageActive: true
            }
            );
        }
        this.setState( {
            editQuestion: this.props.location.state
        }
        , ()=> {
            this.setState( {
                dataReadyToSend: true
            }
            );
            console.log(this.state.editQuestion);
        }
        )
    }
    render() {
        let queElement='';
        if(this.state.mcqActive) {
            queElement=<MCQ optionACheck= {
                this.state.checkOptA
            }
            quedata= {
                this.state.editQuestion
            }
            optionBCheck= {
                this.state.checkOptB
            }
            optionCCheck= {
                this.state.checkOptC
            }
            optionDCheck= {
                this.state.checkOptD
            }
            CheckBox= {
                this.optionCheckBoxHandler
            }
            Title= {
                this.getTitleHandler
            }
            Description= {
                this.getDescription
            }
            Instructions= {
                this.getInstructions
            }
            Options= {
                this.mcqOptionsHandler
            }
            />;
        }
        if(this.state.submissionActive) {
            queElement=<SubmissionQue Title= {
                this.getTitleHandler
            }
            quedata= {
                this.state.editQuestion
            }
            Description= {
                this.getDescription
            }
            Instructions= {
                this.getInstructions
            }
            />;
        }
        if(this.state.passageActive) {
            queElement=<PassageQue Title= {
                this.getTitleHandler
            }
            quedata= {
                this.state.editQuestion
            }
            Description= {
                this.getDescription
            }
            Instructions= {
                this.getInstructions
            }
            IdealAnswer= {
                this.getIdealAnswer
            }
            />;
        }
        return ( <div> <div style= {
            {
                width: '80%', margin: '0 auto', padding: '0px 25px'
            }
        }
        > <Row><h2>Question Builder</h2></Row> <Row><h4>What type of question you want to create?</h4></Row> <Row><Input elementType="radio" checked= {
            this.queTypeHandler
        }
        activeStatus= {
            this.state.mcqActive
        }
        elementText="Multiple choice question"/></Row> <Row><Input elementType="radio" checked= {
            this.queTypeHandler
        }
        activeStatus= {
            this.state.submissionActive
        }
        elementText="Submission type question"/></Row> <Row><Input elementType="radio" checked= {
            this.queTypeHandler
        }
        activeStatus= {
            this.state.passageActive
        }
        elementText="Passage(text) type question"/></Row> {
            queElement
        }
        </div> <div style= {
            {
                width: '100%', padding: '50px 0px', background: '#f8f8f8'
            }
        }
        > <div style= {
            {
                width: '80%', margin: '0 auto', padding: '0px 25px'
            }
        }
        > <Row> <Col xs= {
            12
        }
        md= {
            8
        }
        > <Row>Click author to create new question and will be added autometically to the question list.</Row> </Col> <Col xs= {
            12
        }
        md= {
            4
        }
        > <Button style= {
            {
                width: '45%'
            }
        }
        className="pull-left" onClick= {
            this.onCancelHandler
        }
        >Cancel</Button> <Button bsStyle="primary" style= {
            {
                width: '45%'
            }
        }
        className="pull-right" onClick= {
            this.onAuthorClickHandler
        }
        >Author</Button> </Col> </Row> </div> </div> </div>);
    }
}

export default withRouter(QuestionBuilder);