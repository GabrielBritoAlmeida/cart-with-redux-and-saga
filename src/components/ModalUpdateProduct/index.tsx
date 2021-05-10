import { useEffect, useState } from 'react'
import Modal from 'react-modal'
import { useDispatch } from 'react-redux'
import { updateProductsRequest } from 'store/modules/product/update_product/action'
import { deleteProductsRequest } from 'store/modules/product/delete_product/action'
import { IUpdateProduct } from 'store/modules/product/update_product/types'

type ModalNewProductProps = {
  modalIsOpen: boolean
  closeModal: () => void
  product?: IUpdateProduct
}

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
}

import * as S from './styles'

export function ModalUpdateProduct({
  modalIsOpen,
  closeModal,
  product
}: ModalNewProductProps) {
  const [nameProduct, setNameProduct] = useState('')
  const [priceProduct, setPriceProduct] = useState('')
  const dispatch = useDispatch()

  useEffect(() => {
    setNameProduct(product?.name ?? '')
    setPriceProduct(product?.price ?? '')
  }, [product])

  function handleSubmit() {
    if (!nameProduct || !priceProduct) {
      return alert('Verifiquei os campos nome e valor do produto!')
    }

    if (product?.id) {
      const obj = {
        id: product?.id ?? '',
        name: nameProduct,
        price: priceProduct
      }
      dispatch(updateProductsRequest(obj))
    }
    closeModal()
  }

  function handleDeleteItem() {
    if (product?.id) {
      const { id } = product
      dispatch(deleteProductsRequest(id))
    }
    closeModal()
  }

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <S.FormModal>
        <S.TitleModal>Editar produto</S.TitleModal>
        <S.InputModal
          required
          type="text"
          placeholder="Nome do produto"
          value={nameProduct}
          onChange={(e) => setNameProduct(e.target.value)}
        />
        <S.InputModal
          required
          type="number"
          placeholder="100 valor em número"
          pattern="[0-9]*{1,5}"
          value={priceProduct}
          onChange={(e) => setPriceProduct(e.target.value)}
        />

        <S.AlignButtonModal>
          <S.ButtonModalCancel type="button" onClick={closeModal}>
            Cancelar
          </S.ButtonModalCancel>
          <S.ButtonModalAdd type="button" onClick={handleSubmit}>
            Salvar Edição
          </S.ButtonModalAdd>
        </S.AlignButtonModal>
        <S.ButtonModalDelete type="button" onClick={handleDeleteItem}>
          Excluir item
        </S.ButtonModalDelete>
      </S.FormModal>
    </Modal>
  )
}
