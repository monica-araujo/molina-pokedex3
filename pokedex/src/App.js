import React from 'react'
import { Router } from './router/router'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import logo from '../src/img/logo.png'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: Arial, Helvetica, sans-serif
  }

  body {
    background-color: #daf2da;
    color: black;

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
  position: fixed;
  
`

const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: 100px 100px 1fr 100px 100px;
  justify-content: center;
  align-items: center;
  width: 100vw;
`

const LogoContainer = styled.div`
  grid-column-start: 2;
`

const ButtonContainer = styled.div`
  grid-column-start: 4;
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
              <img src={logo} width='120%' />
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
