import { Button } from 'components/Button'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listProductsRequest } from 'store/modules/list_products/action'
import { IProduct } from 'store/modules/list_products/types'
import { ICartItem } from 'store/modules/cart/types'
import {
  addProductToCartRequest,
  removeProductToCartRequest,
  deleteProductCartRequest
} from 'store/modules/cart/action'
import { IState } from 'store'
import { ModalNewProduct } from 'components/ModalNewProduct'
import { formatPrice } from 'util/format'

import * as S from './styles'

export const Home: React.FC = () => {
  const [open, setOpen] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(listProductsRequest())
  }, [dispatch])

  const list = useSelector<IState, IProduct[]>(
    (state) => state.listProducts.items
  )

  const handleAddToCart = useCallback(
    (product: IProduct) => {
      dispatch(addProductToCartRequest(product))
    },
    [dispatch]
  )

  const handleRemoveToCart = useCallback(
    (product: IProduct) => {
      dispatch(removeProductToCartRequest(product))
    },
    [dispatch]
  )

  const handleDeleteFromCart = useCallback(
    (id: number) => {
      dispatch(deleteProductCartRequest(id))
    },
    [dispatch]
  )

  const cartList = useSelector<IState, ICartItem[]>((state) => state.cart.items)

  const handleCalcTotalPrice = formatPrice(
    cartList.reduce((sumTotal, item) => {
      return sumTotal + item.product.price * item.quantity
    }, 0)
  )

  const lisCartElements = useMemo(() => {
    return cartList.map((item) => (
      <S.ProductCart key={item.product.id}>
        <Button>{item.product.name}</Button>
        <Button>{item.quantity}</Button>
        <Button onClick={() => handleDeleteFromCart(item.product.id)}>x</Button>
      </S.ProductCart>
    ))
  }, [cartList, handleDeleteFromCart])

  const listProductsElements = useMemo(() => {
    return list.map((item) => (
      <S.Product key={item.id}>
        <Button>{item.name}</Button>
        <Button>{formatPrice(item.price)}</Button>
        <Button onClick={() => handleAddToCart(item)}>+ Buy</Button>
        <Button onClick={() => handleRemoveToCart(item)}>- Remove</Button>
      </S.Product>
    ))
  }, [list, handleAddToCart, handleRemoveToCart])

  return (
    <S.Wrapper>
      <S.Container>
        <S.SectionProducts>
          <S.Title>Lista de Produtos</S.Title>
          {listProductsElements}
        </S.SectionProducts>

        <S.Cart>
          <S.Title>Carrinho</S.Title>
          {lisCartElements}
        </S.Cart>
      </S.Container>

      <S.Footer>
        <Button onClick={() => setOpen(true)}>Adicionar novo produto</Button>
        <Button style={{ marginLeft: 16 }}>
          Valor total: {handleCalcTotalPrice}
        </Button>
      </S.Footer>
      <ModalNewProduct modalIsOpen={open} closeModal={() => setOpen(false)} />
    </S.Wrapper>
  )
}
