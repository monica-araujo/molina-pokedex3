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




function App() {
  return (
    <div>
      <GlobalStyle/>
        <Router />
    </div>
  );
}

export default App;
