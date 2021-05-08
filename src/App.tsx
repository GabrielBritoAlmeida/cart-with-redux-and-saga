import { GlobalStyles } from 'global'
import { Home } from 'pages/home'

import { Provider } from 'react-redux'
import store from 'store'

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
