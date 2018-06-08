import React from 'react';
import classes from './Question.css';
import {
 Row,
 Col
}
from 'react-bootstrap';
import Input from '../Layout/UI/Input/Input';
const question = (props) => {
 return (

  < div style = {
   {
    margin: "15px 0px"
   }
  } >
  < Row className = {
   classes.queContainer
  } >
  < Col xs = {
   12
  }
  md = {
   1
  } >
  < Row >
  < Col xs = {
   3
  }
  md = {
   6
  }
  style = {
   {
    textAlign: "right",
    padding: '15px 19px 15px 0'
   }
  } >
  < Input elementType = "checkbox"
  checked = {
   props.alreadyChecked
  }
  value = {
   props.id
  }
  changed = {
   props.queChecked
  }
  /> < /Col> < Col xs = {
   9
  }
  md = {
   6
  }
  style = {
   {
    border: '1px solid #ccc',
    background: '#f8f8f8',
    textAlign: 'center',
    padding: '15px 0px 15px 0'
   }
  } >
  < Row > S.No. < /Row> < Row > {
   props.serialNumber
  } < /Row> < /Col> < /Row> < /Col> < Col xs = {
   12
  }
  md = {
   9
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