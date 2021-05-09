import React, { useState } from 'react';
import './styles/DarkMode.css'

function DarkMode() {
    const [mode, setMode] = useState(false)

    const handleClick = () =>{
        setMode(!mode)
        const container = document.querySelector('.master-container');
        container.classList.toggle('dark-background')
    }

    // if (mode === true){
    //     container.classList.add('dark-background')
    // }
    // if (mode === false){
    //     container.classList.remove('dark-background')
    // }

    return(
        <div className="mode-container">
            <p>Change Mode</p>
            <button onClick={handleClick}>{mode ? 'Ligth Mode': 'Dark Mode'}</button>
        </div>
    )
}

export default DarkMode;