import React, { useEffect, useState } from 'react'
import { Editar } from './Editar';

export const Listado = ({ listadoState, setListadoState }) => {

    //const [listadoState, setListadoState] = useState([])

    const [editar, setEditar] = useState(0)

    useEffect(() => {
        conseguirPeliculas();
    }, [])

    const conseguirPeliculas = () => {
        let peliculas = JSON.parse(localStorage.getItem('pelis'))

        setListadoState(peliculas)

        return peliculas
    }

    const borrarPeli = (id) => {
        //Conseguir peliculas almacenadas
        let peliculasGuardadas = conseguirPeliculas()

        //Filtrar esas peliculas para que elimine del array la que no quiero
        let nuevoListadoPeliculas = peliculasGuardadas.filter(peli => peli.id !== parseInt(id))

        //Actualizar estado del listado
        setListadoState(nuevoListadoPeliculas)

        //Actualizar los datos en el localStorage
        localStorage.setItem('pelis', JSON.stringify(nuevoListadoPeliculas))
    }

    return (
        <>
            {
                listadoState != null ?
                    listadoState.map(peli => {
                        return (
                            <article key={peli.id} className="peli-item">
                                <h3 className="title">{peli.titulo}</h3>
                                <p className="description">{peli.descripcion}</p>

                                <button onClick={() => { setEditar(peli.id) }} className="edit">Editar</button>
                                <button onClick={() => borrarPeli(peli.id)} className="delete">Borrar</button>

                                {/*aparece formulario de editar*/}
                                {editar === peli.id && (
                                    <Editar
                                        peli={peli}
                                        conseguirPeliculas={conseguirPeliculas}
                                        setEditar={setEditar}
                                        setListadoState={setListadoState} />
                                )}

                            </article>
                        )
                    })
                    :
                    <h2>No hay peliculas para mostrar</h2>
            }
        </>
    )
}
