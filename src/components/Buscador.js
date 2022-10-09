import React, { useState } from 'react'

export const Buscador = ({ listadoState, setListadoState }) => {

    const [busqueda, setBusqueda] = useState('')
    const [noEncontrado, setNoEncontrado] = useState(false)

    const buscarPeli = (e) => {
        //Crear estado y actualizarlo
        setBusqueda(e.target.value)

        //Filtrar para buscar cualquier coincidencia
        let pelisEncontradas = listadoState.filter(peli => {
            return peli.titulo.toLowerCase().includes(busqueda.toLocaleLowerCase())
        })

        if (busqueda.length <= 2 || pelisEncontradas == 0) {
            pelisEncontradas = JSON.parse(localStorage.getItem("pelis"))
            setNoEncontrado(true)
        } else {
            setNoEncontrado(false)
        }

        //Actualizar el estado del listado principal con lo que he logrado filtrar
        setListadoState(pelisEncontradas)
    }

    return (
        <div className="search">
            <h3 className="title">Buscador: {busqueda}</h3>
            {
                (noEncontrado == true && busqueda.length > 1) && (
                    <span className="no-encontrado">No se ha encontrado ninguna coincidencia.</span>
                )
            }
            <form>
                <input
                    type="text"
                    id="search_field"
                    name="busqueda"
                    autoComplete='off'
                    value={busqueda}
                    onChange={buscarPeli}
                />
                <button id="search">Buscar</button>
            </form>
        </div>
    )
}
