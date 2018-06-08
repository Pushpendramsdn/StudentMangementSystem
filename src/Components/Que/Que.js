import React from 'react';
import classes from './Que.css';
import {
 Row,
 Col
}
from 'react-bootstrap';
import Input from '../Layout/UI/Input/Input';
const question = (props) => {
 return ( < div className = {
   classes.container
  } >
  < Row className = {
   classes.queContainer
  } >
  < Col xs = {
   12
  }
  md = {
   2
  }
  style = {
   {
    border: '1px solid #ccc',
    background: '#f8f8f8',
    textAlign: 'center',
    padding: '15px 0px 15px 0'
   }
  } >
  < Row > S.No. < /Row> < Row > < b > {
   props.serialNumber
  } < /b></Row >
  < /Col> < Col xs = {
   12
  }
  md = {
   8
  }
  style = {
   {
    borderTop: '1px solid #ccc',
    borderBottom: '1px solid #ccc',
    padding: '15px 0px 15px 25px',
    cursor: 'pointer'
   }
  }
  onClick = {
   props.edit
  } >
  < Row > < b > {
   props.title
  } < /b></Row >
  < Row > {
   props.description
  } < /Row> < /Col> < Col xs = {
   12
  }
  md = {
   2
  }
  style = {
   {
    border: '1px solid #ccc',
    background: '#f8f8f8',
    textAlign: 'center',
    padding: '15px 0px 15px 0'
   }
  } >
  < Row > QUESTION TYPE < /Row> < Row > < b > {
   props.type
  } < /b></Row >
  < /Col> < /Row> < /div>   
 );
};

export default question;