import React from 'react'
import { Router } from './router/router'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: Arial, Helvetica, sans-serif
  }

  body {
    background-color: white;
    color: black;
  }

  button {
    border: none;
    cursor:pointer;
    padding: 10px;
  }
`


const Header = styled.header`
  background-color: #17034d;
  height: 50px;
  display: flex;
  align-items: center;
  padding-left: 15px;
`

const H1 = styled.h1`
  color: yellow;
`

function App() {
  return (
    <div>
      <GlobalStyle/>
        <Header>
          <H1>Pokedex</H1>
          <button>Pokedex</button>
        </Header>
        <Router />
    </div>
  );
}

export default App;
