import React from 'react'

function Personagem({name, cor}) {
    return (
        <li className="personagem">
            <header>
                <div className="personagem-info">
                    <strong>{name}</strong>
                    <strong>{cor}</strong>
                </div>
            </header>
        </li>
    )
}
export default Personagem