import React from 'react'
import styled from 'styled-components'
import axios from 'axios' 
import pokemon from '../img/pokemon.png'
import { Header } from '../Container/Header/Header'

const DivContainer = styled.div`
    display: flex;
    align-items: center;
    padding-top: 100px;
    justify-content: center;
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
    width: 95px;
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

export const Pokedex = () => {
    return (
        <div>
            <Header />
            <DivContainer>
                <h1>POKEDEX</h1>
            </DivContainer>
            <DivCard>
            <CardPokemon>
                <Img src ={pokemon} width='70%' />
                <DivButton>
                    <SpecificButton>Remover da Pokedex</SpecificButton>
                    <SpecificButton>Ver Detalhes</SpecificButton>
                </DivButton>
            </CardPokemon>
            <CardPokemon>
                <Img src ={pokemon} width='70%' />
                <DivButton>
                    <SpecificButton>Remover da Pokedex</SpecificButton>
                    <SpecificButton>Ver Detalhes</SpecificButton>
                </DivButton>
            </CardPokemon>
            <CardPokemon>
                <Img src ={pokemon} width='70%' />
                <DivButton>
                    <SpecificButton>Remover da Pokedex</SpecificButton>
                    <SpecificButton>Ver Detalhes</SpecificButton>
                </DivButton>
            </CardPokemon>
            <CardPokemon>
                <Img src ={pokemon} width='70%' />
                <DivButton>
                    <SpecificButton>Remover da Pokedex</SpecificButton>
                    <SpecificButton>Ver Detalhes</SpecificButton>
                </DivButton>
            </CardPokemon>
            <CardPokemon>
                <Img src ={pokemon} width='70%' />
                <DivButton>
                    <SpecificButton>Remover da Pokedex</SpecificButton>
                    <SpecificButton>Ver Detalhes</SpecificButton>
                </DivButton>
            </CardPokemon>
            <CardPokemon>
                <Img src ={pokemon} width='70%' />
                <DivButton>
                    <SpecificButton>Remover da Pokedex</SpecificButton>
                    <SpecificButton>Ver Detalhes</SpecificButton>
                </DivButton>
            </CardPokemon>
            <CardPokemon>
                <Img src ={pokemon} width='70%' />
                <DivButton>
                    <SpecificButton>Remover da Pokedex</SpecificButton>
                    <SpecificButton>Ver Detalhes</SpecificButton>
                </DivButton>
            </CardPokemon>

        </DivCard>
        </div>
        
    )
}