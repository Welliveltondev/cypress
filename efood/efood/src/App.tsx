import React from 'react'
import './App.css'
import Header from './components/Header'
import { Container, GlobalStyle } from './stylesGlobal'

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Header />
      </Container>
    </>
  )
}

export default App
