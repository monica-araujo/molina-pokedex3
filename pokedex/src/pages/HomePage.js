import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios' 
import banner from '../img/banner.jpeg'
import pokemon from '../img/pokemon.png'
//import { GlobalStateContext } from '../global/GlobalStateContext'

const BannerImg = styled.img`
    width: 100%;
    height: 550px;
    background-size: cover;
`

const DivCard = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 15px;
    align-items: center;
    justify-content: center;
`

const CardPokemon = styled.div`
    background-color:  rgba(25, 0, 51, 0.9);
    color: black;
    width: 200px;
    height: 200px;
    border-radius: 15px;
    border: 1px solid black;
    align-items: center;
    display: flex;
    flex-direction: column;
    margin: 15px;
`
const DivButton = styled.div`
    display: flex;
    
`
const SpecificButton = styled.button`
    border-radius: 25px;
    width: 90px;
    cursor:pointer;
    background-color: purple;
    margin: 5px;
    color: white;
    &:hover{
        font-weight: bold;
    }
`
const Img = styled.img`
    align-items: center;
`
export const HomePage = () => {
    /*const {data} = useContext(GlobalStateContext)
    const {card, setCard} = data
    const {pokelist, setPokelist} = data
    const {getPokelist} = data

    useEffect (() => {
        console.log(data)
    }, [])*/

    const [pokemons, setPokemons] = useState([])
    
    useEffect (() => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=20')
        .then((res) => {
            setPokemons(res.data)
            console.log(res.data)
        }).catch ((err) => {
            alert(err.res.data)
        })
    }, [])

    const [listPokemons, setListPokemons] = useState([])
    
    
    return (
        <div>
            <div>
                <BannerImg src={banner} />;
            </div>
            <DivCard>
                {
                    pokemons?(<CardPokemon>
                        <Img src ={pokemon} width='70%' />
                        <DivButton>
                            <SpecificButton>Adicionar a pokedex</SpecificButton>
                            <SpecificButton>Ver Detalhes</SpecificButton>
                        </DivButton>
                    </CardPokemon>):(<div>Carregando</div>)
                }
                <CardPokemon>
                    <Img src ={pokemon} width='70%' />
                    <DivButton>
                        <SpecificButton>Adicionar a pokedex</SpecificButton>
                        <SpecificButton>Ver Detalhes</SpecificButton>
                    </DivButton>
                </CardPokemon>
                <CardPokemon>
                    <Img src ={pokemon} width='70%' />
                    <DivButton>
                        <SpecificButton>Adicionar a pokedex</SpecificButton>
                        <SpecificButton>Ver Detalhes</SpecificButton>
                    </DivButton>
                </CardPokemon>
                <CardPokemon>
                    <Img src ={pokemon} width='70%' />
                    <DivButton>
                        <SpecificButton>Adicionar a pokedex</SpecificButton>
                        <SpecificButton>Ver Detalhes</SpecificButton>
                    </DivButton>
                </CardPokemon>
                <CardPokemon>
                    <Img src ={pokemon} width='70%' />
                    <DivButton>
                        <SpecificButton>Adicionar a pokedex</SpecificButton>
                        <SpecificButton>Ver Detalhes</SpecificButton>
                    </DivButton>
                </CardPokemon>
                <CardPokemon>
                    <Img src ={pokemon} width='70%' />
                    <DivButton>
                        <SpecificButton>Adicionar a pokedex</SpecificButton>
                        <SpecificButton>Ver Detalhes</SpecificButton>
                    </DivButton>
                </CardPokemon>
                <CardPokemon>
                    <Img src ={pokemon} width='70%' />
                    <DivButton>
                        <SpecificButton>Adicionar a pokedex</SpecificButton>
                        <SpecificButton>Ver Detalhes</SpecificButton>
                    </DivButton>
                </CardPokemon>
                <CardPokemon>
                    <Img src ={pokemon} width='70%' />
                    <DivButton>
                        <SpecificButton>Adicionar a pokedex</SpecificButton>
                        <SpecificButton>Ver Detalhes</SpecificButton>
                    </DivButton>
                </CardPokemon>

            </DivCard>
        </div>
    )
}