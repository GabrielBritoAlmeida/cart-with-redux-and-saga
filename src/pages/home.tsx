import { Button } from 'components/Button'
import { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listProductsRequest } from 'store/modules/list_products/action'
import { IProduct } from 'store/modules/list_products/types'
import { IState } from 'store'

import * as S from './styles'

export const Home: React.FC = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(listProductsRequest())
  }, [dispatch])

  const list = useSelector<IState, IProduct[]>(
    (state) => state.listProducts.items
  )

  const listProductsElements = useMemo(() => {
    return list.map((item) => (
      <S.Product key={item.id}>
        <Button>{item.name}</Button>
        <Button>{item.price}</Button>
        <Button>+ Buy</Button>
        <Button>- Remove</Button>
      </S.Product>
    ))
  }, [list])

  return (
    <S.Wrapper>
      <S.Container>
        <S.SectionProducts>
          <S.Title>Lista de Produtos</S.Title>
          {listProductsElements}
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
