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
    height: 5000px;
  }

  button {
    border: none;
    cursor:pointer;
    padding: 10px;
  }
`


const Header = styled.header`
  background-color: rgba(25, 0, 51, 0.9);
  height: 50px;
  display: flex;
  align-items: center;
  padding-left: 15px;
  position: fixed;
  width: 100vw;
`

const H1 = styled.h1`
  color: yellow;
`
const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: 100px 100px 800px 100px 100px;
`

const LogoContainer = styled.div`
  grid-column-start: 2;
`

const ButtonContainer = styled.div`
  grid-column-start: 5;
`
const Button = styled.button`
  background-color: purple;
  color: white;
  border: none;
  border-radius: 15px;
`
function App() {
  return (
    <div>
      <GlobalStyle/>
        <Header>
          <HeaderContainer>
            <LogoContainer>
              <H1>Pokedex</H1>
            </LogoContainer>
            <ButtonContainer>
              <Button>Pokedex</Button>
            </ButtonContainer>
          </HeaderContainer>
        </Header>
        <Router />
    </div>
  );
}

export default App;
