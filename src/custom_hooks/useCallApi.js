import React, { useState, useEffect } from 'react'

const useCallApi = url => {
    const [datos, setDatos] = useState([])

    useEffect(async()=>{
        const response = await fetch(url)
        const data = await response.json()

        setDatos(data.results)
    },[url]) 
// decidi hacer directamnete la peticion a la API dentro de useEffect en lugar de hacerla aparte , por el tema de que en useEffect estamos observando el parametro de 'url', con lo cual si haicemos el llamado e una funcion a parte y despues la instanciabasmo dentro de useEffect creo que asi talves no se estaria tomando el parametro 'url que es el que queremos observar, entonces para estar seguros de que useEffect observara a 'url' por eso decidi hacer la peticion directamente dentro de la funcion de useEffect. 
    return datos;
}

export default useCallApi;