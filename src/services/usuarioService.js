import { axiosInstance } from '../helpers/axios-confit';

const getUsuarios =() => {
    return axiosInstance.get('usuario', {
       
        headers: {
            'content-type': 'application/json'

        }
    });
}

const crearUsuario = (data) => {
    return axiosInstance.post('usuario', data,{
        headers: {
            'content-type': 'application/json'
        }
    });
}

const editarUsuario = (usuarioId, data) => {
    return axiosInstance.put(`usuario/${usuarioId}`, data, {
        headers: {
            'content-type': 'application/json'
        }
    });
}

export {
    getUsuarios, crearUsuario, editarUsuario
}