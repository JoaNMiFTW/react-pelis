import React from 'react'

export const Editar = ({peli, conseguirPeliculas, setEditar, setListadoState}) => {

    const tituloComponente = "Editar pelicula"

    const guardarEdicion = (e, id) => {
        e.preventDefault()

        //Conseguir el target del evento
        let target = e.target

        //buscar el indice del objeto de la pelicula a actualizar
        const peliculasAlmacenadas = conseguirPeliculas()
        const indice = peliculasAlmacenadas.findIndex(peli => peli.id === id)

        //Crear objeto con ese id de ese indice, titulo y descripcion
        let peliActualizada = {
            id,
            titulo: target.titulo.value,
            descripcion: target.descripcion.value
        }

        //Actualizar el elemento con ese indice
        peliculasAlmacenadas[indice] = peliActualizada

        //Guardar el nuevo array de objeto en el localStorage
        localStorage.setItem('pelis', JSON.stringify(peliculasAlmacenadas))

        //Actualizar estados
        setListadoState(peliculasAlmacenadas)
        setEditar(0)
    }

    return (
        <div className="edit_form">
            <h3 className="title">{tituloComponente}</h3>
            <form onSubmit={ e => guardarEdicion(e, peli.id)}>
                <input
                    type="text"
                    name='titulo'
                    className='titulo_editado'
                    defaultValue={peli.titulo}
                />
                <textarea
                    name="descripcion"
                    className='descripcion_editada'
                    defaultValue={peli.descripcion}
                />

                <input type="submit" className='editar' value="Actualizar" />
            </form>
        </div>
    )
}
