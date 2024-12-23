import styled, { createGlobalStyle } from 'styled-components'

export const Cores = {
  bege: '#fff8f2',
  rosa: '#e66767',
  branca: '#ffff',
  amarela: '#ffb930'
}
export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: san-serif;


    body {
      bacground-color: ${Cores.bege};
      color: ${Cores.rosa};
    }
}

`
export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
`
