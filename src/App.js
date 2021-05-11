import React, { useContext, useState } from 'react';
import './App.css';
import DarkMode from './components/DarkMode'
import Facts from './components/Facts';
import colorContext from './context/colorContext'

function App() {

  const [backColor, setbackColor] = useState(false)

  const context = useContext(colorContext);

  const handleClick = () =>{
    setbackColor(!backColor)
  }
  const color = context.state.color

  return (
   <div style={backColor? {background: 'white', color: 'rgb(6, 105, 105)'}: {background: 'rgb(3, 3, 54)', color: 'chartreuse'} }  className="master-container">
     <header>
       <h2>{context.state.title}</h2>
       <h1 style={{color}}>la tienda mas chida <small>(color de titulo usando Context)</small></h1>
       <button onClick={handleClick}>{backColor ? 'Darkmode rederizado condicional': 'Light Mode renderizado condicional'}</button>
       <DarkMode/>
     </header>
       <Facts className="facts-container"/>
   </div>
  );
}

export default App;
