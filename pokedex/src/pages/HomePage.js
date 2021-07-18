import React, { useContext } from 'react'
import styled from 'styled-components'
import banner from '../img/pokemon-banner.jpg'
import {PokemonCard} from '../Container/PokemonCard/PokemonCard'
import { Header } from '../Container/Header/Header'
import GlobalStateContext from "../global/GlobalStateContext";

const BannerImg = styled.img`
    width: 100%;
    height: 550px;
    background-size: cover;
`




export const HomePage = () => {
    const { pokemons } = useContext(GlobalStateContext);

    

    
    
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