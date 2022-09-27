import axios from 'axios';

const addEncuesta = async (valor, feedback, id_usuario) => {
    return await axios.post('http://localhost:5000/api/encuesta/registrarDato', {
                    valor,
                    feedback,
                    id_usuario
                })
}

const getEncuesta = async () => {
    return await axios('http://localhost:5000/api/encuesta/datos', {id_usuario: 4})
}

export {
    addEncuesta,
    getEncuesta
}