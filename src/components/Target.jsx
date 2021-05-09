import React from 'react';
import './styles/Target.css';

function Target(props){
    return(
        <div className="target-container">
            <img className="fact-img" src={props.image}/>
            <h2 className="fact-title">{props.name}</h2>
            <p className="fact-text"><strong>Planet: </strong>{props.planet}</p>
        </div>
    )
}

export default Target;