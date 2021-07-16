import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'


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
    width: 100px;
    height: 120px;
    margin: 5px;
`


export const Pokemon = ({thisPokemon}) => {
    
    const[onePokemon, setOnePokemon] = useState({
        sprites: {
            front_default: ""
        }
    })
    const getPokemon = (url) => {
        axios.get(url)
        .then((res) => {
            console.log(res.data)
            setOnePokemon(res.data)
        })
        .catch((err)=> {
            console.log(err)
        })
    }

    useEffect(() => {
        getPokemon(thisPokemon.url)
    },[])

    return (
        <div>  
            <CardPokemon >
                <div>
                    <Img src ={onePokemon.sprites.front_default}  />
                </div>
                <DivButton>
                    <SpecificButton>Adicionar a pokedex</SpecificButton>
                    <SpecificButton>Ver Detalhes</SpecificButton>
                </DivButton>
            </CardPokemon>
        </div>
    )
}