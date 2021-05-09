import React, { useState, useEffect } from 'react';
import Target from './Target';
import './styles/Facts.css';

function Facts(props){
    const [datos , setData] = useState([]);

    const getData = async() => {
        const respuesta = await fetch('https://rickandmortyapi.com/api/character');
        const data = await respuesta.json();
        
        setData(data.results);
    };
    useEffect( () =>{
        getData(); 
    }, []);

    return(
        <div className={props.className}>
            {datos.map((person)=>{
                return(
                    <Target image={person.image} name={person.name} planet={person.location.name}/>
                )
            }
            )}
        </div>

    )
}

export default Facts;
