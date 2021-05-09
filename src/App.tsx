import { GlobalStyles } from 'global'
import { Home } from 'pages/home'

import ReactModal from 'react-modal'
import { Provider } from 'react-redux'
import store from 'store'

ReactModal.setAppElement('#root')

const App: React.FC = () => {
  return (
    <>
      <Provider store={store}>
        <Home />
      </Provider>
      <GlobalStyles />
    </>
  )
}

export default App
