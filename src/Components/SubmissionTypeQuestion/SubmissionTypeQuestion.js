import React from 'react';
import classes from './SubmissionTypeQuestion.css';
import {Row, Col} from 'react-bootstrap';
import Input from '../Layout/UI/Input/Input';
const submissionTypeQuestion = (props) => {
    return(
    <Row>
        <Input elementType="input" elementLabel="Question Title:" changed={props.Title} elementPlaceholder="Type your question title here ..." value={props.quedata.queTitle}/>
        <Input elementType="input" elementLabel="Question Description:" changed={props.Description} elementPlaceholder="Type your question description here ..." value={props.quedata.queDescription}/>
        <Input elementType="input" elementLabel="Instructions:" changed={props.Instructions} elementPlaceholder="Type Instructions here ...(eg. file size, file format, do's and don'ts etc.)" value={props.quedata.queInstruction}/>
    </Row>   
    );
};

export default submissionTypeQuestion;