import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { Header } from '../Container/Header/Header'
import imagemPokemon from '../img/pokemon.png'
import { useHistory, useParams } from "react-router-dom";
import GlobalStateContext from "../../global/GlobalStateContext";
import axios from "axios";


const DivContainer = styled.div`
    display: flex;
    align-items: center;
    padding-top: 60px;
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
    color: white;
    border-radius: 15px;
    display: grid;
    align-items: center;
    padding: 20px;
    grid-template-columns: 1fr 1fr 1fr;
`

const DivImages = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #6B0091;
    border-radius: 15px;
    margin: 15px;
    padding:15px;
`

const DescriptionP = styled.p`
    padding: 15px;
`

const Title =  styled.h2`
    color: #f9dd00;
`

const CardDescription = styled.div`
    background-color: #6B0091;
    border-radius: 15px;
    margin: 15px;
    padding:15px;
`

export const DetailPage = () => {
    const { name, telaPokedex } = useParams();
    const history = useHistory();
    const { pokemons, pokedex } = useContext(GlobalStateContext);
    const [selectedPokemon, setSelectedPokemon] = useState({});
  
    useEffect(() => {
        let current = [];
        if (telaPokedex) {
          current = pokedex.find((item) => {
            return item.name === name;
          });
        } else {
          current = pokemons.find((item) => {
            return item.name === name;
          });
        }
    
        if (!current) {
          axios
            .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
            .then((res) => setSelectedPokemon(res.data))
            .catch((err) => console.log(err.response.message));
        } else {
          setSelectedPokemon(current);
        }
      }, []);

    return (
        <div>
            <Header />
            <DivContainer>
                <h1>Blastoise</h1>
            </DivContainer>
            <DivCard>
            <CardPokemon>
                <DivImages>
                    <img src={imagemPokemon} alt="" />
                    <img src={imagemPokemon} alt="" />
                </DivImages>
                <CardDescription>
                    <Title>Status</Title>
                    <DescriptionP>hp: 60</DescriptionP>
                    <DescriptionP>attack: 62</DescriptionP>
                    <DescriptionP>defense: 63</DescriptionP>
                    <DescriptionP>special-attack: 80 </DescriptionP>
                    <DescriptionP>special-defense: 80 </DescriptionP>
                    <DescriptionP>speed: 60</DescriptionP>
                </CardDescription>
                <CardDescription>
                    <Title>Tipo</Title>
                    <DescriptionP>grass</DescriptionP>
                    <DescriptionP>poison</DescriptionP>
                    <Title>Principais ataques</Title>
                    <DescriptionP>swords-dance</DescriptionP>
                    <DescriptionP>cut</DescriptionP>
                    <DescriptionP>bind</DescriptionP>
                    <DescriptionP>vine-whip </DescriptionP>
                    <DescriptionP>headbutt </DescriptionP>
                </CardDescription>
            </CardPokemon>
           
        </DivCard>
        </div>
        
    )
}