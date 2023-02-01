import React, { useState } from 'react'
import axios from 'axios'
import Pokemon from './Pokemon';
const AxiosPokemon = () => {
    const [listPoke, setListPoke] = useState([]);

    const handleClick = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=1500').then(response => {
            let aux = response.data.results;
            let list = []
            aux.map((results) => {
                list.push(results.name)
                setListPoke([...list]);
            })
        })
    }

    return (<>
        <button onClick={handleClick}>Obtener Pokemon</button>
        <Pokemon lista={listPoke} />
    </>)
}


export default AxiosPokemon;