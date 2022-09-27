import axios from 'axios';

const register = async (email, password) => {
    return await axios.post('http://localhost:5000/api/auth/register', {
        email, 
        password
    })
}

const login = async (email, password) => {
    return await axios.post('http://localhost:5000/api/auth/login', {
        email, 
        password
    })
}

export {
    register, 
    login
}