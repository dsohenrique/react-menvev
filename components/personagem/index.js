import React from 'react'



function Personagem({personagem}) {

    return (
      <li className="personagem">
        <div className="personagem-info">
            <strong style={{color: personagem.eye_color}}>{personagem.name}</strong>
        </div>
      </li>
    )
}
export default Personagem