import './App.css';
import Login from './components/Login';
import Navbar from './components/Navbar';
import { Container, Modal } from './Styles/StylesEncuesta';
import { addEncuesta, getEncuesta } from './services/encuestaService';
import { useState, useEffect } from 'react';

const App = () => {
  const [valorB, setValorB] = useState(0)
  const [feed, setFeed] = useState('')
  const [enc, setEnc] = useState(null)
  const [load, setLoad] = useState(false)
  const [log, setLog] = useState(false)

  useEffect(() => {
    Promise.all([getEncuesta()])
      .then(values => {
        setEnc(values[0].data.encuesta)
        setLoad(true)
        console.log(values[0].data.encuesta)
      })
  }, [])
 
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
  console.log(valorB, feed)
  return (
    <div className="App">
      {
        log && (
          <Modal>
            <Login log={log} setLog={setLog}/>
          </Modal>
        )
      } 
      <Navbar log={log} setLog={setLog} />
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
        <div>
          {
            load && enc.map(e => (
              <h3>{e.valor}</h3>
            ))
          }
        </div>
        
      </Container>

      
    </div>
  );
}

export default App;
