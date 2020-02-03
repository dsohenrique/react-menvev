import React, { useState, useEffect } from 'react';
import personagem from './components/personagem'
import api from './service/api';

function App() {
 
  const [personagens, setPersonagens] = useState([])

  useEffect(() => {
    async function loadPersonagens() {
      const response = await api.get('people/10');
      setPersonagens([...personagens, response.data]);
    }
    loadPersonagens();
  }, [])
 
  return (
    <div id="app">
      <main>
        <ul>
         {personagens.map((personagem) => (
            <personagem key={personagem.name}>{personagem.name}</personagem>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;