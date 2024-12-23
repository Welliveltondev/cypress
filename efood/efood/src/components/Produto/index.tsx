import React from 'react'
import {
  Fundo,
  BotaoPro,
  Descricao,
  ProdutoContainer,
  TitleProd,
  ImgProduct
} from './styles'

const Produto = () => (
  <Fundo>
    <ImgProduct src="//placeholder.it/472x218" >
      <a>Destaque da semana</a>
      <span>Japonesa</span>
    <ImgProduct/>

    <ProdutoContainer>
    <TitleProd>Hioki Sushi</TitleProd>
      <span>
        4.9 <img src="" alt="" />
      </span>
    </ProdutoContainer>
    <Descricao>
      Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis
      frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega
      rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão
      sem sair do lar com nosso delivery!
    </Descricao>
    <BotaoPro type="submit">Saiba mais</BotaoPro>
  </Fundo>
)

export default Produto
