import React, { useState, useEffect } from 'react';
import Personagem from '/personagem'
import Api from './service/api';

function App() {
 
  const [personagens, setPersonagens] = useState([])

  useEffect(() => {
    async function loadPersonagens() {
      const response = await Api.get('/people/10');
      setPersonagens(response.data);
    }
    loadDevs();
  }, [])
 
  return (
    <div id="app">
      <main>
        <ul>
         {personagens.map(personagem => (
            <Personagem key={personagen.name} personagem={personagem} />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;