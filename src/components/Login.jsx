import React, { useState } from 'react'
import { login, register } from '../services/authService';
import { Container } from '../Styles/StylesAuth'

const Login = ({log, setLog}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [registro, setRegistro] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target;

        switch(name){
            case 'email':
                return setEmail(value);
            case 'password':
                return setPassword(value);
            default:
                break;        
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(registro){
            register(email, password)
            setLog(false)
            setEmail('')
            setPassword('')
        }else{
            login(email, password)
            setLog(false)
            setEmail('')
            setPassword('')
        }

    }

    const registrar = () => {
        setRegistro(!registro)
    }

    const cerrar = () => {
        setLog(false)
    }

  return (
    <div>
        {
            registro ? (
                <Container>
                    <h3>Login</h3>
                    <form action="" onSubmit={handleSubmit}>
                        <input 
                            type="email" 
                            placeholder='email'
                            name='email'
                            value={email}
                            onChange={handleChange}
                        />
                        <input 
                            type="password" 
                            placeholder='password'
                            name='password'
                            value={password}
                            onChange={handleChange}
                        />
                        <button>Aceptar</button>
                    </form>
                </Container>
            )
            : (
                <Container>
                     <h3>Register</h3>
                    <form action="" onSubmit={handleSubmit}>
                        <input 
                            type="email" 
                            placeholder='email'
                            name='email'
                            value={email}
                            onChange={handleChange}
                        />
                        <input 
                            type="password" 
                            placeholder='password'
                            name='password'
                            value={password}
                            onChange={handleChange}
                        />
                        <button>Aceptar</button>
                    </form>
                </Container>
            )
        }
        <button
            onClick={() => registrar()}
        >{ registro ? 'Registrar' : 'Login' }</button>
        <button
            onClick={() => cerrar()}
        >Cancelar</button>
    </div>
  )
}

export default Login