import './Card.css';
import React from "react";

//another component for css
const Card = (props) =>{
    const classes = 'card ' + props.className;
    
    return <div className={classes}> {props.children} </div>

}

export default Card;