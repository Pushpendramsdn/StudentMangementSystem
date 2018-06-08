import React from 'react';
import classes from './Modal.css';
import {Modal, Button} from 'react-bootstrap';
import Input from '../Input/Input'
const modal = (props) => {
    return(
    <div>
        <Modal.Dialog>
            <Modal.Header>
                <Modal.Title>Please Select Login</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>I am a ...</p>
                <Input elementType="radio" elementText="Teacher" checked={props.userChecked} activeStatus={props.teacherStatus}/>
                <Input elementType="radio" elementText="Student" checked={props.userChecked} activeStatus={props.studentStatus}/>
            </Modal.Body>

            <Modal.Footer>
                <span className={classes.modalFooter}>Please login to continue ...</span>
                    <Button onClick={props.cancelClicked}>Cancel</Button>
                    <Button bsStyle="primary" onClick={props.loginClicked}>Login</Button>
            </Modal.Footer>
        </Modal.Dialog>
    </div>   
    );
};

export default modal;