import React, { useContext } from 'react'
import styled from 'styled-components'
import pokemon from '../img/pokemon.png'
import { Header } from '../Container/Header/Header'
import {Pokemon} from '../Container/Pokemon/Pokemon'
import { goToDetailsPage } from '../router/coordinator'
import { useHistory } from 'react-router-dom'
import GlobalStateContext from "../global/GlobalStateContext"



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
    const { pokedex } = useContext(GlobalStateContext);
    const history = useHistory()


    return (
        <div>
            <Header />
            <DivContainer>
                <h1>POKEDEX</h1>
            </DivContainer>
            <DivCard>
            {pokedex &&
                pokedex.map((thisPokemon) => {
                    return <Pokemon isPokedex key={thisPokemon.name} thisPokemon={thisPokemon} />;
            })}


            {/* <CardPokemon>
                <Img src ={pokemon} width='70%' />
                <DivButton>
                    <SpecificButton>Remover da Pokedex</SpecificButton>
                    <SpecificButton onClick={() => goToDetailsPage(history)} >Ver Detalhes</SpecificButton>
                </DivButton>
            </CardPokemon> */}


        </DivCard>
        </div>
        
    )
}