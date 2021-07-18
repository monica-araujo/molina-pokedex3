import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios' 
import banner from '../img/pokemon-banner.jpg'
import {PokemonCard} from '../Container/PokemonCard/PokemonCard'
import { Header } from '../Container/Header/Header'
//import { GlobalStateContext } from '../global/GlobalStateContext'

const BannerImg = styled.img`
    width: 100%;
    height: 550px;
    background-size: cover;
`

export const HomePage = () => {
    /*const {data} = useContext(GlobalStateContext)
    const {card, setCard} = data
    const {pokelist, setPokelist} = data
    const {getPokelist} = data

    useEffect (() => {
        console.log(data)
    }, [])*/

    const [pokemons, setPokemons] = useState([
       {name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/"}
    ]
    )

    const getPokemon =  () => {
        axios.get('https://pokeapi.co/api/v2/pokemon')
        .then((res) => {
            setPokemons(res.data.results)
        }).catch ((err) => {
            alert(err.res.data)
        })
    }
    
    useEffect (() => {
        getPokemon()
    }, [])
    
    
    return (
        <div>
            <Header />
            <div>
                <BannerImg src={banner} />
            </div>
                <PokemonCard pokemons={pokemons}/>                
        </div>
    )
}