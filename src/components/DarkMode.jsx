import React, { useState } from 'react';
import './styles/DarkMode.css'

function DarkMode() {
    const [mode, setMode] = useState(false)

    const handleClick = () =>{
        setMode(!mode)
        const container = document.querySelector('.facts-container');
        container.classList.toggle('dark-background')
    }

    return(
        <div className="mode-container">
            <p>Change Mode</p>
            <button onClick={handleClick}>{mode ? 'Light Mode ClassList': 'Dark Mode ClassList'}</button>
        </div>
    )
}

export default DarkMode;