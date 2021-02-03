import React from 'react'

const Name = (props) => {
    
    return isNaN(props.value) ?  <p>this is word : {props.value} </p> : <p> this is number : {props.value} </p>
}

export default Name
