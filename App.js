import React, { useState, useEffect } from 'react';
import Personagem from './components/personagem'
import api from './service/api';

function App() {
 
  const [personagens, setPersonagens] = useState([])

  const personagensFiltrados = ((personagens)=> personagens.filter((value, index) => index < 10));
  
  useEffect(() => {
    async function loadPersonagens() {
      const response = await api.get('people');
      setPersonagens([...personagens, response.data.results]);
    console.log(response.data.results);
    }
    loadPersonagens();
  }, [])
  return (
    <div id="app">
      <main>
        <ul>
         {personagens.map((personagem, index) => (
            <Personagem key={index} nome={personagem.name} cor={personagem.eye_color}/>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;