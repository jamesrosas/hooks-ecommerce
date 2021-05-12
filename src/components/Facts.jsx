import React, { useState, useEffect, useReducer } from 'react';
import Target from './Target';
import './styles/Facts.css';

const initialState = {
    favorites: []
}

const favoriteReducer = (state, action) => {
    switch(action.type){
        case 'ADD_FAVORITES':
            return {
                ...state,
                favorites: [...state.favorites, action.payload]
            }
        default:
            return state
            
    }
}


function Facts(props){
    const [datos , setData] = useState([]);
    const [favorites, dispatch] = useReducer(favoriteReducer, initialState)

    const getData = async() => {
        const respuesta = await fetch('https://rickandmortyapi.com/api/character');
        const data = await respuesta.json();
        
        setData(data.results);
    };
    useEffect( () =>{
        getData(); 
    }, []);

    const handleClick = favorite =>{
        dispatch({
            type: 'ADD_FAVORITES',
            payload: favorite
        })
    }


    return(
        <React.Fragment>
            <div className="favorites-container">
                <h3>Favorites</h3><br/>
                {favorites.favorites.map(favorite=>(
                    <li key={favorite.id}>
                        <img className="favorite-badge" src={favorite.image}/>
                    </li>
                ))}
            </div>
            <div className={props.className}>
                {datos.map((person)=>{
                    return(
                        <div key={person.id}>
                            <Target image={person.image} name={person.name} planet={person.location.name}/>
                            <button className="favorite-button" onClick={() => handleClick(person)} >Agregar a Favoritos</button> 
                        </div>
                    )}
                )}
            </div>
        
        </React.Fragment>
    )
}

export default Facts;
