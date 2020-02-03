import React from 'react'
import './styles.css'

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
export default personagem