import React from 'react';
import classes from './MultipleChoiceQuestion.css';
import {
 Row,
 Col
}
from 'react-bootstrap';
import Input from '../Layout/UI/Input/Input';
const multipleChoiceQuestion = (props) => {
 console.log(props.quedata);
 return ( < Row >
  < Input elementType = "input"
  elementLabel = "Question Title:"
  changed = {
   props.Title
  }
  elementPlaceholder = "Type your question title here ..."
  value = {
   props.quedata.queTitle
  }
  /> < Input elementType = "input"
  elementLabel = "Question Description:"
  changed = {
   props.Description
  }
  elementPlaceholder = "Type your question description here ..."
  value = {
   props.quedata.queDescription
  }
  /> < Row >
  < Col xs = {
   9
  }
  md = {
   9
  } >
  < b > Answer Options: < /b> < /Col> < Col xs = {
   3
  }
  md = {
   3
  } >
  < b className = "pull-right" > Correct Answer: < /b> < /Col> < /Row> < Row >
  < Col xs = {
   10
  }
  md = {
   10
  } >
  < Input elementType = "input"
  changed = {
   props.Options
  }
  elementPlaceholder = "Type your option A here ..."
  value = {
   props.quedata.optA
  }
  /> < /Col> < Col xs = {
   2
  }
  md = {
   2
  }
  style = {
   {
    textAlign: 'center',
    lineHeight: '3'
   }
  } >
  < Input elementType = "checkbox"
  checked = {
   props.optionACheck
  }
  value = "A"
  changed = {
   props.CheckBox
  }
  /> < /Col> < /Row> < Row >
  < Col xs = {
   10
  }
  md = {
   10
  } >
  < Input elementType = "input"
  changed = {
   props.Options
  }
  elementPlaceholder = "Type your option B here ..."
  value = {
   props.quedata.optB
  }
  /> < /Col> < Col xs = {
   2
  }
  md = {
   2
  }
  style = {
   {
    textAlign: 'center',
    lineHeight: '3'
   }
  } >
  < Input elementType = "checkbox"
  checked = {
   props.optionBCheck
  }
  value = "B"
  changed = {
   props.CheckBox
  }
  /> < /Col> < /Row> < Row >
  < Col xs = {
   10
  }
  md = {
   10
  } >
  < Input elementType = "input"
  changed = {
   props.Options
  }
  elementPlaceholder = "Type your option C here ..."
  value = {
   props.quedata.optC
  }
  /> < /Col> < Col xs = {
   2
  }
  md = {
   2
  }
  style = {
   {
    textAlign: 'center',
    lineHeight: '3'
   }
  } >
  < Input elementType = "checkbox"
  checked = {
   props.optionCCheck
  }
  value = "C"
  changed = {
   props.CheckBox
  }
  /> < /Col> < /Row> < Row >
  < Col xs = {
   10
  }
  md = {
   10
  } >
  < Input elementType = "input"
  changed = {
   props.Options
  }
  elementPlaceholder = "Type your option D here ..."
  value = {
   props.quedata.optD
  }
  /> < /Col> < Col xs = {
   2
  }
  md = {
   2
  }
  style = {
   {
    textAlign: 'center',
    lineHeight: '3'
   }
  } >
  < Input elementType = "checkbox"
  checked = {
   props.optionDCheck
  }
  value = "D"
  changed = {
   props.CheckBox
  }
  /> < /Col> < /Row> < Input elementType = "input"
  elementLabel = "Instructions:"
  changed = {
   props.Instructions
  }
  elementPlaceholder = "Type Instructions here ...(eg. file size, file format etc.)"
  value = {
   props.quedata.queInstruction
  }
  /> < /Row>   
 );
};

export default multipleChoiceQuestion;