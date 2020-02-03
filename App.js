import React, { useState, useEffect } from "react";
import Personagem from "./components/personagem";
import api from "./service/api";

function App() {
  const [personagens, setPersonagens] = useState([]);
  const [listaPersonagens, setListaPersonagens] = useState([]);

  useEffect(() => {
    async function loadPersonagens() {
      const response = await api.get("people");
      setPersonagens(response.data.results);
    }
    loadPersonagens();
  }, []);
  return (
    <div id="app">
      <main>
        <ul>
          {personagens
            .sort((a, b) => {
              if (a.firstname < b.firstname) {
                return -1;
              }
              if (a.firstname > b.firstname) {
                return 1;
              }
              return 0;
            })
            .map((personagem, index) => (
              <Personagem key={index} personagem={personagem} />
            ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
