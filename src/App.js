import './App.css';
import Login from './components/Login';
import Navbar from './components/Navbar';
import { Container } from './Styles/StylesEncuesta';
import { addEncuesta } from './services/encuestaService';
import { useState } from 'react';

const App = () => {
  const [valorB, setValorB] = useState(0)
  const [feed, setFeed] = useState('')

  const botones = [0,1,2,3,4,5,6,7,8,9,10]

  const votar = (data) => {
    setValorB(data)
  }

  const handleChange = (e) => {
    setFeed(e.target.value)
  }

  const handleSubmit = (e) =>{ 
    e.preventDefault()
    addEncuesta(valorB, feed, valorB)
  }

  return (
    <div className="App">
      <Navbar />
      <Container>
        <h3>Encuesta</h3>
        <div>

        {
          botones.map(boton => (
            
            <button key={boton}
              onClick={() => votar(boton)}
            >
              { boton }</button>
          ))
        }
        </div>
        <br />
        <div>
          <h3>Feedback</h3>
          <form onSubmit={handleSubmit}>
            <textarea 
              cols={50} 
              rows={10}
              value={feed}
              onChange={handleChange}
            ></textarea>
            <button>Aceptar</button>
          </form>
        </div>
      </Container>
    </div>
  );
}

export default App;
