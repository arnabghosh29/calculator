
import { Provider } from 'react-redux'
import './App.css'
import MatrixApp from './components/MatrixApp'
import { store } from './store'

function App() {


  return (
    <>
      <Provider store={store}>
        <MatrixApp />
      </Provider>

    </>
  )
}

export default App
