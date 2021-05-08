import { Button } from 'components/Button'

import styles from 'home.module.css'

const App: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div>
        <Button>Lista de produtos</Button>
      </div>

      <div>
        <Button>Carrinho</Button>
      </div>
    </div>
  )
}

export default App
