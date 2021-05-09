import Modal from 'react-modal'

type ModalNewProductProps = {
  modalIsOpen: boolean
  closeModal: () => void
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

export function ModalNewProduct({
  modalIsOpen,
  closeModal
}: ModalNewProductProps) {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <h1>Modal</h1>
    </Modal>
  )
}
