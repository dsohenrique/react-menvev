import React, { useState, useEffect } from 'react'
import api from './api'
import Personagem from './components/personagem';

function App() {
 
  const [personagens, setPersonagens] = useState([])

  useEffect(() => {
    async function loadPersonagens() {
      const response = await api.get('/people/10')
      setPersonagens(response.data)
    }
    loadDevs()
  }, [])
 
  return (
    <div id="app">
      <main>
        <ul>
         asdsa
        </ul>
      </main>
    </div>
  );
}

export default App;