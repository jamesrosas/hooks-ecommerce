import React, {useContext} from 'react';
import './styles/Target.css';
import colorContext from '../context/colorContext'

function Target(props){
    const context = useContext(colorContext);
    return(
        <div className="target-container">
            <img className="fact-img" src={props.image}/>
            <h2 className="fact-title">{props.name}</h2>
            <p className="fact-text"><strong>Planet: </strong>{props.planet}</p>
            <p><small>Hecho por: {context.state.nombre} {context.state.apellido} (James Rosas lo traje con context)</small></p>
        </div>
    )
}

export default Target;