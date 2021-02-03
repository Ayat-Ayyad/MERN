import React from 'react'

const Color = props => {
    const wordStyle = {
        background : props.backgroundColor,
        color: props.color
    };
    return isNaN(props.value) ?  <p style={wordStyle}>this is word : {props.value} </p> : <p> {props.value} is not a word  </p>

};

export default Color
