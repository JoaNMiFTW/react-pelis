export const GuardarEnStorage = (key, item) => {
    //Conseguir los elementos que ya tenemos
    let items = JSON.parse(localStorage.getItem(key))

    //Comprobar que sea un array
    if(Array.isArray(items)){
        //Añadir elemento nuevo
        items.push(item)
    }else{
        //Crear array con la item
        items = [item]
    }

    //Guardar en el localStorage
    localStorage.setItem(key, JSON.stringify(items))

    //devolver objeto
    return item
}