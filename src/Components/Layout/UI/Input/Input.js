import React from 'react';

import classes from './Input.css';
import {FormGroup, Checkbox, Radio, FormControl,ControlLabel, Col} from 'react-bootstrap';

const input = ( props ) => {
    let inputElement = null;

    switch ( props.elementType ) {
        case ( 'input' ):
            inputElement = <FormGroup>
                                <ControlLabel>{props.elementLabel}</ControlLabel>
                                <FormControl type="text" placeholder={props.elementPlaceholder} onBlur={(event) => props.changed(event)} defaultValue={props.value}/>
                            </FormGroup>
            break;
        case ( 'radio' ):
            inputElement =  <FormGroup>
                                <Radio disabled={props.active} id ={props.elementText} checked={props.activeStatus} onChange={(element) => props.checked(props.elementText)}>{props.elementText}</Radio>
                            </FormGroup>;
            break;
        case('checkbox'):
            inputElement=   <FormGroup>
                                <Checkbox inline value={props.value} defaultChecked={props.checked} onChange={(event) => props.changed(event)}>{props.elementText}</Checkbox>
                            </FormGroup>;
            break;                
        case ( 'textarea' ):
            inputElement =  <FormGroup>
                                <ControlLabel>Textarea</ControlLabel>
                                <FormControl componentClass="textarea" placeholder="textarea" />
                            </FormGroup>;
            break;
        case ( 'select' ):
            inputElement = (
                             <FormGroup>
                                <ControlLabel>Multiple select</ControlLabel>
                                <FormControl componentClass="select" multiple>
                                    <option value="select">select (multiple)</option>
                                    <option value="other">...</option>
                                </FormControl>
                            </FormGroup>
            );
            break;
        default:
            inputElement = <input
                className={classes.InputElement}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
    }

    // return (
    //     <div>
    //         {inputElement}
    //     </div>
    // );
    return inputElement;
};

export default input;