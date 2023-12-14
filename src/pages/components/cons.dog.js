import Dog from "./Dog";

const URL = "http://localhost:5173/";

export const getAllPerros = async () => {
    const res = await fetch(URL+'/perros');
    const data = await res.json();
    return data;
};

export const  buscarPerroso = async (estado) => {
    const res = await fetch(URL+'/perros/buscar?estado='+estado);
    const data = await res.json();
    return data;
}

export const eliminarPerro = async (id) => {
    const res = await fetch(URL+'/perros/'+id, {
        method: 'DELETE'
    });
    const data = await res.json();
    return data;
}

export const crearPerro = async (Dog) => {
    const res = await fetch(URL+'/perros', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(Dog)
    });
    const data = await res.json();
    return data;
}