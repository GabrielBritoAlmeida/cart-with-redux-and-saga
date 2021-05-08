import { Button } from 'components/Button'

import * as S from './styles'

export const Home: React.FC = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.SectionProducts>
          <S.Title>Lista de Produtos</S.Title>
          <S.Product>
            <Button>Produto 1</Button>
            <Button>R$99,90</Button>
            <Button>+ Buy</Button>
            <Button>- Remove</Button>
          </S.Product>

          <S.Product>
            <Button>Produto 2</Button>
            <Button>R$99,90</Button>
            <Button>+ Buy</Button>
            <Button>- Remove</Button>
          </S.Product>
        </S.SectionProducts>

        <S.Cart>
          <S.Title>Carrinho</S.Title>

          <S.ProductCart>
            <Button>Produto 1</Button>
            <Button>2</Button>
            <Button>x</Button>
          </S.ProductCart>

          <S.ProductCart>
            <Button>Produto 2</Button>
            <Button>5</Button>
            <Button>x</Button>
          </S.ProductCart>
        </S.Cart>
      </S.Container>

      <S.Footer>
        <Button>Adicionar novo produto</Button>
        <Button style={{ marginLeft: 16 }}>Valor total: R$499,30</Button>
      </S.Footer>
    </S.Wrapper>
  )
}
