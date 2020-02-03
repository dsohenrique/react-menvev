import React, { useState, useEffect } from 'react';
import Personagem from './components/personagem'
import api from './service/api';

function App() {
 
  const [personagens, setPersonagens] = useState([])
  let listaPersonagens = [];


  function filtrarPersonagens(personagens){
    personagens.forEach((persongem, index) => {
      console.log(personagem);
      if(index <= 10 )
        listaPersonagens.push(personagem);
    });
  }

    
  useEffect(() => {
    async function loadPersonagens() {
      const response = await api.get('people');
        console.log(response.data.results)
      
      const listaPersonagens = response.data.results

      setPersonagens(response.data.results);
    }
    loadPersonagens();
    filtrarPersonagens(personagens);
  }, [])
  return (
    <div id="app">
      <main>
        <ul>
         {personagens.map((personagem, index) => (
            <Personagem key={index} personagem={personagem}/>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;