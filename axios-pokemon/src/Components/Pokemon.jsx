import React from 'react'

const Pokemon = ({ lista }) => {
    return (
        <div>
            {lista.map((poke, idx) => {
                return <p key={idx}>{idx}- {poke}</p>
            })}
        </div>
    )
}

export default Pokemon