import { Button } from 'components/Button'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listProductsRequest } from 'store/modules/list_products/action'
import { IProduct } from 'store/modules/list_products/types'
import { IUpdateProduct } from 'store/modules/update_product/types'
import { ICartItem } from 'store/modules/cart/types'
import {
  addProductToCartRequest,
  removeProductToCartRequest,
  deleteProductCartRequest
} from 'store/modules/cart/action'
import { IState } from 'store'
import { ModalNewProduct } from 'components/ModalNewProduct'
import { ModalUpdateProduct } from 'components/ModalUpdateProduct'
import { formatPrice } from 'util/format'

import * as S from './styles'

export const Home: React.FC = () => {
  const [openModalNewProduct, setOpenModalNewProduct] = useState(false)
  const [openModalUpdateProduct, setOpenModalUpdateProduct] = useState(false)
  const [product, setProduct] = useState<IUpdateProduct>()
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
    (id: string) => {
      dispatch(deleteProductCartRequest(id))
    },
    [dispatch]
  )

  const cartList = useSelector<IState, ICartItem[]>((state) => state.cart.items)

  const handleCalcTotalPrice = formatPrice(
    cartList.reduce((sumTotal, item) => {
      return sumTotal + Number(item.product.price) * item.quantity
    }, 0)
  )

  function handleItemUpdate(item: IProduct) {
    const { id, name, price } = item
    const newObjType: IUpdateProduct = { id, name, price }
    setProduct(newObjType)
    setOpenModalUpdateProduct(true)
  }

  const lisCartElements = useMemo(() => {
    return cartList.map((item) => (
      <S.ProductCart key={item.product.id}>
        <S.Text>{item.product.name}</S.Text>
        <S.Text>{item.quantity}</S.Text>
        <Button onClick={() => handleDeleteFromCart(item.product.id)}>x</Button>
      </S.ProductCart>
    ))
  }, [cartList, handleDeleteFromCart])

  const listProductsElements = useMemo(() => {
    return list.map((item) => (
      <S.Product key={item.id}>
        <Button onClick={() => handleItemUpdate(item)} title="Editar">
          {item.name}
        </Button>
        <S.Text>{formatPrice(Number(item.price))}</S.Text>
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
        <Button onClick={() => setOpenModalNewProduct(true)}>
          Adicionar novo produto
        </Button>
        <S.Text style={{ marginLeft: 16 }}>
          Valor total: {handleCalcTotalPrice}
        </S.Text>
      </S.Footer>
      <ModalNewProduct
        modalIsOpen={openModalNewProduct}
        closeModal={() => setOpenModalNewProduct(false)}
      />

      <ModalUpdateProduct
        product={product}
        modalIsOpen={openModalUpdateProduct}
        closeModal={() => setOpenModalUpdateProduct(false)}
      />
    </S.Wrapper>
  )
}
