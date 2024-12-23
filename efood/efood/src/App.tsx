import React from 'react'
import './App.css'
import Header from './components/Header'
import { Container, GlobalStyle } from './stylesGlobal'
import { ListaCont } from './components/Listagem/styles'
import { RestContai_ } from './components/Restaurante/styles'

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Header />
        <ListaCont />
        <RestContai_ />
      </Container>
    </>
  )
}

export default App
