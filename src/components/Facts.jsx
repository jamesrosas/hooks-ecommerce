import React, { useState, useEffect, useReducer, useMemo, useRef } from 'react';
import Target from './Target';
import './styles/Facts.css';

const initialState = {
    favorites: []
}

const favoriteReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_FAVORITES':
            return {
                ...state,
                favorites: [...state.favorites, action.payload] //payload es como la informacion nueva que se recibira en el state, esta es una informacion que se recibe en forma de objeto. el action payload no equivale a toda la tarea que se retorna de nuestro type, sino que es solo donde usamos action.payload que es la informacion nueva que se agrega en state. entonces con ...state copiamos todo lo que hay en el state global, y con favorite: [...state.favorites, ] todo lo que ya hay en nuestra key de favorites. de modo que despues cuanod queramos acceder a esta informarcion usaremos la ruta  state.favorites  , ya que recordemos que la palabra state fue la que definimos e nuestro hook de useReducer como nuestro estado global por esto tenemos que const [state, dispatch] = useReducer(favoriteReducer, initialState)  entnces como vemos initialState es nuestro mismo state solo que con el nombre de la constante donde tenemos guardado nuestro estado.
            }
        default:
            return state

    }
}


function Facts(props) {
    const [datos, setData] = useState([]);
    const [myState, dispatch] = useReducer(favoriteReducer, initialState)
    const [searchState, setSearchState] = useState('')
    const inputRef = useRef(null)

    const getData = async () => {
        const respuesta = await fetch('https://rickandmortyapi.com/api/character');
        const data = await respuesta.json();

        setData(data.results);
    };
    useEffect(() => {
        getData();
    }, []);

    const handleClick = (favorite)=> {
        dispatch({
            type: 'ADD_FAVORITES',
            payload: favorite 
            // payload: { name: 'james', img: 'IMG', id: 'jdjdjeiejdl' }
        })
    }

    const filteredPersons = useMemo(() => datos.filter((data) =>{
        return data.name.toLowerCase().includes(searchState.toLowerCase())
    })
    , [datos, searchState]);
   

    const handleChange = ()=>{
        setSearchState(inputRef.current.value)
    }
    // const handleChange = (event) => {
    //     setSearchState(event.target.value)  usar event.target no es tan exacto como useRef con el cual podemos especdificar directamente a que elemento no estamos refiriendo para aplicarle el hanldeChange, es como si utilizaramos un document.getElementById() para referenciar el input
    // } 



    return (
        <React.Fragment>
            <div className="search-container">
                <p>Busca un personaje</p>
                <input className="search-input" type="text" value={searchState} ref={inputRef} onChange={handleChange} />
            </div>
            <div className="favorites-container">
                <h3>Favorites</h3><br />
                {myState.favorites.map(favorite => (
                    <li key={favorite.id}>
                        {/* <p>{favorite.img} {favorite.name}</p> */}
                        <img className="favorite-badge" src={favorite.image}/>
                    </li>
                ))}
            </div>
            <div className={props.className}>
                {filteredPersons.map((person) => {
                    return (
                        <div key={person.id}>
                            <Target image={person.image} name={person.name} planet={person.location.name} />
                            <button className="favorite-button" onClick={() => handleClick(person)} >Agregar a Favoritos</button>
                        </div>
                    )
                }
                )}
                {filteredPersons.length === 0 && (
                    <div className="no-results_container">
                        <p className="no-results_title">OOps! parece que el personaje que buscas no existe</p>
                    </div>
                )                 
                }
            </div>

        </React.Fragment>
    )
}

export default Facts;
