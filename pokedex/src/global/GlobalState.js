import React, { useState } from "react";
import { GlobalStateContext } from "./GlobalStateContex";
import axios from "axios";

const GlobalState = (props) => {
    const [card, setCard] = useState ([])
    const [pokelist, setPokelist] = useState ([])

    const getPokelist = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon/1/')
        .then((res) => {
            console.log(res.data)
        }).catch ((err) => {
            alert(err.res.data)
        })
    }

    const data = {card, setCard, pokelist, setPokelist, getPokelist}

    return (
        <GlobalStateContext.Provider value={{data}}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState;

