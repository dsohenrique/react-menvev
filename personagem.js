import React from 'react'

function Personagem({personagem}) {
    return (
        <li className="personagem">
            <header>
                <div className="personagem-info">
                    <strong>{personagem.name}</strong>
                </div>
            </header>
        </li>
    )
}
export default Personagem;